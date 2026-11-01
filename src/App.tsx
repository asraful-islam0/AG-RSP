/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { LiveDemosSection } from './components/LiveDemosSection';
import { BannerGallerySection } from './components/BannerGallerySection';
import { RepairingExpertSpotlight } from './components/RepairingExpertSpotlight';
import { DeveloperContactSection } from './components/DeveloperContactSection';
import { SplashIntro } from './components/SplashIntro';
import { Footer } from './components/Footer';
import { DownloadPage } from './components/DownloadPage';
import { Language } from './types';

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(
    typeof window !== 'undefined' && !window.location.hash.includes('apk')
  );
  const [currentTab, setCurrentTab] = useState<string>(
    typeof window !== 'undefined' && (window.location.hash.includes('apk') || window.location.pathname === '/apk') ? 'apk' : 'home'
  );
  const [language, setLanguage] = useState<Language>('en'); // Default to English as explicitly requested
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('apk')) {
        setCurrentTab('apk');
        setShowSplash(false);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Network monitor & service worker
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const navigateTo = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 3D Cinematic AG Logo Intro on App Launch */}
      {showSplash && (
        <SplashIntro onComplete={() => setShowSplash(false)} />
      )}

      <div className="min-h-screen flex flex-col bg-[#05070f] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
        {/* Top App Bar Navigation */}
        <Navbar
          currentTab={currentTab}
          setCurrentTab={navigateTo}
          language={language}
          setLanguage={setLanguage}
        />

        {/* Main View Content */}
        <main className="flex-1">
          {currentTab === 'home' && (
            <>
              <Hero
                language={language}
                onExploreServices={() => navigateTo('services')}
                onExploreDemos={() => navigateTo('demos')}
                onOpenRepairingApp={() => navigateTo('repairing_expert')}
              />

              <ServicesSection language={language} />

              <LiveDemosSection language={language} />

              <BannerGallerySection language={language} />

              <RepairingExpertSpotlight language={language} />

              <DeveloperContactSection
                language={language}
                onReplayIntro={() => setShowSplash(true)}
              />
            </>
          )}

          {currentTab === 'services' && (
            <ServicesSection language={language} />
          )}

          {currentTab === 'demos' && (
            <LiveDemosSection language={language} />
          )}

          {currentTab === 'banners' && (
            <BannerGallerySection language={language} />
          )}

          {currentTab === 'repairing_expert' && (
            <RepairingExpertSpotlight language={language} />
          )}

          {currentTab === 'developer' && (
            <DeveloperContactSection
              language={language}
              onReplayIntro={() => setShowSplash(true)}
            />
          )}

          {currentTab === 'apk' && (
            <DownloadPage />
          )}
        </main>

        {/* Footer */}
        <Footer
          language={language}
          onNavigate={navigateTo}
        />

        {/* Mobile Ergonomic Touch Tab Bar */}
        <MobileBottomNav
          currentTab={currentTab}
          setCurrentTab={navigateTo}
          language={language}
        />

        {/* Offline Notification Banner */}
        {!isOnline && (
          <div className="fixed bottom-16 md:bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-amber-500 text-black px-4 py-2 text-xs font-bold shadow-xl">
            <span className="h-2 w-2 rounded-full bg-black animate-ping" />
            <span>Offline Mode — Cached data active</span>
          </div>
        )}
      </div>
    </>
  );
}
