/**
 * Vercel Serverless Function: /api/translate
 * Schützt den GEMINI_API_KEY serverseitig für den Schüler-Übersetzer
 * und nutzt die aktuelle Flash-Modell-Kaskade.
 */

const CANDIDATE_FLASH_MODELS = [
  'gemini-4-hydrogen',
  'gemini-flash-lite-latest',
  'gemini-3.5-flash-lite',
  'gemini-3.8-flash',
  'gemini-3.6-flash',
  'gemini-flash-latest',
];

const REQUEST_TIMEOUT_MS = 35000;

function isOriginAllowed(urlStr, requestHost) {
  try {
    const parsed = new URL(urlStr);
    const hostname = parsed.hostname.toLowerCase();
    const host = parsed.host.toLowerCase();
    if (requestHost && host === requestHost.toLowerCase()) return true;
    if (hostname === 'localhost' || hostname === '127.0.0.1') return true;
    const extraOrigins = (process.env.ALLOWED_ORIGINS || '')
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
    return extraOrigins.includes(parsed.origin.toLowerCase());
  } catch {
    return false;
  }
}

function applyOriginProtection(req, res) {
  const rawHost = req.headers?.['x-forwarded-host'] || req.headers?.host || '';
  const requestHost = (Array.isArray(rawHost) ? rawHost[0] : String(rawHost)).split(',')[0].trim();
  const rawOrigin = req.headers?.origin;
  const origin = Array.isArray(rawOrigin) ? rawOrigin[0] : (rawOrigin || '');
  const rawReferer = req.headers?.referer;
  const referer = Array.isArray(rawReferer) ? rawReferer[0] : (rawReferer || '');

  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Vary', 'Origin');

  if (origin && isOriginAllowed(origin, requestHost)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  if (req.method === 'OPTIONS') {
    if (origin && !isOriginAllowed(origin, requestHost)) {
      res.status(403).json({ error: 'CORS: Herkunft nicht erlaubt.' });
      return false;
    }
    res.status(200).end();
    return false;
  }

  if (origin) {
    if (!isOriginAllowed(origin, requestHost)) {
      res.status(403).json({ error: 'Zugriff verweigert: Unzulässige Herkunft (Origin).' });
      return false;
    }
    return true;
  }

  if (referer && isOriginAllowed(referer, requestHost)) {
    return true;
  }

  res.status(403).json({ error: 'Zugriff verweigert: Fehlender Origin-Header.' });
  return false;
}

export default async function handler(req, res) {
  if (!applyOriginProtection(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY ist in Vercel noch nicht als Umgebungsvariable hinterlegt.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: 'Ungültiges JSON im Request-Body.' });
      }
    }
    const { text, sourceLang, targetLang, simplified } = body || {};
    if (!text || !String(text).trim()) {
      return res.status(400).json({ error: 'Kein Text übergeben.' });
    }

    const systemInstruction = `Du bist der offizielle KI-Schul-Übersetzer der Heimbürgeschule Kahla speziell für Schülerinnen und Schüler.
Deine Aufgabe ist es, Schülerinnen und Schülern zu helfen, sich im Unterricht verständlich zu machen und Deutsch zu lernen (DaZ).
Übersetze immer präzise, freundlich, natürlich und kindgerecht.
${simplified ? 'Verwende besonders einfache Wörter und kurze Sätze (Leichte Sprache für Schüler).' : ''}

Erstelle IMMER ein valides JSON-Objekt mit exakt folgender Struktur:
{
  "translation": "Die fertige Übersetzung",
  "phonetic": "Aussprachehilfe in lateinischer Lautschrift (besonders wichtig, wenn Ziel- oder Ausgangssprache Ukrainisch, Russisch oder Arabisch ist)",
  "learningTip": "Ein kurzer, ermutigender Mini-Tipp zum Deutschlernen oder zur Höflichkeit im Klassenzimmer"
}`;

    const prompt = `Ausgangssprache: ${sourceLang}
Zielsprache: ${targetLang}
Zu übersetzender Text: "${String(text).trim()}"

Antworte ausschließlich im reinen JSON-Format.`;

    let lastError = '';

    for (const currentModel of CANDIDATE_FLASH_MODELS) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(currentModel)}:generateContent?key=${encodeURIComponent(apiKey)}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

      try {
        const geminiRes = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] },
            generationConfig: {
              responseMimeType: 'application/json',
              temperature: 0.2,
              maxOutputTokens: 1000,
            },
          }),
        });

        clearTimeout(timeoutId);

        if (!geminiRes.ok) {
          const errBody = await geminiRes.text();
          lastError = `${currentModel}: ${errBody}`;
          continue;
        }

        const data = await geminiRes.json();
        const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!candidateText) {
          lastError = `${currentModel}: Leere Antwort`;
          continue;
        }

        let parsed;
        try {
          parsed = JSON.parse(candidateText);
        } catch {
          const clean = candidateText.replace(/```json/g, '').replace(/```/g, '').trim();
          parsed = JSON.parse(clean);
        }

        return res.status(200).json({ ...parsed, model: currentModel });
      } catch (err) {
        clearTimeout(timeoutId);
        lastError =
          err?.name === 'AbortError'
            ? `Timeout nach ${REQUEST_TIMEOUT_MS / 1000}s bei ${currentModel}`
            : err?.message || String(err);
      }
    }

    return res.status(502).json({ error: `Kein Gemini-Modell erreichbar: ${lastError}` });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Interner Serverfehler' });
  }
}
