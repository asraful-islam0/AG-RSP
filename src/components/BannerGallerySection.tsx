import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, Check, Send, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language, BannerTemplate } from '../types';
import { BANNER_TEMPLATES, DEVELOPER_INFO } from '../data/mockData';

interface BannerGallerySectionProps {
  language: Language;
}

export const BannerGallerySection: React.FC<BannerGallerySectionProps> = ({ language }) => {
  const [shopName, setShopName] = useState<string>('');
  const [shopType, setShopType] = useState<string>('কাপড়ের দোকান');
  const [bannerType, setBannerType] = useState<string>('দোকানের শুভ উদ্বোধন ব্যানার');
  const [phone, setPhone] = useState<string>('');

  const handleOrderBanner = (template?: BannerTemplate) => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    const chosenTitle = template ? template.titleBn : bannerType;
    const text = encodeURIComponent(
      `Hello Asraful Bhai (AG DIGITAL),\nআমি একটি ব্যানার বানাতে চাই:\n\n` +
      `দোকানের নাম: ${shopName || 'আমার নতুন দোকান'}\n` +
      `ব্যবসার ধরন: ${shopType}\n` +
      `ব্যানারের ধরন: ${chosenTitle}\n` +
      `যোগাযোগ নম্বর: ${phone || DEVELOPER_INFO.phone}\n` +
      `রেট: মাত্র ৳${template ? template.price : 299}\n\n` +
      `দয়া করে ব্যানারটি ডিজাইন করে দিন।`
    );
    window.open(`https://wa.me/${DEVELOPER_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="banners" className="py-16 sm:py-24 border-t border-amber-500/20 bg-[#060814]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="h-3.5 w-3.5" />
            <span>{language === 'bn' ? 'এইচডি ডিজিটাল ব্যানার ও পোস্টার' : 'HD Banners & Graphics'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {language === 'bn'
              ? 'দোকানের শুভ উদ্বোধন ও অফার ব্যানার — মাত্র ২৯৯ টাকা!'
              : 'Grand Opening & Special Discount Banners from 299 BDT'}
          </h2>

          <p className="text-sm text-slate-300 mt-2">
            {language === 'bn'
              ? 'দোকানের সাইনবোর্ড, ফ্লেক্স প্রিন্ট, ফেসবুক পোস্ট বা ভিজিটিং কার্ড—সবচেয়ে নজরকাড়া ডিজাইনে মাত্র কয়েক ঘণ্টায় রেডি করে দিচ্ছি।'
              : 'High-resolution vector files for flex printing and social media promotion with 24-hour turnaround.'}
          </p>
        </div>

        {/* 4 Banner Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BANNER_TEMPLATES.map((tpl) => (
            <div
              key={tpl.id}
              className="rounded-2xl border border-slate-800 bg-[#0c1224] p-5 flex flex-col justify-between hover:border-amber-400/40 transition shadow-lg"
            >
              <div>
                {/* Banner Graphic Simulator Container */}
                <div
                  className="aspect-[16/9] rounded-xl p-3 flex flex-col justify-between mb-4 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${tpl.accentColor}25, #080d1a)`
                  }}
                >
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="bg-black/60 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                      {tpl.badgeBn}
                    </span>
                    <span className="text-white font-bold font-mono">HD PRINT</span>
                  </div>

                  <div className="text-center my-auto">
                    <div className="text-sm font-extrabold text-white line-clamp-1">
                      {tpl.titleBn}
                    </div>
                    <div className="text-[10px] text-amber-300 font-mono mt-0.5">
                      AG DIGITAL PRO DESIGN
                    </div>
                  </div>

                  <div className="text-[9px] text-slate-400 text-center font-mono">
                    Vector PDF · JPG · PNG
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">{tpl.tagBn}</span>
                  <span className="text-base font-extrabold text-amber-400 font-mono">
                    ৳{tpl.price}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mt-1">{tpl.titleBn}</h4>
              </div>

              <button
                onClick={() => handleOrderBanner(tpl)}
                className="mt-4 w-full py-2 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-black text-xs font-bold text-slate-200 transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Send className="h-3.5 w-3.5" />
                <span>অর্ডার করুন (৳{tpl.price})</span>
              </button>
            </div>
          ))}
        </div>

        {/* Quick Custom Banner Order Box */}
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-[#0b1122] via-[#0d162a] to-[#0b1122] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                INSTANT CUSTOM BANNER
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {language === 'bn' ? 'আপনার দোকানের ব্যানার আজই বানিয়ে নিন' : 'Order Your Custom Shop Banner Today'}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {language === 'bn'
                  ? 'আপনার দোকানের নাম ও প্রয়োজনীয় তথ্য দিন, আমরা কয়েক ঘণ্টার মধ্যে আকর্ষণীয় ব্যানার তৈরি করে দেবো।'
                  : 'Submit your shop name and phone number; we deliver print-ready high-resolution files within hours.'}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">দোকানের নাম (Shop Name)</label>
                <input
                  type="text"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  placeholder="যেমন: ভাই ভাই বস্ত্রালয়"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">ব্যবসার ক্যাটাগরি</label>
                <select
                  value={shopType}
                  onChange={(e) => setShopType(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="কাপড়ের দোকান">কাপড়ের দোকান</option>
                  <option value="ফলের দোকান">ফলের দোকান</option>
                  <option value="মোবাইলের দোকান">মোবাইলের দোকান</option>
                  <option value="কম্পিউটারের দোকান">কম্পিউটারের দোকান</option>
                  <option value="বাইকের শোরুম">বাইকের শোরুম</option>
                  <option value="সিএসপি কেন্দ্র">সিএসপি কেন্দ্র</option>
                  <option value="অন্যান্য ব্যবসা">অন্যান্য ব্যবসা</option>
                </select>
              </div>

              <div className="flex flex-col justify-end">
                <button
                  onClick={() => handleOrderBanner()}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs font-bold hover:bg-amber-300 transition cursor-pointer shadow flex items-center justify-center gap-1.5"
                >
                  <Send className="h-4 w-4" />
                  <span>হোয়াটসঅ্যাপে পাঠান</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
