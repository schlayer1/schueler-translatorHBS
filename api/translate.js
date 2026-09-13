export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY ist in Vercel noch nicht als Umgebungsvariable hinterlegt.' });
  }

  try {
    const { text, sourceLang, targetLang, simplified } = req.body || {};
    if (!text || !text.trim()) {
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
Zu übersetzender Text: "${text.trim()}"

Antworte ausschließlich im reinen JSON-Format.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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

    if (!geminiRes.ok) {
      const errBody = await geminiRes.text();
      return res.status(geminiRes.status).json({ error: `Gemini API Fehler: ${errBody}` });
    }

    const data = await geminiRes.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidateText) {
      return res.status(502).json({ error: 'Keine Antwort von Gemini erhalten.' });
    }

    let parsed;
    try {
      parsed = JSON.parse(candidateText);
    } catch {
      const clean = candidateText.replace(/```json/g, '').replace(/```/g, '').trim();
      parsed = JSON.parse(clean);
    }

    return res.status(200).json(parsed);
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Interner Serverfehler' });
  }
}
