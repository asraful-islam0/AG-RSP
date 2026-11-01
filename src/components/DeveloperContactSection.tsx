import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, Globe, Share2, QrCode, Download, ShieldCheck, ExternalLink, Play, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { DEVELOPER_INFO } from '../data/mockData';

interface DeveloperContactSectionProps {
  language: Language;
  onReplayIntro?: () => void;
}

export const DeveloperContactSection: React.FC<DeveloperContactSectionProps> = ({
  language,
  onReplayIntro,
}) => {
  const [showQR, setShowQR] = useState<boolean>(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleDownloadVCard = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });

    const vCardData =
      `BEGIN:VCARD\n` +
      `VERSION:3.0\n` +
      `FN:${DEVELOPER_INFO.name}\n` +
      `ORG:AG DIGITAL\n` +
      `TITLE:Founder & Software Developer\n` +
      `TEL;TYPE=CELL:${DEVELOPER_INFO.phone}\n` +
      `TEL;TYPE=WHATSAPP:+919365441314\n` +
      `EMAIL:${DEVELOPER_INFO.email}\n` +
      `URL:${DEVELOPER_INFO.websiteUrl}\n` +
      `NOTE:Developed by ${DEVELOPER_INFO.name} - AG DIGITAL Business Solutions\n` +
      `END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Asraful_Islam_Mazarbhuiya_AG_Digital.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="developer" className="py-16 sm:py-24 border-t border-amber-500/20 bg-[#05070f] relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <span>{language === 'bn' ? 'অফিসিয়াল উদ্যোক্তা ও কন্টাক্ট ডেক্স' : 'Official Developer Hub'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {language === 'bn'
              ? 'যোগাযোগ ও সোশ্যাল আইডি তালিকা'
              : 'Direct Contacts & Social Profiles'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            {language === 'bn'
              ? 'যেকোনো দোকানের অনলাইন প্রমোশন, ব্যানার ডিজাইন, ওয়েবসাইট ও অ্যাপ ডেভেলপমেন্টের জন্য সরাসরি কথা বলুন।'
              : 'Connect directly across WhatsApp, phone call, Facebook, Instagram, Twitter or visit the official site.'}
          </p>
        </div>

        {/* Executive 3D Glass Profile Card */}
        <div className="relative mx-auto max-w-3xl">
          {/* Ambient Golden Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 blur-xl opacity-75 pointer-events-none" />

          <div className="relative rounded-3xl border border-amber-500/30 bg-[#0a0f20]/95 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
            {/* Top Bar with Official Logo & Replay Intro */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4 mb-8">
              <div className="flex items-center gap-3.5">
                <div className="h-14 w-14 rounded-2xl overflow-hidden border border-amber-400/50 shadow-lg shadow-amber-500/20 bg-black shrink-0">
                  <img
                    src="/logo.jpg"
                    alt="AG DIGITAL Official Logo"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight">
                    AG DIGITAL
                  </h3>
                  <span className="text-xs font-mono text-amber-400 font-bold block">
                    {DEVELOPER_INFO.titleBn}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {onReplayIntro && (
                  <button
                    onClick={onReplayIntro}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-500/40 bg-amber-950/30 text-amber-300 hover:bg-amber-900/40 text-xs font-bold transition cursor-pointer"
                  >
                    <Play className="h-3.5 w-3.5 text-amber-400" />
                    <span>3D ইন্ট্রো দেখুন</span>
                  </button>
                )}

                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-medium font-mono">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>

            {/* Developer Details Box */}
            <div className="mb-8">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                DEVELOPED BY
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {DEVELOPER_INFO.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed italic bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                {language === 'bn'
                  ? '"অন্যের ওপর নির্ভর না করে নিজের মেধা ও পরিশ্রমে নিজের পায়ে দাঁড়ানোর এই প্রয়াস। আপনি ছোট দোকানদার হোন কিংবা বড় শোরুমের মালিক—কম খরচে সেরা মানের ডিজিটাল সেবা দিয়ে আপনার পাশে আছি সবসময়।"'
                  : '"A determined journey of self-reliance, delivering honest, high-end digital solutions for local entrepreneurs and shop owners."'}
              </p>
            </div>

            {/* All Specific Contact & Social IDs required by user */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {/* 1. WhatsApp Number */}
              <div className="p-3.5 rounded-2xl border border-emerald-500/30 bg-[#0d1728] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">হোয়াটসঅ্যাপ নম্বর (WhatsApp)</span>
                    <a
                      href={`https://wa.me/${DEVELOPER_INFO.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-bold text-emerald-300 hover:underline font-mono"
                    >
                      +91 9365441314
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${DEVELOPER_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition"
                >
                  মেসেজ
                </a>
              </div>

              {/* 2. Contact / Phone Number */}
              <div className="p-3.5 rounded-2xl border border-amber-500/30 bg-[#0d1728] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">ফোন কল নম্বর (Direct Call)</span>
                    <a href={`tel:${DEVELOPER_INFO.phone}`} className="text-xs sm:text-sm font-bold text-white hover:text-amber-300 font-mono">
                      {DEVELOPER_INFO.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${DEVELOPER_INFO.phone}`}
                  className="px-3 py-1.5 rounded-xl bg-amber-400 text-black text-xs font-bold hover:bg-amber-300 transition"
                >
                  কল দিন
                </a>
              </div>

              {/* 3. Facebook ID: Asraful Gadgets */}
              <div className="p-3.5 rounded-2xl border border-slate-800 bg-[#0d1428] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <FacebookIcon className="h-5 w-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-slate-400 block font-mono">Facebook ID</span>
                    <a
                      href={DEVELOPER_INFO.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-white hover:text-blue-300 block"
                    >
                      {DEVELOPER_INFO.facebookHandle}
                    </a>
                  </div>
                </div>
                <a
                  href={DEVELOPER_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* 4. Instagram ID: asraful gadgets */}
              <div className="p-3.5 rounded-2xl border border-slate-800 bg-[#0d1428] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Instagram (Business)</span>
                    <a
                      href={DEVELOPER_INFO.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-rose-300 hover:underline"
                    >
                      {DEVELOPER_INFO.instagramHandle}
                    </a>
                  </div>
                </div>
                <a
                  href={DEVELOPER_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* 5. Personal Instagram ID: a_for._.asraf_ */}
              <div className="p-3.5 rounded-2xl border border-slate-800 bg-[#0d1428] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Personal Instagram ID</span>
                    <a
                      href={DEVELOPER_INFO.personalInstagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-purple-300 hover:underline"
                    >
                      {DEVELOPER_INFO.personalInstagramHandle}
                    </a>
                  </div>
                </div>
                <a
                  href={DEVELOPER_INFO.personalInstagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* 6. Twitter / X: Asraful Gadgets AG */}
              <div className="p-3.5 rounded-2xl border border-slate-800 bg-[#0d1428] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <TwitterIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Twitter (X) ID</span>
                    <a
                      href={DEVELOPER_INFO.twitterUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-sky-300 hover:underline"
                    >
                      {DEVELOPER_INFO.twitterHandle}
                    </a>
                  </div>
                </div>
                <a
                  href={DEVELOPER_INFO.twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* 7. Official Website: https://asraful-gadgets.netlify.app */}
              <div className="p-3.5 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-[#0d1428] to-[#121c36] flex items-center justify-between sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-slate-400 block font-mono">অফিসিয়াল ওয়েবসাইট (Official Website)</span>
                    <a
                      href={DEVELOPER_INFO.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-bold text-amber-300 hover:underline truncate block"
                    >
                      {DEVELOPER_INFO.websiteUrl}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(DEVELOPER_INFO.websiteUrl, 'web')}
                    className="px-2.5 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-xs text-slate-300 cursor-pointer"
                  >
                    {copiedText === 'web' ? 'কপি হয়েছে' : 'কপি লিংক'}
                  </button>
                  <a
                    href={DEVELOPER_INFO.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-slate-800">
              <button
                onClick={handleDownloadVCard}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 py-3 px-4 text-xs font-extrabold text-black shadow-lg shadow-amber-500/20 hover:bg-amber-300 transition cursor-pointer whitespace-nowrap"
              >
                <Download className="h-4 w-4" />
                <span>{language === 'bn' ? 'কন্টাক্ট সেভ করুন (vCard)' : 'Save Contact'}</span>
              </button>

              <button
                onClick={() => setShowQR(!showQR)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 py-3 px-4 text-xs font-medium text-slate-200 hover:border-slate-600 transition cursor-pointer"
              >
                <QrCode className="h-4 w-4 text-amber-400" />
                <span>QR কোড</span>
              </button>

              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 py-3 px-4 text-xs font-medium text-slate-200 hover:border-slate-600 transition cursor-pointer"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>ইমেইল</span>
              </a>
            </div>

            {/* QR Scanner Modal / Drawer */}
            {showQR && (
              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col items-center text-center animate-fadeIn">
                <div className="p-4 bg-white rounded-2xl shadow-xl">
                  {/* Clean SVG QR Code */}
                  <svg viewBox="0 0 100 100" className="w-40 h-40">
                    <rect width="100" height="100" fill="#ffffff" />
                    <rect x="10" y="10" width="24" height="24" fill="#05070f" rx="3" />
                    <rect x="14" y="14" width="16" height="16" fill="#ffffff" />
                    <rect x="18" y="18" width="8" height="8" fill="#d97706" />

                    <rect x="66" y="10" width="24" height="24" fill="#05070f" rx="3" />
                    <rect x="70" y="14" width="16" height="16" fill="#ffffff" />
                    <rect x="74" y="18" width="8" height="8" fill="#d97706" />

                    <rect x="10" y="66" width="24" height="24" fill="#05070f" rx="3" />
                    <rect x="14" y="70" width="16" height="16" fill="#ffffff" />
                    <rect x="18" y="74" width="8" height="8" fill="#d97706" />

                    <rect x="42" y="14" width="6" height="6" fill="#05070f" />
                    <rect x="52" y="20" width="6" height="6" fill="#d97706" />
                    <rect x="46" y="38" width="10" height="10" fill="#05070f" />
                    <rect x="62" y="44" width="8" height="6" fill="#d97706" />
                    <rect x="36" y="56" width="6" height="12" fill="#05070f" />
                    <rect x="48" y="64" width="8" height="8" fill="#d97706" />
                    <rect x="64" y="68" width="12" height="6" fill="#05070f" />
                  </svg>
                </div>
                <p className="text-xs text-slate-300 mt-3 font-mono">
                  যেকোনো ফোন দিয়ে স্ক্যান করে সরাসরি আশরাফুল ইসলামের সাথে যুক্ত হোন
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}
