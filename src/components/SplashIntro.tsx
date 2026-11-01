import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/mockData';

interface SplashIntroProps {
  onComplete: () => void;
}

export const SplashIntro: React.FC<SplashIntroProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [phase, setPhase] = useState<'initial' | 'glow' | 'reveal' | 'ready'>('initial');

  useEffect(() => {
    // Phase 1: Light beam trigger
    const t1 = setTimeout(() => setPhase('glow'), 300);
    const t2 = setTimeout(() => setPhase('reveal'), 900);
    const t3 = setTimeout(() => setPhase('ready'), 2200);

    // Progress bar ticker
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 110);

    // Auto complete after 3.2 seconds
    const autoFinish = setTimeout(() => {
      onComplete();
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(autoFinish);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03050c] text-white overflow-hidden select-none">
      {/* Background Cinematic Radial Beams */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.18)_0%,rgba(14,165,233,0.08)_45%,rgba(3,5,12,1)_75%)] pointer-events-none" />

      {/* Cyber Grid Lines in background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-30 pointer-events-none" />

      {/* Ambient Sweeping Light Beam */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-[600px] bg-gradient-to-b from-amber-400/20 via-yellow-500/10 to-transparent blur-3xl transform rotate-12 pointer-events-none" />

      {/* Center 3D Logo Stage */}
      <div className="relative flex flex-col items-center text-center px-4 z-10">
        {/* Pulsing Aura Rings */}
        <div className="relative mb-6">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-amber-500/30 via-yellow-400/20 to-amber-600/30 blur-2xl animate-pulse" />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-600 opacity-60 blur-sm" />

          {/* 3D Metallic Gold & Chrome AG Logo */}
          <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-3xl overflow-hidden border-2 border-amber-400/80 shadow-[0_0_50px_rgba(245,158,11,0.4)] bg-black p-1 transition-all duration-700 transform hover:scale-105">
            <img
              src="/logo.jpg"
              alt="AG DIGITAL 3D Logo"
              className="h-full w-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />

            {/* Specular Light Sweep overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" />
          </div>
        </div>

        {/* Title & Brand Wordmark */}
        <div className={`transition-all duration-700 transform ${
          phase === 'initial' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-amber-400 uppercase">
              OFFICIAL LAUNCH
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
            AG DIGITAL
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 tracking-wide">
            Business Promotion & Online Solutions
          </p>

          <div className="mt-2 text-[11px] font-mono text-amber-300/90 bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-full inline-block">
            Developed by {DEVELOPER_INFO.name}
          </div>
        </div>

        {/* Progress Loading Bar */}
        <div className="mt-8 w-64 sm:w-72">
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1.5">
            <span>STARTING ENGINE</span>
            <span className="text-amber-400 font-bold">{progress}%</span>
          </div>

          <div className="h-1.5 w-full rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 transition-all duration-150 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip / Enter Now Button */}
        <button
          onClick={onComplete}
          className="mt-6 flex items-center gap-1.5 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-950/20 text-xs font-semibold text-amber-300 hover:bg-amber-900/40 hover:text-white transition cursor-pointer"
        >
          <span>সরাসরি অ্যাপে প্রবেশ করুন</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Bottom Technical Spec Footer */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-6 text-[10px] font-mono text-slate-400">
        <span>AG DIGITAL PRO v2.4.0</span>
        <span className="text-amber-400/80">36.4 MB · Standalone Engine</span>
        <span>All Rights Reserved</span>
      </div>
    </div>
  );
};
