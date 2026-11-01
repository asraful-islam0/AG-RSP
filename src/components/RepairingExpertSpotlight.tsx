import React from 'react';
import { Sparkles, Smartphone, Laptop, Globe, ArrowRight, BookOpen, CheckCircle, Download } from 'lucide-react';
import { Language } from '../types';
import { DEVELOPER_INFO } from '../data/mockData';

interface RepairingExpertSpotlightProps {
  language: Language;
}

export const RepairingExpertSpotlight: React.FC<RepairingExpertSpotlightProps> = ({ language }) => {
  const handleInquireApp = () => {
    const text = encodeURIComponent(
      `Hello Asraful Bhai, আমি আপনার "রিপেয়ারিং এক্সপার্ট (Repairing Expert)" অ্যাপ সম্পর্কে জানতে চাই এবং মোবাইল/কম্পিউটার/ওয়েব ডিজাইনিং শিখতে চাই। দয়া করে বিস্তারিত বলুন।`
    );
    window.open(`https://wa.me/${DEVELOPER_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="repairing_expert" className="py-16 sm:py-24 border-t border-cyan-500/20 bg-[#050914] relative overflow-hidden">
      {/* Cyan Glow Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#081224] via-[#0a152e] to-[#070b18] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>{language === 'bn' ? 'আমাদের জনপ্রিয় লার্নিং অ্যাপ' : 'Our Flagship Learning Platform'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
                {DEVELOPER_INFO.learningAppName}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                {language === 'bn'
                  ? 'যেখানে যে কেউ খুব সহজে ঘরে বসেই মোবাইল সার্ভিসিং, কম্পিউটার হার্ডওয়্যার/সফটওয়্যার এবং আধুনিক ওয়েব ডিজাইনিং শিখতে পারবেন। নিজের পায়ে দাঁড়ানোর জন্য সেরা টেকনিক্যাল স্কিল ডেভেলপমেন্ট অ্যাপ!'
                  : DEVELOPER_INFO.learningAppDescEn}
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 mb-8">
                <div className="rounded-2xl border border-slate-800 bg-[#070d1c] p-4 text-center">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-2">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs font-bold text-white">মোবাইল রিপেয়ারিং</h4>
                  <p className="text-[11px] text-slate-400 mt-1">ডিসপ্লে, আইসি ও ডায়াগনস্টিকস</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#070d1c] p-4 text-center">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-2">
                    <Laptop className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs font-bold text-white">কম্পিউটার ট্রাবলশুট</h4>
                  <p className="text-[11px] text-slate-400 mt-1">হার্ডওয়্যার, বায়োস ও উইন্ডোজ</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#070d1c] p-4 text-center">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs font-bold text-white">ওয়েব ডিজাইনিং</h4>
                  <p className="text-[11px] text-slate-400 mt-1">সহজে ওয়েবসাইট তৈরি ও কোডিং</p>
                </div>
              </div>

              {/* CTA Action */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleInquireApp}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-black hover:bg-cyan-300 transition cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>{language === 'bn' ? 'রিপেয়ারিং এক্সপার্ট বিস্তারিত জানুন' : 'Learn with Repairing Expert'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-cyan-500/30 bg-[#060b18] p-6 text-center">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center mx-auto mb-4 text-black font-extrabold text-2xl shadow-lg">
                  RE
                </div>
                <h3 className="text-lg font-bold text-white">
                  রিপেয়ারিং এক্সপার্ট মোবাইল অ্যাপ
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  By {DEVELOPER_INFO.name}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2 text-xs text-slate-300 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>সহজ বাংলায় ভিডিও ও প্র্যাকটিক্যাল গাইড</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>হাতে-কলমে কাজ শিখে নিজের দোকান খোলার উপযোগী</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>আশরাফুল ইসলামের সার্বক্ষণিক মেন্টরশিপ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
