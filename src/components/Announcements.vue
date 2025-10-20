<template>
  <section id="announcements" class="announcements-section">
    <div class="container">
      <div class="section-header">
        <h2>Latest Announcements</h2>
        <p class="subtitle">Stay updated with the latest news and updates</p>
      </div>

      <div class="announcements-grid">
        <article 
          v-for="announcement in announcements" 
          :key="announcement.id"
          class="announcement-card"
          :class="announcement.priority"
        >
          <div class="card-header">
            <span class="category-badge" :class="announcement.category">
              {{ announcement.category }}
            </span>
            <span class="date">{{ formatDate(announcement.date) }}</span>
          </div>
          
          <h3 class="announcement-title">{{ announcement.title }}</h3>
          
          <p class="announcement-excerpt">{{ announcement.excerpt }}</p>
          
          <div class="card-footer">
            <button class="read-more-btn" @click="viewAnnouncement(announcement.id)">
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </article>
      </div>

      <!-- Load More Button -->
      <div class="load-more-container" v-if="hasMore">
        <button class="load-more-btn" @click="loadMore">
          Load More Announcements
        </button>
      </div>

      <!-- Empty State -->
      <div v-if="announcements.length === 0" class="empty-state">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" stroke="#ddd" stroke-width="2"/>
          <path d="M32 20V34M32 42V44" stroke="#ddd" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <h3>No Announcements Yet</h3>
        <p>Check back soon for updates!</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// TypeScript Interface for Strapi Announcements
interface StrapiAnnouncement {
  id: number;
  attributes: {
    title: string;
    excerpt: string;
    content: string;
    category: 'news' | 'event' | 'update' | 'alert';
    priority: 'high' | 'normal' | 'low';
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

// Normalized Announcement Interface
interface Announcement {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  priority: string;
  date: string;
}

const announcements = ref<Announcement[]>([]);
const hasMore = ref(false);
const currentPage = ref(1);
const pageSize = 6;

// Placeholder data - Replace with Strapi API call
const placeholderAnnouncements: Announcement[] = [
  {
    id: 1,
    title: 'Championship Finals Scheduled',
    excerpt: 'The highly anticipated championship finals have been scheduled for next month. Get your tickets now!',
    content: '',
    category: 'event',
    priority: 'high',
    date: '2024-03-15T10:00:00Z'
  },
  {
    id: 2,
    title: 'New Training Facility Opens',
    excerpt: 'We are excited to announce the opening of our state-of-the-art training facility.',
    content: '',
    category: 'news',
    priority: 'normal',
    date: '2024-03-14T14:30:00Z'
  },
  {
    id: 3,
    title: 'Season Schedule Update',
    excerpt: 'Important changes to the upcoming season schedule. Please review the updated dates.',
    content: '',
    category: 'update',
    priority: 'high',
    date: '2024-03-13T09:15:00Z'
  },
  {
    id: 4,
    title: 'Youth Development Program Launch',
    excerpt: 'Introducing our new youth development program aimed at nurturing young talent.',
    content: '',
    category: 'news',
    priority: 'normal',
    date: '2024-03-12T11:00:00Z'
  },
  {
    id: 5,
    title: 'Weather Alert: Match Postponement',
    excerpt: 'Due to severe weather conditions, this weekend\'s match has been postponed.',
    content: '',
    category: 'alert',
    priority: 'high',
    date: '2024-03-11T16:45:00Z'
  },
  {
    id: 6,
    title: 'Player Signing Announcement',
    excerpt: 'We are thrilled to welcome our newest team member. Read more about this exciting addition.',
    content: '',
    category: 'news',
    priority: 'normal',
    date: '2024-03-10T13:20:00Z'
  }
];

// Fetch announcements from Strapi
const fetchAnnouncements = async (page: number = 1) => {
  try {
    // TODO: Replace with your actual Strapi API endpoint
    // const response = await fetch(
    //   `${import.meta.env.VITE_STRAPI_URL}/api/announcements?` +
    //   `pagination[page]=${page}&` +
    //   `pagination[pageSize]=${pageSize}&` +
    //   `sort=publishedAt:desc&` +
    //   `populate=*`
    // );
    // const data = await response.json();
    
    // Transform Strapi data
    // const transformedData = data.data.map((item: StrapiAnnouncement) => ({
    //   id: item.id,
    //   title: item.attributes.title,
    //   excerpt: item.attributes.excerpt,
    //   content: item.attributes.content,
    //   category: item.attributes.category,
    //   priority: item.attributes.priority,
    //   date: item.attributes.publishedAt || item.attributes.createdAt
    // }));
    
    // hasMore.value = data.meta.pagination.page < data.meta.pagination.pageCount;
    
    // For now, use placeholder data
    announcements.value = placeholderAnnouncements;
    hasMore.value = false;
    
  } catch (error) {
    console.error('Error fetching announcements:', error);
    // Fallback to placeholder data
    announcements.value = placeholderAnnouncements;
  }
};

// Load more announcements
const loadMore = async () => {
  currentPage.value += 1;
  await fetchAnnouncements(currentPage.value);
};

// View single announcement
const viewAnnouncement = (id: number) => {
  // TODO: Implement navigation to announcement detail page
  console.log('View announcement:', id);
  // Example: router.push(`/announcements/${id}`)
};

// Format date helper
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

onMounted(() => {
  fetchAnnouncements();
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.announcements-section {
  min-height: 100vh;
  padding: 80px 40px;
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #faf9f9;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.1rem;
  color: #22c55e;
}

.announcements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.announcement-card {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #22c55e;
}

.announcement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.announcement-card.high {
  border-left-color: #ef4444;
}

.announcement-card.normal {
  border-left-color: #22c55e;
}

.announcement-card.low {
  border-left-color: #6b7280;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.category-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.category-badge.news {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

.category-badge.event {
  background: rgba(168, 85, 247, 0.2);
  color: #a855f7;
}

.category-badge.update {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

.category-badge.alert {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.date {
  font-size: 0.85rem;
  color: #9ca3af;
}

.announcement-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #f3efef;
  margin-bottom: 12px;
  line-height: 1.3;
}

.announcement-excerpt {
  font-size: 0.95rem;
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #22c55e;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 8px 0;
}

.read-more-btn:hover {
  color: #16a34a;
  gap: 10px;
}

.load-more-container {
  text-align: center;
  margin-top: 40px;
}

.load-more-btn {
  background: #22c55e;
  color: #1a1a1a;
  border: none;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  background: #16a34a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-state svg {
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-state svg circle,
.empty-state svg path {
  stroke: #22c55e;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: #f1efef;
  margin-bottom: 10px;
}

.empty-state p {
  color: #9ca3af;
}

@media (max-width: 768px) {
  .announcements-section {
    padding: 60px 20px;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .announcements-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .announcement-card {
    padding: 20px;
  }
}
</style>