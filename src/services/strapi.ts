import axios, { type AxiosInstance } from 'axios';
import type {
  StrapiSingleResponse,
  StrapiCollectionResponse,
  AboutAttributes,
  AnnouncementAttributes,
  ContactInfoAttributes,
  ContactSubmissionData,
  MembershipPlanAttributes,
  MatchAttributes,
  StrapiMedia,
} from '@/types/strapi';

const API_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337/api';

class StrapiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // About Page
  async getAbout(): Promise<StrapiSingleResponse<AboutAttributes>> {
    const response = await this.api.get<StrapiSingleResponse<AboutAttributes>>('/about', {
      params: {
        populate: {
          values: '*',
          team: { populate: '*' },
          stats: '*',
          heroImage: '*',
        },
      },
    });
    return response.data;
  }

  // Announcements
  async getAnnouncements(filters?: {
    page?: number;
    pageSize?: number;
    category?: string;
  }): Promise<StrapiCollectionResponse<AnnouncementAttributes>> {
    const response = await this.api.get<StrapiCollectionResponse<AnnouncementAttributes>>(
      '/announcements',
      {
        params: {
          populate: '*',
          sort: 'createdAt:desc',
          pagination: {
            page: filters?.page || 1,
            pageSize: filters?.pageSize || 10,
          },
          ...(filters?.category && {
            filters: {
              category: {
                $eq: filters.category,
              },
            },
          }),
        },
      }
    );
    return response.data;
  }

  async getAnnouncement(id: number): Promise<StrapiSingleResponse<AnnouncementAttributes>> {
    const response = await this.api.get<StrapiSingleResponse<AnnouncementAttributes>>(
      `/announcements/${id}`,
      {
        params: { populate: '*' },
      }
    );
    return response.data;
  }

  // Contact Info
  async getContactInfo(): Promise<StrapiSingleResponse<ContactInfoAttributes>> {
    const response = await this.api.get<StrapiSingleResponse<ContactInfoAttributes>>(
      '/contact-info',
      {
        params: {
          populate: {
            socialMedia: '*',
          },
        },
      }
    );
    return response.data;
  }

  // Contact Form Submission
  async submitContactForm(data: ContactSubmissionData): Promise<any> {
    const response = await this.api.post('/contact-submissions', {
      data: data,
    });
    return response.data;
  }

  // Membership Plans
  async getMembershipPlans(): Promise<StrapiCollectionResponse<MembershipPlanAttributes>> {
    const response = await this.api.get<StrapiCollectionResponse<MembershipPlanAttributes>>(
      '/membership-plans',
      {
        params: {
          populate: '*',
          sort: 'order:asc',
        },
      }
    );
    return response.data;
  }

  // Matches/Fixtures
  async getMatches(filters?: {
    statuss?: string;
    page?: number;
    pageSize?: number;
  }): Promise<StrapiCollectionResponse<MatchAttributes>> {
    const response = await this.api.get<StrapiCollectionResponse<MatchAttributes>>('/matches', {
      params: {
        populate: {
          homeTeamLogo: '*',
          awayTeamLogo: '*',
        },
        sort: 'date:asc',
        pagination: {
          page: filters?.page || 1,
          pageSize: filters?.pageSize || 20,
        },
        ...(filters?.statuss && {
          filters: {
            status: {
              $eq: filters.statuss,
            },
          },
        }),
      },
    });
    return response.data;
  }

  async getMatch(id: number): Promise<StrapiSingleResponse<MatchAttributes>> {
    const response = await this.api.get<StrapiSingleResponse<MatchAttributes>>(`/matches/${id}`, {
      params: {
        populate: {
          homeTeamLogo: '*',
          awayTeamLogo: '*',
        },
      },
    });
    return response.data;
  }

  // Helper to get media URL
  getMediaUrl(media: StrapiMedia | null | undefined): string | null {
    if (!media?.data) return null;
    const url = media.data.attributes.url;
    return url ? `http://localhost:1337${url}` : null;
  }

  // Helper to format date
  formatDate(dateString: string, locale: string = 'en-US'): string {
    return new Date(dateString).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  // Helper to format datetime
  formatDateTime(dateString: string, locale: string = 'en-US'): string {
    return new Date(dateString).toLocaleString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}

export const strapiService = new StrapiService();
export default strapiService;