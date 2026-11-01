import { BusinessCategory, PromotionService, LiveDemoItem, BannerTemplate, DeveloperProfile } from '../types';

export const DEVELOPER_INFO: DeveloperProfile = {
  name: 'Asraful Islam Mazarbhuiya',
  titleBn: 'ফাউন্ডার ও সফটওয়্যার ডেভেলপার — AG DIGITAL',
  titleEn: 'Founder & Software Developer — AG DIGITAL',
  bioBn: 'যেকোনো নতুন দোকান বা ব্যবসার অনলাইন প্রমোশন, ওয়েবসাইট ও অ্যান্ড্রয়েড অ্যাপ তৈরির নির্ভরযোগ্য ঠিকানা। মানুষের স্বপ্নের ব্যবসাকে ডিজিটাল দুনিয়ায় সবচেয়ে কম খরচে সফল করাই আমার লক্ষ্য।',
  bioEn: 'Your trusted partner for low-cost digital promotions, custom websites, and mobile apps for any shop or business.',
  phone: '+91 9365868615',
  whatsapp: '919365441314',
  email: 'asrafulgadgets@gmail.com',
  facebookUrl: 'https://www.facebook.com/search/top?q=Asraful%20Gadgets',
  facebookHandle: 'Asraful Gadgets',
  instagramUrl: 'https://www.instagram.com/asraful_gadgets/',
  instagramHandle: 'asraful gadgets',
  personalInstagramUrl: 'https://www.instagram.com/a_for._.asraf_/',
  personalInstagramHandle: 'a_for._.asraf_',
  twitterUrl: 'https://x.com/search?q=Asraful%20Gadgets%20AG',
  twitterHandle: 'Asraful Gadgets AG',
  websiteUrl: 'https://asraful-gadgets.netlify.app',
  websiteId: 'https://asraful-gadgets.netlify.app',
  learningAppName: 'রিপেয়ারিং এক্সপার্ট (Repairing Expert)',
  learningAppDescBn: 'আমাদের বিশেষ লার্নিং প্ল্যাটফর্ম! যেখান থেকে যে কেউ ঘরে বসেই মোবাইল রিপেয়ারিং, কম্পিউটার হার্ডওয়্যার/সফটওয়্যার ও ওয়েব ডিজাইনিং সহজে শিখতে পারবেন।',
  learningAppDescEn: 'Our acclaimed learning app where anyone can easily master mobile repairing, PC troubleshooting, and web design from scratch.'
};

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    id: 'clothing',
    nameBn: 'কাপড়ের দোকান ও ফ্যাশন শপ',
    nameEn: 'Clothing & Fashion Store',
    iconName: 'Shirt',
    descriptionBn: 'শাড়ি, পাঞ্জাবি, বুটিক, থ্রি-পিস ও গার্মেন্টসের জন্য স্পেশাল ডিজিটাল ক্যাটালগ ও প্রমোশন।',
    descriptionEn: 'Digital catalog, online showcase & WhatsApp order engine for apparel boutiques.',
    popularServicesBn: ['অনলাইন শপ ওয়েবসাইট', 'উদ্বোধনী ব্যানার', 'ফেসবুক সেলস বুস্ট'],
    popularServicesEn: ['Online Shop Website', 'Grand Opening Banner', 'Facebook Ads Boost']
  },
  {
    id: 'bike',
    nameBn: 'বাইকের শোরুম ও পার্টস শপ',
    nameEn: 'Bike Showroom & Spares',
    iconName: 'Bike',
    descriptionBn: 'নতুন ও ব্যবহৃত বাইকের স্পেসিফিকেশন ভিউ, টেস্ট রাইড বুকিং ও ডিসকাউন্ট অফার ব্যানার।',
    descriptionEn: 'Motorcycle catalog, test ride bookings, and promotional campaign banners.',
    popularServicesBn: ['শোরুম ওয়েবসাইট ও অ্যাপ', 'ধামাকা অফার পোস্টার', 'গুগল ম্যাপ ভেরিফিকেশন'],
    popularServicesEn: ['Showroom Website & App', 'Mega Offer Poster', 'Google Maps Verification']
  },
  {
    id: 'mobile_pc',
    nameBn: 'মোবাইল ও কম্পিউটারের দোকান',
    nameEn: 'Mobile & Computer Store',
    iconName: 'Smartphone',
    descriptionBn: 'স্মার্টফোন, এক্সেসরিজ, পিসি বিল্ড ও রিপেয়ারিং সার্ভিস বুকিংয়ের অনলাইন প্ল্যাটফর্ম।',
    descriptionEn: 'Gadget catalog, PC assembly quote generator, and repair booking portal.',
    popularServicesBn: ['দোকানের নিজস্ব মোবাইল অ্যাপ', 'রিপেয়ার ট্র্যাকিং সিস্টেম', 'সোশ্যাল মিডিয়া ব্র্যান্ডিং'],
    popularServicesEn: ['Shop Mobile App (APK)', 'Repair Tracking', 'Social Media Branding']
  },
  {
    id: 'fruits_grocery',
    nameBn: 'ফলের দোকান ও গ্রোসারি শপ',
    nameEn: 'Fruits & Fresh Grocery',
    iconName: 'Apple',
    descriptionBn: 'টাটকা ফলমূল, আম-আপেল-কমলা ও মুদি পণ্যের দৈনিক দাম ও দ্রুত হোম ডেলিভারি সিস্টেম।',
    descriptionEn: 'Daily price board, fresh fruits menu, and local 1-click home delivery system.',
    popularServicesBn: ['হোয়াটসঅ্যাপ ডেলিভারি ওয়েবসাইট', 'দৈনিক অফার ব্যানার', 'কাস্টমার ডাটাবেস'],
    popularServicesEn: ['WhatsApp Delivery Website', 'Daily Rate Card Banner', 'Customer Database']
  },
  {
    id: 'csp',
    nameBn: 'সিএসপি ও ডিজিটাল সেবা কেন্দ্র',
    nameEn: 'CSP & Digital Seva Kendra',
    iconName: 'Landmark',
    descriptionBn: 'ব্যাংকিং পয়েন্ট, টাকা ট্রান্সফার, ইউটিলিটি বিল পে ও অনলাইন ফর্ম ফিলাপের ব্যানার ও পোর্টাল।',
    descriptionEn: 'Customer Service Point, banking kiosk, bill pay & online citizen portal design.',
    popularServicesBn: ['অফিসিয়াল সিএসপি ব্যানার', 'সেবা তালিকা সাইনবোর্ড', 'ডিজিটাল কিউআর স্ট্যান্ড'],
    popularServicesEn: ['Official CSP Signboard', 'Service Price Board', 'Digital QR Stand Card']
  },
  {
    id: 'custom_business',
    nameBn: 'যেকোনো ছোটখাটো বা বড় বিজনেস',
    nameEn: 'Any Small or Large Business',
    iconName: 'Building2',
    descriptionBn: 'রেস্টুরেন্ট, হোটেল, ফার্মেসি, সেলুন, হার্ডওয়্যার বা কোচিং সেন্টার—সবার জন্য উপযুক্ত!',
    descriptionEn: 'Restaurants, salons, pharmacies, coaching centers & all enterprises.',
    popularServicesBn: ['সম্পূর্ণ ডিজিটাল প্যাকেজ', 'ভিজিটিং কার্ড ও ব্যানার', 'গুগল লোকাল প্রমোশন'],
    popularServicesEn: ['Complete Digital Package', 'Visiting Card & Banner', 'Google Local Setup']
  }
];

export const PROMOTION_SERVICES: PromotionService[] = [
  {
    id: 'srv-website',
    titleBn: 'দোকান ও ব্যবসার জন্য প্রিমিয়াম ওয়েবসাইট',
    titleEn: 'Custom Website for Your Shop / Business',
    category: 'website',
    shortDescBn: 'আপনার দোকানের সব প্রডাক্টের ছবি, দাম, গুগল ম্যাপ লোকেশন ও সরাসরি হোয়াটসঅ্যাপ অর্ডারের সুপার-ফাস্ট ওয়েবসাইট।',
    shortDescEn: 'Ultra-fast shop website with product showcases, WhatsApp direct ordering, and Google Maps location.',
    fullDescBn: 'সাধারণ এজেন্সিরা যেখানে একটি ওয়েবসাইট বানাতে ১০,০০০-২০,০০০ টাকা চায়, AG DIGITAL-এ কোয়ালিটি ১০০% বিশ্বমানের রেখে অত্যন্ত কম খরচে ওয়েবসাইট রেডি করে দেওয়া হয়।',
    fullDescEn: 'While ordinary agencies charge 10k-20k, AG DIGITAL crafts modern, lightning-fast shop websites at an unbeatable affordable price with zero quality compromises.',
    marketPrice: 9999,
    agPrice: 1999, // Unbeatable low price
    deliveryTimeBn: '২ - ৩ দিনের মধ্যে রেডি',
    deliveryTimeEn: 'Ready in 2 - 3 Days',
    badgeBn: 'সবচেয়ে কম দামের গ্যারান্টি',
    badgeEn: 'Best Value Guaranteed',
    demoType: 'clothing',
    featuresBn: [
      'মোবাইল ও কম্পিউটারে আকর্ষণীয় লুক',
      'দোকানের সব পণ্য বা সার্ভিসের সুন্দর ক্যাটালগ',
      '১-ক্লিকে কাস্টমার সরাসরি হোয়াটসঅ্যাপে অর্ডার করতে পারবে',
      'দোকানের গুগল ম্যাপ লোকেশন ও ফোন কল বাটন',
      'সহজে চালাতে পারবেন কোনো টেকনিক্যাল জটিলতা ছাড়া'
    ],
    featuresEn: [
      '100% Mobile & Tablet Responsive',
      'Clean product or service catalog',
      '1-Click WhatsApp direct buy button',
      'Google Maps shop location & direct call button',
      'Super easy to manage with zero technical knowledge'
    ]
  },
  {
    id: 'srv-app',
    titleBn: 'দোকানের নিজস্ব মোবাইল অ্যাপ (APK / Android App)',
    titleEn: 'Your Shop’s Own Branded Mobile App (APK)',
    category: 'app',
    shortDescBn: 'আপনার দোকানের নামে নিজস্ব অ্যান্ড্রয়েড অ্যাপ! কাস্টমাররা ফোনে ইনস্টল করে রাখবে এবং নতুন অফার দেখতে পারবে।',
    shortDescEn: 'Custom Android APK app with your store name and logo. Customers keep it on their phones!',
    fullDescBn: 'কাস্টমারদের লয়্যালটি ধরে রাখতে আপনার দোকানের নামে নিজস্ব ব্র্যান্ডেড অ্যাপ। ফোনে হোম স্ক্রিনে দোকানের আইকন থাকবে এবং সরাসরি ক্লিক করে অর্ডার করতে পারবে।',
    fullDescEn: 'Retain your local loyal customers with an exclusive branded Android APK. Customers can install it directly with 1 tap.',
    marketPrice: 12000,
    agPrice: 2499,
    deliveryTimeBn: '৩ - ৪ দিন',
    deliveryTimeEn: '3 - 4 Days',
    badgeBn: 'হিট ট্রেন্ড!',
    badgeEn: 'Trending Now',
    demoType: 'bike',
    featuresBn: [
      'দোকানের লোগো ও নাম সহ অ্যান্ড্রয়েড APK ফাইল',
      'অফলাইন ও অনলাইন উভয় সাপোর্ট',
      'নতুন অফারের জন্য চমৎকার প্রেজেন্টেশন',
      'কাস্টমার ফোনে হোম স্ক্রিনে অ্যাপ আইকন থাকবে',
      'সরাসরি কল ও হোয়াটসঅ্যাপ চ্যাট ইন্টিগ্রেশন'
    ],
    featuresEn: [
      'Android APK with your shop logo & name',
      'Smooth offline & online support',
      'Push discount notifications capability',
      'Permanent home-screen brand presence on customer phones',
      'Direct call and WhatsApp order connection'
    ]
  },
  {
    id: 'srv-banner',
    titleBn: 'উদ্বোধনী ব্যানার, স্পেশাল অফার ও পোস্টার মেকিং',
    titleEn: 'Grand Opening Banners, Posters & Offer Creatives',
    category: 'banner',
    shortDescBn: 'শুভ উদ্বোধন ব্যানার, ঈদ বা পূজা অফার, ধামাকা ছাড় পোস্টার, ফেসবুক কভার ও ভিজিটিং কার্ডের সেরা ডিজাইন।',
    shortDescEn: 'Grand opening banners, seasonal festival discounts, social media graphics & digital visiting cards.',
    fullDescBn: 'দোকানের প্রচারের প্রথম মাধ্যম আকর্ষণীয় ব্যানার। সাধারণ ডিজাইনাররা যেখানে ৮০০-১০০০ টাকা নেয়, আমরা প্রিন্ট ও সোশ্যাল মিডিয়ার জন্য হাই-ডেফিনিশন ব্যানার তৈরি করে দিচ্ছি মাত্র ২৯৯ টাকায়!',
    fullDescEn: 'High-resolution vector designs for shop flex printing or Facebook promotion at the lowest market cost.',
    marketPrice: 999,
    agPrice: 299,
    deliveryTimeBn: '২৪ ঘণ্টার মধ্যে ডেলিভারি',
    deliveryTimeEn: 'Within 24 Hours',
    badgeBn: 'মাত্র ২৯৯ টাকা!',
    badgeEn: 'From 299 INR!',
    demoType: 'banner',
    featuresBn: [
      'প্রিন্ট করার উপযোগী আল্ট্রা এইচডি কোয়ালিটি (Flex / Vinyl)',
      'ফেসবুক ও সোশ্যাল মিডিয়ায় শেয়ার করার সাইজ',
      'দোকানের নাম, ঠিকানা ও স্পেশাল ছাড় হাইলাইট',
      'পছন্দ অনুযায়ী ফ্রি রিভিশন সুবিধা',
      'পিডিএফ, জেপিজি ও পিএনজি ফরমেটে সরবরাহ'
    ],
    featuresEn: [
      'Print-ready high DPI flex & vinyl banner resolution',
      'Optimized dimensions for Facebook & WhatsApp status',
      'Highlights shop name, address & opening discount offers',
      'Free minor revisions until full satisfaction',
      'Delivered in PDF, JPG, and PNG formats'
    ]
  },
  {
    id: 'srv-marketing',
    titleBn: 'ফেসবুক পেজ বুস্ট ও লোকাল কাস্টমার প্রমোশন',
    titleEn: 'Local Facebook Ads & Targeted Business Promotion',
    category: 'marketing',
    shortDescBn: 'আপনার এলাকা, থানা বা জেলার ফেসবুক ব্যবহারকারীদের কাছে আপনার দোকানের বিজ্ঞাপন পৌঁছে দিয়ে বিক্রি বাড়ান।',
    shortDescEn: 'Reach thousands of local potential customers in your area through precision Meta ads.',
    fullDescBn: 'আমরা আপনার দোকানের অফারটি আপনার আশপাশের ৫-১৫ কিলোমিটার এলাকার মানুষের টাইমলাইনে পৌঁছে দেবো যাতে লোকাল কাস্টমাররা দোকানে আসে।',
    fullDescEn: 'Geo-targeted Facebook & Instagram campaigns around your store location to bring real footfall and sales.',
    marketPrice: 2500,
    agPrice: 499,
    deliveryTimeBn: '১২ ঘণ্টার মধ্যে ক্যাম্পেইন শুরু',
    deliveryTimeEn: 'Starts within 12 Hours',
    badgeBn: 'সেলস বৃদ্ধির সেরা উপায়',
    badgeEn: 'Top Growth Engine',
    demoType: 'grocery',
    featuresBn: [
      'নির্দিষ্ট এলাকা, বয়স ও আগ্রহ অনুযায়ী টার্গেটিং',
      'বিজ্ঞাপন থেকে সরাসরি ফোন কল বা মেসেজ আসার ব্যবস্থা',
      'বিজ্ঞাপনের জন্য চোখ ধাঁধানো আকর্ষণীয় পোস্ট ব্যানার',
      'দৈনিক কতজন মানুষ বিজ্ঞাপন দেখল তার স্বচ্ছ রিপোর্ট',
      'কম বাজেটে সর্বোচ্চ সংখ্যক মানুষের কাছে পৌঁছানোর নিশ্চয়তা'
    ],
    featuresEn: [
      'Pinpoint radius targeting around your shop',
      'Direct Click-to-Call or WhatsApp lead buttons',
      'Compelling ad copies & visuals',
      'Transparent daily reach and impression reports',
      'Maximum return on minimal ad spend'
    ]
  },
  {
    id: 'srv-csp',
    titleBn: 'সিএসপি (CSP) ও ডিজিটাল সেবা কেন্দ্র সেটআপ',
    titleEn: 'CSP & Digital Seva Kendra Branding & Setup',
    category: 'csp',
    shortDescBn: 'ব্যাংকিং পয়েন্ট (CSP), ডিজিটাল সেবা কেন্দ্র, আধার/প্যান/ভোট কার্ড সার্ভিস ও বিল পে সেন্টারের অল-ইন-ওয়ান ডিজাইন।',
    shortDescEn: 'Complete branding, service boards, and portal setup for banking kiosks and online service centers.',
    fullDescBn: 'যাঁরা সিএসপি বা অনলাইন সেবা কেন্দ্র চালান, তাঁদের জন্য অফিশিয়াল লুকিং সার্ভিস বোর্ড, রেট চার্ট ব্যানার এবং কাউন্টার ব্র্যান্ডিং প্যাকেজ।',
    fullDescEn: 'Professional trust-building signage, rate charts, and portal design for customer service points.',
    marketPrice: 3500,
    agPrice: 899,
    deliveryTimeBn: '১ - ২ দিন',
    deliveryTimeEn: '1 - 2 Days',
    badgeBn: 'সিএসপি স্পেশাল',
    badgeEn: 'CSP Special',
    demoType: 'csp',
    featuresBn: [
      'সব সেবার তালিকাসহ কাস্টমাইজড ফ্রন্ট ব্যানার',
      'ডিজিটাল পেমেন্ট কিউআর কোড (QR) স্ট্যান্ড ডিজাইন',
      'গ্রাহকদের জন্য আকর্ষণীয় রেট কার্ড ও নোটিশ বোর্ড',
      'অনলাইন আবেদন ও কাস্টমার ট্র্যাকিং সুবিধা',
      'আজীবন টেকনিক্যাল সাপোর্ট'
    ],
    featuresEn: [
      'Front glow-sign banner with complete service list',
      'Branded QR code payment counter standee',
      'Clear rates & services notice board graphics',
      'Online application request tracking',
      'Dedicated technical guidance'
    ]
  },
  {
    id: 'srv-online',
    titleBn: 'সকল অনলাইনের কাজ ও ডিজিটাল সহায়তা',
    titleEn: 'All Online Tasks & Digital Setup Solutions',
    category: 'online_task',
    shortDescBn: 'গুগল ম্যাপে দোকানের লোকেশন অ্যাড, কিউআর কোড স্ট্যান্ড, ডিজিটাল বিলিং ক্যাশমেমো ও যেকোনো অনলাইন কাজ।',
    shortDescEn: 'Google Maps business verification, digital invoice billing, QR code cards, and any online task.',
    fullDescBn: 'নতুন দোকানের জন্য দরকার গুগল ম্যাপে ঠিকানা যোগ করা যাতে মানুষ সহজে খুঁজে পায়। এছাড়াও ডিজিটাল ক্যাশমেমো, দোকানের লোগো, অনলাইন ফর্ম ফিলাপ ইত্যাদি যেকোনো কাজের দ্রুত সমাধান।',
    fullDescEn: 'Complete suite of digital errands: Google Business Profile, digital cash receipts, visiting cards, and more.',
    marketPrice: 1500,
    agPrice: 199,
    deliveryTimeBn: 'কয়েক ঘণ্টার মধ্যে',
    deliveryTimeEn: 'Within a few hours',
    badgeBn: 'শুরু মাত্র ১৯৯ টাকা!',
    badgeEn: 'Starts at 199 INR!',
    demoType: 'mobile_pc',
    featuresBn: [
      'গুগল ম্যাপে দোকানের নাম ও ফোন নম্বর ভেরিফিকেশন',
      'ইউপিআই (GPay / PhonePe / Paytm / bKash) কিউআর স্ট্যান্ড ডিজাইন',
      'দোকানের নামে ডিজিটাল ক্যাশমেমো ও ইনভয়েস প্যাড',
      'সোশ্যাল মিডিয়া পেজ ফুল সেটআপ ও অপ্টিমাইজেশন',
      'সার্বক্ষণিক আশরাফুল ইসলামের সরাসরি হেল্পলাইন'
    ],
    featuresEn: [
      'Google Maps listing with store photos & timings',
      'Custom styled payment QR counter stand',
      'Digital receipt and bill invoice template',
      'Complete social profile setup with verified tags',
      'Direct personal hotline support from Asraful'
    ]
  }
];

export const LIVE_DEMOS: LiveDemoItem[] = [
  {
    id: 'demo-clothing',
    titleBn: 'নূর ফ্যাশন — কাপড়ের দোকান লাইভ ডেমো',
    titleEn: 'Noor Fashion — Clothing Store Live Demo',
    categoryBn: 'কাপড়ের দোকান',
    categoryEn: 'Clothing Store',
    previewType: 'clothing',
    descriptionBn: 'শাড়ি, পাঞ্জাবি ও লেডিস কালেকশন সুন্দরভাবে সাজানো। কাস্টমার সরাসরি প্রডাক্ট দেখে এক ক্লিকে হোয়াটসঅ্যাপে অর্ডার করতে পারবে।',
    descriptionEn: 'Browse elegant sarees, panjabi & fashion picks with instant 1-click WhatsApp buy.',
    priceNoteBn: 'এমন সুন্দর ওয়েবসাইট মাত্র ১,৯৯৯ টাকায়!',
    priceNoteEn: 'Full website like this at only 1,999 INR!'
  },
  {
    id: 'demo-bike',
    titleBn: 'স্পিড মোটরস — বাইকের শোরুম লাইভ ডেমো',
    titleEn: 'Speed Motors — Bike Showroom Live Demo',
    categoryBn: 'বাইক শোরুম',
    categoryEn: 'Bike Showroom',
    previewType: 'bike',
    descriptionBn: 'বাইকের মডেল, ইঞ্জিন সিসি, মাইলেজ ও অফার ডিসপ্লে। কাস্টমার টেস্ট রাইড বুক করতে পারে বা কিস্তি (EMI) সম্পর্কে জানতে পারে।',
    descriptionEn: 'Showcase bike models, engine CC, mileage, price discounts, and book test rides.',
    priceNoteBn: 'এমন প্রিমিয়াম শোরুম অ্যাপ মাত্র ২,৪৯৯ টাকায়!',
    priceNoteEn: 'Complete showroom app at only 2,499 INR!'
  },
  {
    id: 'demo-grocery',
    titleBn: 'গ্রিন ফ্রেশ বাজার — ফল ও মুদি দোকান লাইভ ডেমো',
    titleEn: 'Green Fresh Mart — Fruits & Grocery Live Demo',
    categoryBn: 'ফল ও মুদি দোকান',
    categoryEn: 'Fruits & Grocery',
    previewType: 'grocery',
    descriptionBn: 'তাজা আম, আপেল, কমলা ও খাঁটি মুদি পণ্যের রেট কার্ড ও দ্রুত হোম ডেলিভারির অর্ডার ফর্ম।',
    descriptionEn: 'Fresh seasonal fruits, daily grocery price list with fast local home delivery.',
    priceNoteBn: 'লোকাল ডেলিভারি সাইট মাত্র ১,৪৯৯ টাকায়!',
    priceNoteEn: 'Local order site from only 1,499 INR!'
  },
  {
    id: 'demo-mobile-pc',
    titleBn: 'টেক কর্ণার — মোবাইল ও কম্পিউটার শপ ডেমো',
    titleEn: 'Tech Corner — Mobile & PC Shop Demo',
    categoryBn: 'মোবাইল ও পিসি',
    categoryEn: 'Mobile & Computer',
    previewType: 'mobile_pc',
    descriptionBn: 'স্মার্টফোন, হেডফোন ও পিসি বিল্ডের স্পেক্স ভিউ এবং অনলাইন রিপেয়ারিং রিকোয়েস্ট সাবমিশন।',
    descriptionEn: 'Display latest smartphones, accessories, and submit instant device repair requests.',
    priceNoteBn: 'দোকানের অ্যাপ ও ওয়েবসাইট প্যাকেজ মাত্র ২,৯৯৯ টাকায়!',
    priceNoteEn: 'App + Website combo at only 2,999 INR!'
  },
  {
    id: 'demo-csp',
    titleBn: 'ডিজিটাল সেবা কেন্দ্র ও সিএসপি ডেমো',
    titleEn: 'Digital Seva Kendra & CSP Live Demo',
    categoryBn: 'সিএসপি ও অনলাইন সেবা',
    categoryEn: 'CSP & Online Services',
    previewType: 'csp',
    descriptionBn: 'আধার, প্যান, ব্যাংকিং টাকা তোলা/জমা, বিদ্যুৎ বিল ও সকল সরকারি-বেসরকারি সেবার ডিজিটাল ডিসপ্লে।',
    descriptionEn: 'Banking transactions, money transfers, bill pay, and government digital services showcase.',
    priceNoteBn: 'সম্পূর্ণ সিএসপি ব্র্যান্ডিং মাত্র ৮৯৯ টাকায়!',
    priceNoteEn: 'Full CSP branding kit at only 899 INR!'
  },
  {
    id: 'demo-banner',
    titleBn: 'শুভ উদ্বোধন ও ধামাকা অফার ব্যানার গ্যালারি',
    titleEn: 'Grand Opening & Discount Banner Gallery',
    categoryBn: 'ব্যানার ও পোস্টার',
    categoryEn: 'Banners & Posters',
    previewType: 'banner',
    descriptionBn: 'যেকোনো নতুন দোকানের শুভ উদ্বোধন ব্যানার, ঈদ ধামাকা অফার এবং ভিজিটিং কার্ডের আকর্ষণীয় ডেমো ডিজাইন।',
    descriptionEn: 'Grand opening festive flex banners, 50% discount festival posters, and visiting card mockups.',
    priceNoteBn: 'যেকোনো আকর্ষণীয় ব্যানার মাত্র ২৯৯ টাকায়!',
    priceNoteEn: 'Any custom HD banner at only 299 INR!'
  }
];

export const BANNER_TEMPLATES: BannerTemplate[] = [
  {
    id: 'b-1',
    titleBn: 'দোকানের শুভ উদ্বোধন ব্যানার',
    titleEn: 'Grand Opening Celebration Banner',
    tagBn: 'নতুন দোকানের জন্য',
    tagEn: 'For New Shops',
    price: 299,
    badgeBn: 'সবচেয়ে জনপ্রিয়',
    badgeEn: 'Most Popular',
    accentColor: '#f59e0b'
  },
  {
    id: 'b-2',
    titleBn: 'ঈদ / পূজা ধামাকা স্পেশাল অফার',
    titleEn: 'Festival Mega Discount Offer',
    tagBn: 'সেলস বৃদ্ধির অফার',
    tagEn: 'Sales Promotion',
    price: 349,
    badgeBn: 'হট সেল',
    badgeEn: 'Hot Sale',
    accentColor: '#ef4444'
  },
  {
    id: 'b-3',
    titleBn: 'সিএসপি ও ডিজিটাল সেবা সাইনবোর্ড',
    titleEn: 'CSP & Banking Signboard Banner',
    tagBn: 'ব্যাংকিং ও সেবাকেন্দ্র',
    tagEn: 'Banking Kiosks',
    price: 399,
    badgeBn: 'অফিসিয়াল লুক',
    badgeEn: 'Official Look',
    accentColor: '#0ea5e9'
  },
  {
    id: 'b-4',
    titleBn: 'ভিজিটিং কার্ড ও ডিজিটাল কিউআর স্ট্যান্ড',
    titleEn: 'Visiting Card & QR Payment Standee',
    tagBn: 'কাউন্টার শোকেস',
    tagEn: 'Counter Setup',
    price: 199,
    badgeBn: 'বাজেট ফ্রেন্ডলি',
    badgeEn: 'Super Budget',
    accentColor: '#10b981'
  }
];
