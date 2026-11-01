import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, Store, Shield, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { DEVELOPER_INFO, BUSINESS_CATEGORIES } from '../data/mockData';

interface HeroProps {
  language: Language;
  onExploreServices: () => void;
  onExploreDemos: () => void;
  onOpenRepairingApp: () => void;
  onSelectCategory?: (catId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreServices,
  onExploreDemos,
  onOpenRepairingApp,
  onSelectCategory,
}) => {
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Asraful Bhai (AG DIGITAL), I want to promote my shop/business with an affordable website, mobile app or banner. Please share the details.`
    );
    window.open(`https://wa.me/${DEVELOPER_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 bg-gradient-to-b from-[#05070f] via-[#080d1a] to-[#05070f]">
      {/* Subtle Golden Cyber Mesh Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Developer & Sister App Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 p-3 sm:p-3.5 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-950/20 via-slate-900/60 to-cyan-950/20 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium">
              {language === 'en' ? 'Developed by:' : 'ডেভেলপ করেছেন:'}{' '}
              <strong className="text-amber-300 font-bold">{DEVELOPER_INFO.name}</strong>
            </span>
          </div>

          <button
            onClick={onOpenRepairingApp}
            className="flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-xl transition cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>{language === 'en' ? 'Learning App: Repairing Expert' : 'আমাদের অ্যাপ: রিপেয়ারিং এক্সপার্ট'}</span>
          </button>
        </div>

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline, Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Unboxed Metadata Kicker (NO PILLS per design constitution) */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              <span>Ultra Low Cost</span>
              <span aria-hidden="true">·</span>
              <span>Shop Promotion & Digital Setup</span>
              <span aria-hidden="true">·</span>
              <span>100% Premium Design</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-5 [text-wrap:balance]">
              {language === 'en' ? (
                <>
                  Affordable{' '}
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    Websites, Mobile Apps
                  </span>{' '}
                  & HD Banners For Every Local Shop
                </>
              ) : (
                <>
                  যেকোনো নতুন দোকানের{' '}
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    ওয়েবসাইট, মোবাইল অ্যাপ
                  </span>{' '}
                  ও আকর্ষণীয় ব্যানার মেকিং
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-6">
              {language === 'en'
                ? 'Clothing boutique, fruit store, mobile & computer shop, bike showroom, CSP banking kiosk or any retail enterprise—get custom websites, Android apps, and eye-catching promotional banners at unbeatable low rates!'
                : 'কাপড়ের দোকান, ফলের দোকান, মোবাইলের দোকান, কম্পিউটারের দোকান, বাইকের শোরুম, সিএসপি (CSP) কিংবা যেকোনো ছোট-বড় ব্যবসার প্রচার এখন সবচেয়ে কম দামে!'}
            </p>

            {/* Shop Categories Quick Select Bar */}
            <div className="w-full mb-8">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                {language === 'en' ? 'Select Your Shop / Business Category:' : 'আপনার ব্যবসা নির্বাচন করুন:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {BUSINESS_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory(cat.id);
                      onExploreDemos();
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-[#0c1222] hover:border-amber-400/50 hover:bg-slate-800 text-xs text-slate-300 transition cursor-pointer"
                  >
                    <Store className="h-3 w-3 text-amber-400 shrink-0" />
                    <span>{language === 'en' ? cat.nameEn : cat.nameBn}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Clean Client-Facing Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
              <button
                onClick={onExploreServices}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-6 py-3.5 text-xs sm:text-sm font-black text-black shadow-lg shadow-amber-500/25 hover:bg-amber-300 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer whitespace-nowrap"
              >
                <span>{language === 'en' ? 'Explore Services & Pricing' : 'সব সার্ভিস ও রেট দেখুন'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onExploreDemos}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:border-amber-400/40 hover:text-amber-300 transition cursor-pointer whitespace-nowrap"
              >
                <span>{language === 'en' ? 'View Live Demos' : 'লাইভ ডেমো দেখুন'}</span>
              </button>

              <button
                onClick={handleWhatsAppDirect}
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-5 py-3.5 text-xs sm:text-sm font-bold text-emerald-300 hover:bg-emerald-900/40 transition cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>{language === 'en' ? 'Chat on WhatsApp' : 'হোয়াটসঅ্যাপে যোগাযোগ'}</span>
              </button>
            </div>

            {/* Trust Bullet Strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                <span>{language === 'en' ? 'Lowest Market Rates' : 'বাজারের সবচেয়ে কম খরচ'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{language === 'en' ? 'Fast 24-48h Delivery' : '২৪-৪৮ ঘণ্টার দ্রুত ডেলিভারি'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>{language === 'en' ? 'Direct Personal Support' : 'আশরাফুলের সরাসরি সাপোর্ট'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Device with Official 3D AG Logo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/25 via-yellow-500/15 to-amber-500/25 blur-2xl opacity-75" />

              {/* Main Showcase Container */}
              <div className="relative rounded-3xl border border-amber-500/30 bg-[#0a0f1f]/95 backdrop-blur-2xl p-6 sm:p-7 shadow-2xl">
                {/* Official Logo Brand Card */}
                <div className="flex items-center gap-4 pb-5 border-b border-slate-800 mb-5">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-lg shadow-amber-500/20 bg-black shrink-0">
                    <img
                      src="/logo.jpg"
                      alt="AG DIGITAL Official 3D Logo"
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-extrabold text-white tracking-tight">
                        AG DIGITAL
                      </h3>
                      <span className="rounded bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-400">
                        OFFICIAL
                      </span>
                    </div>
                    <p className="text-xs text-amber-300 font-mono mt-0.5">
                      Business Promotion Powerhouse
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Dev: {DEVELOPER_INFO.name}
                    </p>
                  </div>
                </div>

                {/* Price Shock Comparison Card */}
                <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/30 via-slate-900 to-[#0c1224] p-4 mb-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-amber-300 mb-2">
                    <span>{language === 'en' ? 'Price Challenge vs Market' : 'মূল্য তুলনা (Price Challenge)'}</span>
                    <span className="font-mono text-[10px] bg-amber-500/20 px-2 py-0.5 rounded text-amber-300 font-bold">
                      SAVE 80%
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-slate-800">
                      <span className="text-slate-400">Custom Shop Website</span>
                      <div className="text-right">
                        <span className="line-through text-slate-500 font-mono text-[11px] mr-1.5">₹9,999</span>
                        <span className="text-amber-400 font-bold font-mono">₹1,999</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-slate-800">
                      <span className="text-slate-400">Grand Opening HD Banner</span>
                      <div className="text-right">
                        <span className="line-through text-slate-500 font-mono text-[11px] mr-1.5">₹999</span>
                        <span className="text-emerald-400 font-bold font-mono">₹299</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-slate-800">
                      <span className="text-slate-400">Shop Android App (Custom)</span>
                      <div className="text-right">
                        <span className="line-through text-slate-500 font-mono text-[11px] mr-1.5">₹12,000</span>
                        <span className="text-cyan-400 font-bold font-mono">₹2,499</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clean Client CTA Actions (No Clutter) */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 py-3 px-3 text-xs font-black text-black transition cursor-pointer shadow"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{language === 'en' ? 'Get Your Shop Online' : 'অনলাইনে দোকান শুরু করুন'}</span>
                  </button>

                  <button
                    onClick={onExploreDemos}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 py-3 px-3 text-xs font-semibold text-slate-200 transition cursor-pointer"
                  >
                    <span>{language === 'en' ? 'See Live Demos' : 'লাইভ ডেমো দেখুন'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof Metric Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-l-2 border-amber-400 pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              ₹299
            </div>
            <div className="text-xs text-slate-400 mt-1">
              HD Banners Starting from ₹299
            </div>
          </div>

          <div className="border-l-2 border-emerald-400 pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              24 Hours
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Express Delivery Turnaround
            </div>
          </div>

          <div className="border-l-2 border-cyan-400 pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Satisfaction Guaranteed
            </div>
          </div>

          <div className="border-l-2 border-yellow-400 pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono tabular-nums">
              1-on-1
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Direct Support by Asraful
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
