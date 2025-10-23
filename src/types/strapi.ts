// Base Strapi response types
export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta?: Record<string, any>;
}

export interface StrapiCollectionResponse<T> {
  data: Array<{
    id: number;
    attributes: T;
  }>;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiMedia {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: Record<string, any>;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
}

// Component types
export interface AboutValue {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: StrapiMedia;
}

export interface Stat {
  id: number;
  number: string;
  label: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

// Content type attributes
export interface AboutAttributes {
  title: string;
  subtitle: string;
  heroImage: StrapiMedia;
  mission: string;
  vision: string;
  values: AboutValue[];
  team: TeamMember[];
  stats: Stat[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface AnnouncementAttributes {
  title: string;
  excerpt: string;
  content: string;
  category: 'news' | 'event' | 'update' | 'alert';
  priority: 'high' | 'normal' | 'low';
  featuredImage: StrapiMedia | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContactInfoAttributes {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  socialMedia: SocialLink[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContactSubmissionData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionAttributes extends ContactSubmissionData {
  status: 'new' | 'read' | 'replied';
  createdAt: string;
  updatedAt: string;
}

export interface MembershipPlanAttributes {
  name: string;
  description: string;
  icon: string;
  price: string;
  period: 'month' | 'quarter' | 'year';
  features: string[];
  buttonText: string;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface MatchAttributes {
  competition: string;
  date: string;
  venue: string;
  homeTeamName: string;
  homeTeamLogo: StrapiMedia;
  homeTeamScore: number | null;
  awayTeamName: string;
  awayTeamLogo: StrapiMedia;
  awayTeamScore: number | null;
  statuss: 'upcoming' | 'live' | 'completed' | 'postponed' | 'cancelled';
  matchReport: string | null;
  highlights: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}