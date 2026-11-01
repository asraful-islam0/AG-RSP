import React, { useState } from 'react';
import { Eye, ArrowRight, Check, MessageSquare, Smartphone, ShoppingCart, Bike, Shirt, Apple, Landmark, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { LIVE_DEMOS, DEVELOPER_INFO } from '../data/mockData';

interface LiveDemosSectionProps {
  language: Language;
}

export const LiveDemosSection: React.FC<LiveDemosSectionProps> = ({ language }) => {
  const [activeDemoId, setActiveDemoId] = useState<string>('demo-clothing');
  const [customShopName, setCustomShopName] = useState<string>('আল-মদিনা ফ্যাশন');
  const [orderSentNotification, setOrderSentNotification] = useState<string | null>(null);

  const activeDemo = LIVE_DEMOS.find(d => d.id === activeDemoId) || LIVE_DEMOS[0];

  const handleSimulateDemoAction = (message: string) => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setOrderSentNotification(message);
    setTimeout(() => setOrderSentNotification(null), 3000);
  };

  const handleBookServiceForMyShop = () => {
    const text = encodeURIComponent(
      `Hello Asraful Bhai, আমি AG DIGITAL ডেমো দেখেছি (${activeDemo.titleBn})। আমার নিজের দোকানের জন্যও এমন একটি ওয়েবসাইট/অ্যাপ বানাতে চাই। দয়া করে প্রসেস জানান।`
    );
    window.open(`https://wa.me/${DEVELOPER_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="demos" className="py-16 sm:py-24 border-t border-amber-500/20 bg-[#060813]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <Sparkles className="h-4 w-4" />
              <span>{language === 'bn' ? 'সরাসরি দেখে নিন কেমন হবে' : 'Interactive Previews'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              {language === 'bn'
                ? 'সব ব্যবসার জন্য তৈরি রেডি লাইভ ডেমো গ্যালারি'
                : 'Interactive Live Demos for Every Shop & Business'}
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl">
              {language === 'bn'
                ? 'আপনার দোকানের জন্য যে কাজটাই করাবেন—ওয়েবসাইট, অ্যাপ বা ব্যানার—তার একটি বাস্তব ডেমো এখনই চালিয়ে দেখে নিন!'
                : 'Experience how your customer will browse your shop, place orders via WhatsApp, or view discount banners.'}
            </p>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 px-4 py-2 text-right">
            <span className="text-[11px] font-mono text-slate-400 block">
              {language === 'bn' ? 'পছন্দ হলে সরাসরি অর্ডার করুন' : 'Instant Booking'}
            </span>
            <span className="text-sm font-bold text-amber-300">
              {DEVELOPER_INFO.phone}
            </span>
          </div>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {LIVE_DEMOS.map((demo) => {
            const isActive = activeDemoId === demo.id;
            return (
              <button
                key={demo.id}
                onClick={() => setActiveDemoId(demo.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'border-amber-400 bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                    : 'border-slate-800 bg-[#0d1424] text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                {demo.previewType === 'clothing' && <Shirt className="h-4 w-4" />}
                {demo.previewType === 'bike' && <Bike className="h-4 w-4" />}
                {demo.previewType === 'grocery' && <Apple className="h-4 w-4" />}
                {demo.previewType === 'mobile_pc' && <Smartphone className="h-4 w-4" />}
                {demo.previewType === 'csp' && <Landmark className="h-4 w-4" />}
                {demo.previewType === 'banner' && <Sparkles className="h-4 w-4" />}
                <span>{language === 'bn' ? demo.categoryBn : demo.categoryEn}</span>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Interactive Screen Container */}
        <div className="rounded-3xl border border-amber-500/30 bg-[#080d1c] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Top Bar of the Simulator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                  LIVE INTERACTIVE DEMO VIEW
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                {language === 'bn' ? activeDemo.titleBn : activeDemo.titleEn}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {language === 'bn' ? activeDemo.descriptionBn : activeDemo.descriptionEn}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3 py-1.5 rounded-xl">
                {language === 'bn' ? activeDemo.priceNoteBn : activeDemo.priceNoteEn}
              </span>
              <button
                onClick={handleBookServiceForMyShop}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs font-extrabold hover:bg-amber-300 transition cursor-pointer shadow whitespace-nowrap"
              >
                {language === 'bn' ? 'আমার জন্য এমন বানান' : 'Build For My Shop'}
              </button>
            </div>
          </div>

          {/* SIMULATED CONTENT BASED ON ACTIVE DEMO */}

          {/* 1. CLOTHING STORE DEMO */}
          {activeDemoId === 'demo-clothing' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-[#0d1428] p-5">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    <span className="font-bold text-white text-sm">নূর ফ্যাশন অ্যান্ড বুটিক (Live Shop Demo)</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono font-semibold">
                    দোকান খোলা আছে · সকাল ১০টা - রাত ১০টা
                  </span>
                </div>

                {/* Clothing Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'প্রিমিয়াম কাতান বেনারসি শাড়ি', price: '৳২,৪৫০', tag: 'হট সেল', desc: 'খাঁটি জরি সুতার নিখুঁত কাজ' },
                    { name: 'ডিজাইনার সেমি-লং পাঞ্জাবি', price: '৳১,২০০', tag: 'ঈদ কালেকশন', desc: '১০০% পিওর সুতি আরামদায়ক ফেব্রিক' },
                    { name: 'জরজেট ডিজিটাল প্রিন্ট থ্রি-পিস', price: '৳১,৫৫০', tag: 'লেটেস্ট ট্রেন্ড', desc: 'রং গ্যারান্টি ও আধুনিক ডিজাইন' },
                  ].map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-800 bg-[#070b16] p-4 flex flex-col justify-between">
                      <div>
                        <div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-rose-950/40 via-purple-950/20 to-slate-900 border border-slate-800/80 flex items-center justify-center mb-3">
                          <Shirt className="h-10 w-10 text-rose-400 opacity-80" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded">
                            {item.tag}
                          </span>
                          <span className="text-sm font-bold text-white font-mono">{item.price}</span>
                        </div>
                        <h4 className="text-xs font-bold text-white mt-2">{item.name}</h4>
                        <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
                      </div>

                      <button
                        onClick={() => handleSimulateDemoAction(`নূর ফ্যাশন ডেমো: "${item.name}" অর্ডারের জন্য হোয়াটসঅ্যাপ চ্যাট ওপেন হয়েছে!`)}
                        className="mt-4 w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition cursor-pointer"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>১-ক্লিকে হোয়াটসঅ্যাপ অর্ডার</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. BIKE SHOWROOM DEMO */}
          {activeDemoId === 'demo-bike' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-[#0d1428] p-5">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="font-bold text-white text-sm">স্পিড মোটরস — বাইক শোরুম (Live Demo)</span>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono">
                    সহজ কিস্তি (EMI) সুবিধা উপলব্ধ
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: 'RXZ 155cc Dual-ABS Racing Edition',
                      price: '৳১,৯৫,০০০',
                      specs: '155cc · 50 km/l · Dual Channel ABS · Liquid Cooled',
                      offer: 'ফ্রি রেজিস্ট্রেশন ও হেলমেট অফার চলছে!'
                    },
                    {
                      name: 'Street Cruiser 125cc City Commuter',
                      price: '৳১,৩৫,০০০',
                      specs: '125cc · 65 km/l · Disc Brake · Digital Meter',
                      offer: 'মাত্র ২০,০০০ ডাউনপেমেন্টে কিস্তিতে নেওয়ার সুযোগ!'
                    }
                  ].map((bike, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-800 bg-[#070b16] p-4 flex flex-col justify-between">
                      <div>
                        <div className="aspect-[16/9] rounded-lg bg-gradient-to-tr from-cyan-950/40 to-slate-900 border border-slate-800 flex items-center justify-center mb-3">
                          <Bike className="h-12 w-12 text-cyan-400" />
                        </div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white">{bike.name}</h4>
                          <span className="text-sm font-extrabold text-amber-400 font-mono">{bike.price}</span>
                        </div>
                        <p className="text-xs text-slate-300 font-mono mt-1">{bike.specs}</p>
                        <p className="text-[11px] text-emerald-400 mt-2 bg-emerald-950/30 p-2 rounded border border-emerald-500/20">
                          {bike.offer}
                        </p>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <button
                          onClick={() => handleSimulateDemoAction(`স্পিড মোটরস: "${bike.name}" এর টেস্ট রাইড বুকিং রিকোয়েস্ট তৈরি হয়েছে!`)}
                          className="flex-1 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition cursor-pointer"
                        >
                          টেস্ট রাইড বুকিং
                        </button>
                        <button
                          onClick={() => handleSimulateDemoAction(`কিস্তির (EMI) বিস্তারিত হোয়াটসঅ্যাপে পাঠানো হয়েছে!`)}
                          className="flex-1 py-2 rounded-lg border border-slate-700 bg-slate-800 text-xs font-semibold text-slate-200 transition cursor-pointer"
                        >
                          কিস্তির বিবরণ
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. FRUITS & GROCERY DEMO */}
          {activeDemoId === 'demo-grocery' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-[#0d1428] p-5">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="font-bold text-white text-sm">গ্রিন ফ্রেশ বাজার — ফল ও মুদি (Daily Live Rates)</span>
                  </div>
                  <span className="text-xs text-emerald-300 font-mono">
                    আজকের টাটকা কালেকশন · হোম ডেলিভারি ফ্রি
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: 'হিমসাগর আম (Rajshahi)', price: '৳১১০ / কেজি', status: 'আজকে তাজা এসেছে' },
                    { name: 'কাশ্মীরি লাল আপেল', price: '৳২২০ / কেজি', status: 'মিষ্টি ও ক্রাঞ্চি' },
                    { name: 'মিষ্টি মাল্টা ও কমলা', price: '৳১৮০ / কেজি', status: 'রসালো ফ্রুটস' },
                    { name: 'ঘানি ভাঙা খাঁটি সরিষার তেল', price: '৳২৮০ / লিটার', status: '১০০% খাঁটি গ্যারান্টি' },
                  ].map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-800 bg-[#070b16] p-3 text-center flex flex-col justify-between">
                      <div>
                        <div className="h-14 w-14 rounded-full bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center mx-auto mb-2 text-emerald-400">
                          <Apple className="h-7 w-7" />
                        </div>
                        <h4 className="text-xs font-bold text-white">{item.name}</h4>
                        <div className="text-xs font-extrabold text-amber-300 font-mono mt-1">{item.price}</div>
                        <p className="text-[10px] text-slate-400 mt-0.5">{item.status}</p>
                      </div>

                      <button
                        onClick={() => handleSimulateDemoAction(`গ্রিন ফ্রেশ বাজার: "${item.name}" ডেলিভারির জন্য কার্টে যুক্ত হয়েছে!`)}
                        className="mt-3 w-full py-1.5 rounded-lg bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition cursor-pointer"
                      >
                        অর্ডার করুন
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. MOBILE & PC REPAIR DEMO */}
          {activeDemoId === 'demo-mobile-pc' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-[#0d1428] p-5">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="font-bold text-white text-sm">টেক কর্ণার — মোবাইল ও কম্পিউটার সার্ভিস (Demo)</span>
                  </div>
                  <span className="text-xs text-amber-300 font-mono">
                    সার্ভিসিংয়ে ৩০ দিনের গ্যারান্টি
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: 'ডিসপ্লে ও টাচ রিপ্লেসমেন্ট', time: '১ ঘণ্টার মধ্যে সমাধান', price: '৳৭০০ থেকে শুরু' },
                    { title: 'ব্যাটারি চেন্জ ও ব্যাকআপ ফিক্স', time: 'অরিজিনাল পার্টস', price: '৳৫০০ থেকে শুরু' },
                    { title: 'পিসি উইন্ডোজ ও সফটওয়্যার সেটআপ', time: 'সুপার ফাস্ট স্পিড', price: '৳৩৫০ থেকে শুরু' },
                  ].map((srv, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-800 bg-[#070b16] p-4 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-white">{srv.title}</h4>
                        <span className="text-xs font-mono font-bold text-cyan-400 block mt-1">{srv.price}</span>
                        <p className="text-[11px] text-slate-400 mt-1">{srv.time}</p>
                      </div>
                      <button
                        onClick={() => handleSimulateDemoAction(`টেক কর্ণার: "${srv.title}" বুকিং নেওয়া হয়েছে!`)}
                        className="mt-4 w-full py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-bold hover:bg-cyan-400 transition cursor-pointer"
                      >
                        সার্ভিস বুক করুন
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 5. CSP BANKING KIOSK DEMO */}
          {activeDemoId === 'demo-csp' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-950/30 to-[#070b18] p-5">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Landmark className="h-4 w-4 text-sky-400" />
                    <span className="font-bold text-white text-sm">ডিজিটাল সেবা কেন্দ্র ও সিএসপি কাউন্টার (Demo)</span>
                  </div>
                  <span className="text-xs text-sky-300 font-mono">
                    গ্রাহক সেবা সকাল ৯টা - সন্ধ্যা ৭টা
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'ব্যাংক একাউন্ট ওপেনিং', note: 'জিরো ব্যালেন্স সুবিধা' },
                    { label: 'টাকা তোলা ও জমা (AEPS)', note: 'ফিঙ্গারপ্রিন্ট দিয়ে টাকা উত্তোলন' },
                    { label: 'বিদ্যুৎ ও পানির বিল পেমেন্ট', note: 'তাৎক্ষণিক অফিশিয়াল রসিদ' },
                    { label: 'প্যান, আধার ও ভোটার কার্ড', note: 'নতুন আবেদন ও সংশোধন' },
                  ].map((c, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
                      <div className="h-2 w-2 rounded-full bg-sky-400 mx-auto mb-2" />
                      <h4 className="text-xs font-bold text-white">{c.label}</h4>
                      <p className="text-[10px] text-slate-400 mt-1">{c.note}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 rounded-xl bg-black/40 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-300">সিএসপি সেন্টারের জন্য এমন অফিশিয়াল ব্যানার ও পোর্টাল চান?</span>
                  <button
                    onClick={handleBookServiceForMyShop}
                    className="px-3 py-1.5 rounded-lg bg-sky-400 text-black font-bold hover:bg-sky-300 transition cursor-pointer"
                  >
                    মাত্র ৮৯৯ টাকায় নিন
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 6. BANNER DESIGN LIVE CUSTOMIZER DEMO */}
          {activeDemoId === 'demo-banner' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-amber-500/30 bg-[#0d1428] p-5">
                <div className="mb-4 pb-3 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white">লাইভ ব্যানার কাস্টমাইজেশন প্রিভিউ</h4>
                    <p className="text-xs text-slate-400">নিচে আপনার দোকানের নাম লিখুন এবং সাথে সাথে ব্যানার লুক দেখুন:</p>
                  </div>
                  <input
                    type="text"
                    value={customShopName}
                    onChange={(e) => setCustomShopName(e.target.value)}
                    placeholder="দোকানের নাম লিখুন..."
                    className="rounded-lg border border-amber-400/50 bg-black px-3 py-1.5 text-xs text-amber-300 font-bold focus:outline-none w-56"
                  />
                </div>

                {/* Banner Simulated Visual */}
                <div className="aspect-[21/9] rounded-2xl bg-gradient-to-r from-red-900 via-amber-900 to-yellow-950 border-2 border-amber-400 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-amber-300 uppercase tracking-widest border border-amber-400/60 px-2 py-0.5 rounded">
                    ★ শুভ উদ্বোধন ★
                  </div>
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-white bg-red-600 px-2 py-0.5 rounded font-bold">
                    ৫০% পর্যন্ত ছাড়!
                  </div>

                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-amber-300 tracking-tight drop-shadow-md">
                    {customShopName || 'আপনার দোকানের নাম'}
                  </h3>
                  <p className="text-xs sm:text-sm text-yellow-100 font-medium mt-1">
                    সব ধরনের আধুনিক পণ্য ও কাপড়ের সেরা সংগ্রহ · পাইকারি ও খুচরা বিক্রয়
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full border border-amber-400/40 text-[11px] text-amber-300 font-mono">
                    <span>প্রোপ্রাইটর: Asraful Islam Mazarbhuiya</span>
                    <span>·</span>
                    <span>মোবাইল: {DEVELOPER_INFO.phone}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-400">এমন হাই-রেজোলিউশন ব্যানার মাত্র <strong>৳২৯৯</strong> টাকায় তৈরি করে নিন!</span>
                  <button
                    onClick={handleBookServiceForMyShop}
                    className="px-4 py-1.5 rounded-lg bg-amber-400 text-black font-extrabold hover:bg-amber-300 transition cursor-pointer"
                  >
                    ব্যানার অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Toast Notification when user interacts with demo */}
          {orderSentNotification && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
              <Check className="h-4 w-4 shrink-0" />
              <span>{orderSentNotification}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
