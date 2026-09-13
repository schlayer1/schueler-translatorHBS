import React from 'react';
import { 
  Sparkles, 
  Languages, 
  Volume2, 
  BookOpen, 
  X, 
  ArrowRight,
  Download,
  GraduationCap
} from 'lucide-react';
import { storageService } from '../services/storageService';

export default function OnboardingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleClose = () => {
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
                  Heimbürgeschule Kahla
                </span>
                <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-white text-[10px] font-bold">
                  Schüler
                </span>
              </div>
              <h2 className="text-base font-extrabold text-white leading-tight">
                Willkommen im Schüler-Übersetzer!
              </h2>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors relative z-10"
            aria-label="Schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          <p className="text-slate-600 text-xs leading-relaxed">
            Dieser Übersetzer hilft dir an der <strong>Heimbürgeschule</strong>, im Unterricht mitzumachen, Fragen zu stellen und schnell Deutsch zu lernen – <strong>auch komplett ohne Internet (100% offline)</strong>.
          </p>

          {/* Core Features Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-school-blue font-bold text-xs">
                <div className="w-6 h-6 rounded-lg bg-school-blue/10 flex items-center justify-center">
                  <Languages className="w-3.5 h-3.5 text-school-blue" />
                </div>
                <span>6 feste Schulsprachen</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                🇺🇦 Ukrainisch, 🇷🇺 Russisch, 🇬🇧 Englisch, 🇷🇴 Rumänisch und 🇭🇺 Ungarisch sind 100% offline direkt startklar.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-blue-50/60 border border-school-blue/30 flex flex-col gap-1.5 relative overflow-hidden">
              <div className="flex items-center gap-2 text-school-blue font-bold text-xs">
                <div className="w-6 h-6 rounded-lg bg-school-blue/15 flex items-center justify-center">
                  <Volume2 className="w-3.5 h-3.5 text-school-blue" />
                </div>
                <span>Deutsch anhören & lernen</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-normal">
                Drücke auf den blauen Lautsprecher-Knopf, um die deutsche Aussprache zu hören und nachzusprechen.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-school-orange font-bold text-xs">
                <div className="w-6 h-6 rounded-lg bg-school-orange/10 flex items-center justify-center">
                  <BookOpen className="w-3.5 h-3.5 text-school-orange" />
                </div>
                <span>Ich möchte sagen…</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                Wichtige Sätze für den Unterricht: Hilfe bei Aufgaben, Toilette, Unwohlsein oder vergessene Hausaufgaben.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Download className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>Weitere Sprachen</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                In den Optionen kannst du bei Bedarf z. B. Arabisch, Farsi, Türkisch oder Polnisch nachladen.
              </p>
            </div>
          </div>

          {/* KI Highlights Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200/60 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-school-teal/15 flex items-center justify-center shrink-0 text-school-teal mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                Schul-KI von Google Gemini
                <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                  Aktiv
                </span>
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Automatisch für dich freigeschaltet. Sie formuliert Sätze kindgerecht und gibt dir hilfreiche Tipps für die deutsche Sprache.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={handleClose}
            className="h-10 px-5 rounded-2xl bg-gradient-to-r from-school-blue to-school-teal text-white font-extrabold text-xs flex items-center gap-2 shadow-md hover:brightness-105 active:scale-[0.98] transition-all"
          >
            <span>Jetzt loslegen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
