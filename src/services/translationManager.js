import { offlineEngine } from './offlineEngine';
import { storageService } from './storageService';
import { speechService } from './speechService';

function decodeHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

export const translationManager = {
  isOnline() {
    return typeof navigator !== 'undefined' && navigator.onLine;
  },

  // Free online translation fallback (works without backend)
  async translateFreeOnline({ text, sourceLang, targetLang }) {
    const src = sourceLang.split('-')[0].toLowerCase();
    const tgt = targetLang.split('-')[0].toLowerCase();
    const langpair = `${src}|${tgt}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.trim())}&langpair=${langpair}`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      return decodeHtmlEntities(data.responseData.translatedText);
    }
    throw new Error(data.responseDetails || 'Translation failed');
  },

  async translate({ text, sourceLang, targetLang, simplified = false, isSpokenInput = false, forceOffline = false }) {
    if (!text || !text.trim()) {
      return {
        translation: '',
        phonetic: '',
        isOffline: false,
        engine: 'Bereit',
        duration: '0.0s',
      };
    }

    const startTime = Date.now();
    const online = this.isOnline() && !forceOffline;

    let result = {
      translation: '',
      phonetic: '',
      isOffline: false,
      engine: '',
      learningTip: '',
    };

    // 1. If online, call the server-protected Vercel Serverless Function
    if (online) {
      try {
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: text.trim(),
            sourceLang,
            targetLang,
            simplified,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.translation) {
            result = {
              translation: data.translation,
              phonetic: data.phonetic || ((targetLang === 'uk' || targetLang === 'ru') ? speechService.generatePhoneticAid(data.translation, targetLang) : ''),
              isOffline: false,
              engine: 'Schul-KI (Gemini)',
              learningTip: data.learningTip || '',
            };
          }
        } else {
          throw new Error(`Server returned ${response.status}`);
        }
      } catch (err) {
        console.warn('Serverless KI translation failed, falling back to direct online:', err.message);
        try {
          const freeTranslation = await this.translateFreeOnline({ text, sourceLang, targetLang });
          result = {
            translation: freeTranslation,
            phonetic: (targetLang === 'uk' || targetLang === 'ru') ? speechService.generatePhoneticAid(freeTranslation, targetLang) : '',
            isOffline: false,
            engine: 'Online-Übersetzung',
          };
        } catch (freeErr) {
          console.warn('Free online failed, falling back to offline dictionary:', freeErr);
          const offlineRes = offlineEngine.translate({
            text,
            sourceLang,
            targetLang,
            simplified,
          });

          result = {
            translation: offlineRes.translation,
            phonetic: offlineRes.phonetic,
            isOffline: true,
            engine: 'Geräte-KI (Offline)',
          };
        }
      }
    } else {
      // 2. Offline Mode directly
      const offlineRes = offlineEngine.translate({
        text,
        sourceLang,
        targetLang,
        simplified,
      });

      result = {
        translation: offlineRes.translation,
        phonetic: offlineRes.phonetic,
        isOffline: true,
        engine: 'Geräte-KI (Offline)',
      };
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(2) + 's';

    // Add to local history
    if (result.translation) {
      storageService.addToHistory({
        sourceText: text,
        targetText: result.translation,
        sourceLang,
        targetLang,
        isOffline: result.isOffline,
        phonetic: result.phonetic,
      });
    }

    return {
      ...result,
      duration,
    };
  }
};
