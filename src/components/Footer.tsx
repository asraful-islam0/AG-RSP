import React from 'react';
import { Phone, MessageSquare, Mail, Globe, Sparkles, Heart } from 'lucide-react';
import { Language } from '../types';
import { DEVELOPER_INFO } from '../data/mockData';

interface FooterProps {
  language: Language;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  return (
    <footer className="border-t border-amber-500/20 bg-[#04060d] text-slate-400 py-12 pb-24 md:pb-12 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col with Official Logo */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl overflow-hidden border border-amber-400/40 bg-black shrink-0">
                <img
                  src="/logo.jpg"
                  alt="AG DIGITAL Logo"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                AG DIGITAL
              </span>
            </div>

            <p className="text-slate-300 text-xs max-w-sm leading-relaxed">
              {language === 'bn'
                ? 'যেকোনো নতুন দোকান বা ব্যবসার অনলাইন প্রমোশন, ওয়েবসাইট, অ্যান্ড্রয়েড অ্যাপ ও আকর্ষণীয় ব্যানার মেকিংয়ের নির্ভরযোগ্য প্ল্যাটফর্ম।'
                : 'Empowering local shops and enterprises with ultra low-cost websites, mobile apps, and promotional banners.'}
            </p>

            <div className="text-xs text-amber-300 font-medium">
              {language === 'bn' ? 'সফটওয়্যার ডেভেলপার:' : 'Developed by:'}{' '}
              <strong className="text-white font-bold">{DEVELOPER_INFO.name}</strong>
            </div>

            {/* Sister App Link */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('repairing_expert')}
                className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 text-xs font-semibold cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>আমাদের লার্নিং অ্যাপ: রিপেয়ারিং এক্সপার্ট</span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3 font-mono">
              {language === 'bn' ? 'ন্যাভিগেশন' : 'Navigation'}
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition cursor-pointer"
                >
                  {language === 'bn' ? 'সব অনলাইন সেবা' : 'Shop Solutions'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('demos')}
                  className="hover:text-amber-400 transition cursor-pointer"
                >
                  {language === 'bn' ? 'লাইভ ডেমো গ্যালারি' : 'Live Demos'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('banners')}
                  className="hover:text-amber-400 transition cursor-pointer"
                >
                  {language === 'bn' ? 'ব্যানার ও পোস্টার মেকিং' : 'Banners & Posters'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('developer')}
                  className="hover:text-amber-400 transition cursor-pointer"
                >
                  {language === 'bn' ? 'ডেভেলপার ও সোশ্যাল আইডি' : 'Developer Profile'}
                </button>
              </li>
            </ul>
          </div>

          {/* Socials & Contacts */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3 font-mono">
              {language === 'bn' ? 'সোশ্যাল ও কন্টাক্ট আইডি' : 'Contacts & Socials'}
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${DEVELOPER_INFO.phone}`} className="hover:text-amber-300 font-mono">
                  {DEVELOPER_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${DEVELOPER_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 font-mono"
                >
                  WhatsApp: {DEVELOPER_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${DEVELOPER_INFO.email}`} className="hover:text-cyan-300 truncate">
                  {DEVELOPER_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Globe className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                <span>Internet ID: {DEVELOPER_INFO.websiteId}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} AG DIGITAL. Developed with passion by{' '}
            <strong className="text-amber-300">{DEVELOPER_INFO.name}</strong>.
          </div>
          <div className="flex items-center gap-2 font-mono text-amber-400/80">
            <span>AG DIGITAL Official APK v2.4.0</span>
            <span aria-hidden="true">·</span>
            <span>Self-Reliant Tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
