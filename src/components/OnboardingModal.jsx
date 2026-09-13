import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Languages, 
  Volume2, 
  BookOpen, 
  X, 
  ArrowRight,
  User,
  Check
} from 'lucide-react';
import { storageService } from '../services/storageService';
import { getUIText } from '../data/uiTranslations';

const ONBOARDING_LANGUAGES = [
  { code: 'uk', name: 'Українська', flag: '🇺🇦', sub: 'Ukrainisch' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', sub: 'Russisch' },
  { code: 'en', name: 'English', flag: '🇬🇧', sub: 'Englisch' },
  { code: 'ro', name: 'Română', flag: '🇷🇴', sub: 'Rumänisch' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺', sub: 'Ungarisch' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', sub: 'Deutsch' },
];

export default function OnboardingModal({ isOpen, onClose, initialStep = 1 }) {
  const [step, setStep] = useState(initialStep); // 1: Language, 2: Name, 3: Welcome Tour
  const [selectedLang, setSelectedLang] = useState('uk');
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    if (isOpen) {
      const profile = storageService.getStudentProfile();
      if (profile.nativeLang) setSelectedLang(profile.nativeLang);
      if (profile.name) setStudentName(profile.name);
      setStep(initialStep || 1);
    }
  }, [isOpen, initialStep]);

  if (!isOpen) return null;

  const t = getUIText(selectedLang);

  const handleSelectLanguage = (langCode) => {
    setSelectedLang(langCode);
    storageService.saveStudentProfile({ nativeLang: langCode });
    setStep(2);
  };

  const handleSaveNameAndProceed = () => {
    storageService.saveStudentProfile({ name: studentName, nativeLang: selectedLang });
    setStep(3);
  };

  const handleFinish = () => {
    storageService.saveStudentProfile({ name: studentName, nativeLang: selectedLang });
    storageService.setOnboardingSeen(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-school-blue to-school-teal text-white p-5 flex items-center justify-between relative overflow-hidden">
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-2xl bg-white p-0.5 shadow-sm shrink-0 flex items-center justify-center">
              <img 
                src="/siegel_bunt.png" 
                alt="Heimbürgeschule" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-200">
                  {t.welcomeSchool}
                </span>
                <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-white text-[10px] font-bold">
                  {t.studentBadge}
                </span>
              </div>
              <h2 className="text-base font-extrabold text-white leading-tight">
                {step === 1 && t.selectLanguageTitle}
                {step === 2 && t.whatIsYourName}
                {step === 3 && (studentName.trim() ? `${t.welcomeTitle}, ${studentName.trim()}! 👋` : `${t.welcomeTitle}! 👋`)}
              </h2>
            </div>
          </div>

          <button
            onClick={handleFinish}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors relative z-10"
            aria-label="Schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 border-b border-slate-100">
          <span className={`h-1.5 rounded-full transition-all ${step === 1 ? 'w-6 bg-school-blue' : 'w-1.5 bg-slate-300'}`} />
          <span className={`h-1.5 rounded-full transition-all ${step === 2 ? 'w-6 bg-school-blue' : 'w-1.5 bg-slate-300'}`} />
          <span className={`h-1.5 rounded-full transition-all ${step === 3 ? 'w-6 bg-school-blue' : 'w-1.5 bg-slate-300'}`} />
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* STEP 1: Language Selection */}
          {step === 1 && (
            <div className="space-y-3">
              <p className="text-slate-600 text-xs text-center">
                {t.selectLanguageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {ONBOARDING_LANGUAGES.map((lang) => {
                  const isSelected = selectedLang === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectLanguage(lang.code)}
                      className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all text-left active:scale-[0.97] ${
                        isSelected 
                          ? 'border-school-teal bg-teal-50/70 shadow-sm ring-2 ring-school-teal/20' 
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80 shadow-2xs'
                      }`}
                    >
                      <span className="text-2xl shrink-0">{lang.flag}</span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-slate-900 leading-tight truncate">
                          {lang.name}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium truncate">
                          {lang.sub}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Name Input */}
          {step === 2 && (
            <div className="space-y-4 py-2">
              <div className="text-center space-y-1">
                <div className="w-14 h-14 mx-auto rounded-full bg-school-blue/10 border border-school-blue/20 flex items-center justify-center text-school-blue shadow-inner">
                  <User className="w-7 h-7" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 pt-2">
                  {t.whatIsYourName}
                </h3>
                <p className="text-xs text-slate-500">
                  {selectedLang === 'uk' && "Введи своє ім'я, щоб ми могли вітати тебе особисто."}
                  {selectedLang === 'ru' && "Введи своё имя, чтобы мы могли обращаться к тебе лично."}
                  {selectedLang === 'en' && "Enter your first name so we can address you personally."}
                  {selectedLang === 'ro' && "Introdu prenumele tău pentru a te saluta personal."}
                  {selectedLang === 'hu' && "Add meg a nevedet, hogy személyesen üdvözölhessünk."}
                  {selectedLang === 'de' && "Gib deinen Vornamen ein, damit die App dich persönlich ansprechen kann."}
                </p>
              </div>

              <div className="max-w-xs mx-auto space-y-2">
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSaveNameAndProceed();
                  }}
                  placeholder={t.namePlaceholder}
                  autoFocus
                  className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-school-blue focus:ring-4 focus:ring-school-blue/10 text-center font-bold text-base text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-inner"
                />
              </div>

              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Zurück
                </button>
                <button
                  onClick={handleSaveNameAndProceed}
                  className="px-6 py-2.5 rounded-xl bg-school-blue text-white font-bold text-xs flex items-center gap-1.5 shadow-md hover:bg-school-blueDark transition-all active:scale-[0.97]"
                >
                  <span>{t.continueBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Welcome Tour */}
          {step === 3 && (
            <div className="space-y-4">
              <p className="text-slate-600 text-xs leading-relaxed">
                {t.welcomeSubtitle}
              </p>

              {/* Core Features Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-school-blue font-bold text-xs">
                    <div className="w-6 h-6 rounded-lg bg-school-blue/10 flex items-center justify-center">
                      <Languages className="w-3.5 h-3.5 text-school-blue" />
                    </div>
                    <span>{t.cardLanguagesTitle}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {t.cardLanguagesDesc}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-blue-50/60 border border-school-blue/30 flex flex-col gap-1.5 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-school-blue font-bold text-xs">
                    <div className="w-6 h-6 rounded-lg bg-school-blue/15 flex items-center justify-center">
                      <Volume2 className="w-3.5 h-3.5 text-school-blue" />
                    </div>
                    <span>{t.cardListenTitle}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    {t.cardListenDesc}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-school-orange font-bold text-xs">
                    <div className="w-6 h-6 rounded-lg bg-school-orange/10 flex items-center justify-center">
                      <BookOpen className="w-3.5 h-3.5 text-school-orange" />
                    </div>
                    <span>{t.cardPhrasesTitle}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {t.cardPhrasesDesc}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200/60 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-school-teal/15 flex items-center justify-center shrink-0 text-school-teal mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-xs text-slate-900">
                      Schul-KI
                    </span>
                    <p className="text-[11px] text-slate-600 leading-normal">
                      Automatisch aktiviert für dich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Zurück
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors px-2 py-1"
            >
              {t.skipBtn}
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="h-10 px-5 rounded-2xl bg-gradient-to-r from-school-blue to-school-teal text-white font-extrabold text-xs flex items-center gap-2 shadow-md hover:brightness-105 active:scale-[0.98] transition-all"
            >
              <span>{t.startBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
