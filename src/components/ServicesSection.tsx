import React, { useState } from 'react';
import { ArrowUpRight, Check, MessageSquare, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { Language, PromotionService } from '../types';
import { PROMOTION_SERVICES, DEVELOPER_INFO } from '../data/mockData';

interface ServicesSectionProps {
  language: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const [selectedService, setSelectedService] = useState<PromotionService | null>(null);

  const handleWhatsAppInquiry = (service: PromotionService) => {
    const text = encodeURIComponent(
      `Hello Asraful Bhai (AG DIGITAL), আমি আপনার "${service.titleBn}" সার্ভিসটি নিতে আগ্রহী। অফার প্রাইস: ৳${service.agPrice.toLocaleString()}। আমার ব্যবসার বিস্তারিত জানাতে চাই।`
    );
    window.open(`https://wa.me/${DEVELOPER_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 border-t border-amber-500/20 bg-[#05070f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="h-3.5 w-3.5" />
            <span>{language === 'bn' ? 'অবিশ্বাস্য কম দামের গ্যারান্টি' : 'Unbeatable Lowest Rates'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {language === 'bn'
              ? 'দোকান ও ব্যবসার সব অনলাইন কাজ — অবিশ্বাস্য কম খরচে!'
              : 'Complete Digital & Promotional Solutions at Lowest Prices'}
          </h2>

          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            {language === 'bn'
              ? 'মার্কেটের চেয়ে ৮০% পর্যন্ত কম খরচে প্রিমিয়াম কোয়ালিটির ওয়েবসাইট, অ্যাপ, ব্যানার ও প্রমোশন। ছোট-বড় যেকোনো ব্যবসার প্রচার এখন সবার সাধ্যের মধ্যে।'
              : 'High-end craftsmanship that looks like a 20k BDT enterprise build, delivered at honest, bootstrap-friendly prices.'}
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMOTION_SERVICES.map((service, index) => {
            const savingsPercent = Math.round(((service.marketPrice - service.agPrice) / service.marketPrice) * 100);

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#0a0f1e]/90 backdrop-blur-sm p-6 sm:p-7 transition-all hover:border-amber-400/50 hover:bg-[#0d1428] hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div>
                  {/* Top Bar: Savings Badge & Delivery Time */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4 text-xs">
                    <span className="font-mono text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                      {savingsPercent}% সাশ্রয় (SAVE)
                    </span>
                    <span className="font-mono text-slate-400">
                      {language === 'bn' ? service.deliveryTimeBn : service.deliveryTimeEn}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {language === 'bn' ? service.titleBn : service.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {language === 'bn' ? service.shortDescBn : service.shortDescEn}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="space-y-2 mb-6">
                    {(language === 'bn' ? service.featuresBn : service.featuresEn).slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-slate-500 line-through font-mono">
                        ৳{service.marketPrice.toLocaleString()}
                      </span>
                      <span className="text-xl font-extrabold text-amber-400 font-mono tabular-nums">
                        ৳{service.agPrice.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold block">
                      {service.badgeBn || 'কম খরচে সেরা'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleWhatsAppInquiry(service)}
                      className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-3.5 py-2 text-xs font-bold text-black shadow hover:bg-emerald-400 transition cursor-pointer"
                      title="Direct WhatsApp Order"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>{language === 'bn' ? 'অর্ডার' : 'Order'}</span>
                    </button>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-amber-400 hover:text-black transition cursor-pointer"
                      title="View Details"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl border border-amber-500/40 bg-[#090e1c] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-amber-400 uppercase">
                  AG DIGITAL EXCLUSIVE OFFER
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {language === 'bn' ? selectedService.titleBn : selectedService.titleEn}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="h-8 w-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {language === 'bn' ? selectedService.fullDescBn : selectedService.fullDescEn}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                {language === 'bn' ? 'এই সার্ভিসের পূর্ণাঙ্গ সুবিধাসমূহ:' : 'All Included Features:'}
              </h4>
              <div className="space-y-2">
                {(language === 'bn' ? selectedService.featuresBn : selectedService.featuresEn).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-slate-400">
                  {language === 'bn' ? 'আমাদের বিশেষ রেট:' : 'Exclusive Rate:'}
                </div>
                <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">
                  ৳{selectedService.agPrice.toLocaleString()}
                </div>
              </div>

              <button
                onClick={() => handleWhatsAppInquiry(selectedService)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs font-extrabold hover:bg-amber-300 transition cursor-pointer shadow"
              >
                {language === 'bn' ? 'হোয়াটসঅ্যাপে বুক করুন' : 'Book on WhatsApp'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
