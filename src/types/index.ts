export type Language = 'bn' | 'en';

export interface BusinessCategory {
  id: string;
  nameBn: string;
  nameEn: string;
  iconName: string;
  descriptionBn: string;
  descriptionEn: string;
  popularServicesBn: string[];
  popularServicesEn: string[];
}

export interface PromotionService {
  id: string;
  titleBn: string;
  titleEn: string;
  category: 'website' | 'app' | 'banner' | 'marketing' | 'csp' | 'online_task';
  shortDescBn: string;
  shortDescEn: string;
  fullDescBn: string;
  fullDescEn: string;
  marketPrice: number;
  agPrice: number;
  deliveryTimeBn: string;
  deliveryTimeEn: string;
  featuresBn: string[];
  featuresEn: string[];
  demoType?: 'clothing' | 'bike' | 'grocery' | 'mobile_pc' | 'csp' | 'banner';
  badgeBn?: string;
  badgeEn?: string;
}

export interface LiveDemoItem {
  id: string;
  titleBn: string;
  titleEn: string;
  categoryBn: string;
  categoryEn: string;
  previewType: 'clothing' | 'bike' | 'grocery' | 'mobile_pc' | 'csp' | 'banner';
  descriptionBn: string;
  descriptionEn: string;
  priceNoteBn: string;
  priceNoteEn: string;
}

export interface BannerTemplate {
  id: string;
  titleBn: string;
  titleEn: string;
  tagBn: string;
  tagEn: string;
  price: number;
  badgeBn: string;
  badgeEn: string;
  accentColor: string;
}

export interface DeveloperProfile {
  name: string;
  titleBn: string;
  titleEn: string;
  bioBn: string;
  bioEn: string;
  phone: string;
  whatsapp: string;
  email: string;
  facebookUrl: string;
  facebookHandle: string;
  instagramUrl: string;
  instagramHandle: string;
  personalInstagramUrl: string;
  personalInstagramHandle: string;
  twitterUrl: string;
  twitterHandle: string;
  websiteUrl: string;
  websiteId: string;
  learningAppName: string;
  learningAppDescBn: string;
  learningAppDescEn: string;
}
