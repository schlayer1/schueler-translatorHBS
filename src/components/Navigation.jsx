import React, { useState, useEffect } from 'react';
import { Languages, BookOpen, Bookmark, SlidersHorizontal } from 'lucide-react';
import { storageService } from '../services/storageService';
import { getUIText } from '../data/uiTranslations';

export default function Navigation({ currentTab, onSelectTab }) {
  const [studentLang, setStudentLang] = useState(() => storageService.getStudentProfile().nativeLang || 'uk');

  useEffect(() => {
    const handleProfileChange = (e) => {
      const p = e.detail || storageService.getStudentProfile();
      if (p.nativeLang) setStudentLang(p.nativeLang);
    };
    window.addEventListener('heimbuerge_student_profile_changed', handleProfileChange);
    return () => {
      window.removeEventListener('heimbuerge_student_profile_changed', handleProfileChange);
    };
  }, []);

  const t = getUIText(studentLang);

  const tabs = [
    { id: 'translate', label: t.tabTranslate, icon: Languages },
    { id: 'phrases', label: t.tabPhrases, icon: BookOpen, badge: t.tabPhrasesBadge },
    { id: 'saved', label: t.tabSaved, icon: Bookmark },
    { id: 'settings', label: t.tabSettings, icon: SlidersHorizontal },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-40 pb-safe bg-[#FFFBF5]/90 backdrop-blur-xl border-t border-slate-200/80 shadow-[0_-1px_3px_rgba(0,0,0,0.02),0_-8px_16px_-6px_rgba(11,123,167,0.03)]">
      <div className="max-w-md mx-auto flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 min-h-[44px] transition-all active:scale-[0.94] relative ${
                isActive
                  ? 'text-school-blue font-bold'
                  : 'text-slate-500 hover:text-slate-900 font-medium'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 stroke-[2.2px]' : 'stroke-[1.8px]'}`} />
                {tab.badge && (
                  <span className="absolute -top-1.5 -right-3 px-1.5 py-0.2 bg-school-orange text-white text-[9px] font-black rounded-full leading-tight uppercase shadow-xs">
                    {tab.badge}
                  </span>
                )}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-school-orange absolute -bottom-1.5"></span>
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight truncate max-w-[80px]">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
