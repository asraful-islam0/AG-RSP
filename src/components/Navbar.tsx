import React from 'react';
import { Globe, PhoneCall, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { DEVELOPER_INFO } from '../data/mockData';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
}) => {
  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      `Hello Asraful Bhai (AG DIGITAL), I want to promote my shop/business with a custom website, mobile app, or banner. Please share the details.`
    );
    window.open(`https://wa.me/${DEVELOPER_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-500/20 bg-[#05070f]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single Brand Wordmark with Official 3D AG Logo */}
        <button
          onClick={() => setCurrentTab('home')}
          className="group flex items-center gap-3 text-left whitespace-nowrap shrink-0 cursor-pointer"
        >
          <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-amber-400/40 shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform bg-black">
            <img
              src="/logo.jpg"
              alt="AG DIGITAL Logo"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent group-hover:text-amber-300 transition-colors">
              AG DIGITAL
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-tight -mt-1 hidden sm:block">
              Business Promotion & Tech
            </span>
          </div>
        </button>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => setCurrentTab('home')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-300 cursor-pointer ${
              currentTab === 'home' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            {language === 'en' ? 'Overview' : 'হোম'}
          </button>

          <button
            onClick={() => setCurrentTab('services')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-300 cursor-pointer ${
              currentTab === 'services' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            {language === 'en' ? 'Shop Solutions' : 'সব অনলাইন সেবা'}
          </button>

          <button
            onClick={() => setCurrentTab('demos')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-300 cursor-pointer ${
              currentTab === 'demos' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            {language === 'en' ? 'Live Demos' : 'লাইভ ডেমো গ্যালারি'}
          </button>

          <button
            onClick={() => setCurrentTab('banners')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-300 cursor-pointer ${
              currentTab === 'banners' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            {language === 'en' ? 'Banners & Posters' : 'ব্যানার ও পোস্টার'}
          </button>

          <button
            onClick={() => setCurrentTab('repairing_expert')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-300 cursor-pointer flex items-center gap-1.5 ${
              currentTab === 'repairing_expert' ? 'text-cyan-400 font-bold' : 'text-cyan-300'
            }`}
          >
            <span>{language === 'en' ? 'Repairing Expert' : 'রিপেয়ারিং এক্সপার্ট'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('developer')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-300 cursor-pointer ${
              currentTab === 'developer' ? 'text-amber-400 font-bold' : ''
            }`}
          >
            {language === 'en' ? 'Developer Profile' : 'উদ্যোক্তা ও যোগাযোগ'}
          </button>
        </nav>

        {/* Zone 3: Direct Client Contact CTA & Language Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Quick Call hotline */}
          <a
            href={`tel:${DEVELOPER_INFO.phone}`}
            className="hidden lg:flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition"
            title="Direct Call to Asraful"
          >
            <PhoneCall className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-[11px] font-semibold">{DEVELOPER_INFO.phone}</span>
          </a>

          {/* Language Switch */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/90 px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 cursor-pointer transition"
            title="Toggle Language"
          >
            <Globe className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-[11px]">{language === 'en' ? 'বাং' : 'EN'}</span>
          </button>

          {/* Clean Client CTA Button */}
          <button
            onClick={handleWhatsAppContact}
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 px-4 py-2 text-xs font-bold text-black shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer whitespace-nowrap shrink-0"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>{language === 'en' ? 'Contact Us' : 'যোগাযোগ করুন'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
