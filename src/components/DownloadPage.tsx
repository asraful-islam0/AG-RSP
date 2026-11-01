import React from 'react';
import { Download, ShieldCheck, CheckCircle2, Smartphone, ArrowRight } from 'lucide-react';

export const DownloadPage: React.FC = () => {
  React.useEffect(() => {
    // Automatically trigger APK download after 800ms
    const timer = setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/AG_DIGITAL.apk';
      link.download = 'AG_DIGITAL.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="relative inline-block mb-6">
        <div className="w-28 h-28 mx-auto rounded-3xl p-1 bg-gradient-to-tr from-amber-400 via-rose-500 to-cyan-400 shadow-2xl shadow-amber-500/20">
          <img
            src="/logo.jpg"
            alt="AG DIGITAL"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <span className="absolute -bottom-2 right-1/2 translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-black text-[10px] font-black tracking-wider uppercase">
          Official v1.1
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
        AG DIGITAL Android App
      </h1>
      <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
        Official APK for AG DIGITAL — Website, App & Online Business Promotion Services. Developed by Asraful Islam Mazarbhuiya.
      </p>

      {/* Direct One-Click Download Button */}
      <a
        href="/AG_DIGITAL.apk"
        download="AG_DIGITAL.apk"
        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-black font-extrabold text-lg shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all mb-4"
      >
        <Download className="w-6 h-6 stroke-[2.5]" />
        <span>Download AG_DIGITAL.apk (61 KB)</span>
      </a>

      <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 font-medium mb-12">
        <ShieldCheck className="w-4 h-4" />
        <span>Verified Signed APK • Android 7 to Android 15</span>
      </div>

      {/* 3 Step Install Guide for Android */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-left text-sm space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-amber-400" />
          <span>Android-এ ইন্সটল করার নিয়ম (Install Steps):</span>
        </h2>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
            1
          </div>
          <p className="text-slate-300">
            ওপরের <strong>Download AG_DIGITAL.apk</strong> বাটনে চাপ দিন। ফাইলটি আপনার ফোনের <em>Downloads</em> ফোল্ডারে সেভ হবে।
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
            2
          </div>
          <p className="text-slate-300">
            ডাউনলোড হওয়া ফাইলটিতে ক্লিক করুন। যদি <em>Google Play Protect</em> বা <em>Blocked</em> স্ক্রিন আসে, তবে <strong>"More details" (আরও দেখুন)</strong>-এ চাপ দিন এবং <strong>"Install anyway" (যেকোনো উপায়ে ইন্সটল করুন)</strong> নির্বাচন করুন।
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
            3
          </div>
          <p className="text-slate-300">
            ইন্সটল শেষ হলে ওপেন করুন। লোগো ইন্ট্রো সহ সম্পূর্ণ AG DIGITAL অ্যাপ আপনার মোবাইলে লাইভ চলবে!
          </p>
        </div>
      </div>
    </div>
  );
};
