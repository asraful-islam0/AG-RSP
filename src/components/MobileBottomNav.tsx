import React from 'react';
import { Home, LayoutGrid, Eye, Image as ImageIcon, Sparkles, UserCheck } from 'lucide-react';
import { Language } from '../types';

interface MobileBottomNavProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  language: Language;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  setCurrentTab,
  language,
}) => {
  const tabs = [
    {
      id: 'home',
      labelBn: 'হোম',
      labelEn: 'Home',
      icon: Home,
    },
    {
      id: 'services',
      labelBn: 'অনলাইন সেবা',
      labelEn: 'Services',
      icon: LayoutGrid,
    },
    {
      id: 'demos',
      labelBn: 'লাইভ ডেমো',
      labelEn: 'Demos',
      icon: Eye,
    },
    {
      id: 'banners',
      labelBn: 'ব্যানার',
      labelEn: 'Banners',
      icon: ImageIcon,
    },
    {
      id: 'repairing_expert',
      labelBn: 'রিপেয়ারিং',
      labelEn: 'Learning',
      icon: Sparkles,
    },
    {
      id: 'developer',
      labelBn: 'যোগাযোগ',
      labelEn: 'Developer',
      icon: UserCheck,
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-amber-500/20 bg-[#05070f]/95 backdrop-blur-xl pb-safe">
      <div className="grid grid-cols-6 h-14 items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`flex flex-col items-center justify-center h-full transition-colors cursor-pointer ${
                isActive ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`h-4 w-4 transition-transform ${isActive ? 'scale-110' : ''}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-amber-400 shadow shadow-amber-400/50" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-1 truncate max-w-[50px] ${
                isActive ? 'font-bold text-amber-300' : 'font-normal'
              }`}>
                {language === 'bn' ? tab.labelBn : tab.labelEn}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
