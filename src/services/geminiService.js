// Schlanker Serverless-Proxy-Client für den Schüler-Übersetzer (/api/translate)

const TRUSTED_MODELS = [
  'gemini-4-hydrogen',
  'gemini-flash-lite-latest',
  'gemini-3.5-flash-lite',
  'gemini-3.8-flash',
  'gemini-3.6-flash',
  'gemini-flash-latest',
];

export async function discoverBestModel() {
  return { model: TRUSTED_MODELS[0], version: 'v1beta' };
}

export const geminiService = {
  async translate({ text, sourceLang, targetLang, simplified = false }) {
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: String(text || '').trim(),
        sourceLang,
        targetLang,
        simplified,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData?.error || `Serverfehler (${res.status})`);
    }

    const data = await res.json();
    return {
      translation: data.translation || '',
      phonetic: data.phonetic || '',
      pedagogicalTip: data.learningTip || '',
      modelUsed: data.model || TRUSTED_MODELS[0],
    };
  },
};
