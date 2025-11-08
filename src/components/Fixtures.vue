<template>
  <section id="fixtures" class="fixtures-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2>Fixtures & Results</h2>
        <p class="subtitle">Stay updated with our latest matches and upcoming fixtures</p>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.value"
          @click="activeTab = tab.value"
          class="tab-button"
          :class="{ 'active': activeTab === tab.value }"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Upcoming Fixtures -->
      <div v-if="activeTab === 'upcoming'" class="fixtures-container">
        <h3 class="section-title">Upcoming Matches</h3>
        <div class="matches-grid">
          <div 
            v-for="fixture in upcomingFixtures" 
            :key="fixture.id"
            class="match-card upcoming glass elevate"
          >
            <div class="match-header">
              <span class="competition">{{ fixture.competition }}</span>
              <span class="match-date">{{ formatDate(fixture.date) }}</span>
            </div>

            <div class="match-content">
              <div class="team home-team">
                <img :src="fixture.homeTeam.logo" :alt="fixture.homeTeam.name" class="team-logo" />
                <span class="team-name">{{ fixture.homeTeam.name }}</span>
              </div>

              <div class="match-info">
                <div class="time">{{ formatTime(fixture.date) }}</div>
                <div class="vs">VS</div>
                <div class="venue">{{ fixture.venue }}</div>
              </div>

              <div class="team away-team">
                <img :src="fixture.awayTeam.logo" :alt="fixture.awayTeam.name" class="team-logo" />
                <span class="team-name">{{ fixture.awayTeam.name }}</span>
              </div>
            </div>

            <div class="match-footer">
              <button @click="viewMatchDetails(fixture.id)" class="details-btn">
                Match Details
              </button>
            </div>
          </div>
        </div>

        <div v-if="upcomingFixtures.length === 0" class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#22c55e" stroke-width="2"/>
            <path d="M12 6V12L16 14" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <h4>No Upcoming Fixtures</h4>
          <p>Check back soon for new matches</p>
        </div>
      </div>

      <!-- Recent Results -->
      <div v-if="activeTab === 'results'" class="results-container">
        <h3 class="section-title">Recent Results</h3>
        <div class="matches-grid">
          <div 
            v-for="result in recentResults" 
            :key="result.id"
            class="match-card result glass elevate"
            :class="getResultClass(result)"
          >
            <div class="match-header">
              <span class="competition">{{ result.competition }}</span>
              <span class="match-date">{{ formatDate(result.date) }}</span>
              <span class="result-badge" :class="getResultClass(result)">
                {{ getResultText(result) }}
              </span>
            </div>

            <div class="match-content">
              <div class="team home-team">
                <img :src="result.homeTeam.logo" :alt="result.homeTeam.name" class="team-logo" />
                <span class="team-name">{{ result.homeTeam.name }}</span>
              </div>

              <div class="score-info">
                <div class="score">
                  <span class="home-score">{{ result.homeTeam.score }}</span>
                  <span class="separator">-</span>
                  <span class="away-score">{{ result.awayTeam.score }}</span>
                </div>
                <div class="status">Full Time</div>
              </div>

              <div class="team away-team">
                <img :src="result.awayTeam.logo" :alt="result.awayTeam.name" class="team-logo" />
                <span class="team-name">{{ result.awayTeam.name }}</span>
              </div>
            </div>

            <div class="match-footer">
              <button @click="viewMatchDetails(result.id)" class="details-btn">
                View Report
              </button>
            </div>
          </div>
        </div>

        <div v-if="recentResults.length === 0" class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="#22c55e" stroke-width="2"/>
            <path d="M3 8H21" stroke="#22c55e" stroke-width="2"/>
          </svg>
          <h4>No Recent Results</h4>
          <p>Results will appear here after matches</p>
        </div>
      </div>

      <!-- All Matches (Combined View) -->
      <div v-if="activeTab === 'all'" class="all-matches-container">
        <h3 class="section-title">All Matches</h3>
        
        <!-- Month Filter -->
        <div class="month-filter">
          <button 
            v-for="month in availableMonths" 
            :key="month"
            @click="selectedMonth = month"
            class="month-btn"
            :class="{ 'active': selectedMonth === month }"
          >
            {{ month }}
          </button>
        </div>

        <div class="timeline">
          <div v-for="match in filteredMatches" :key="match.id" class="timeline-item">
            <div class="timeline-date">
              <span class="day">{{ getDay(match.date) }}</span>
              <span class="month-day">{{ getMonthDay(match.date) }}</span>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-content">
              <div class="mini-match-card">
                <div class="mini-header">
                  <span class="competition">{{ match.competition }}</span>
                  <span v-if="match.status === 'completed'" class="mini-result" :class="getResultClass(match)">
                    {{ getResultText(match) }}
                  </span>
                  <span v-else class="time">{{ formatTime(match.date) }}</span>
                </div>
                <div class="mini-teams">
                  <div class="mini-team">
                    <img :src="match.homeTeam.logo" :alt="match.homeTeam.name" />
                    <span>{{ match.homeTeam.name }}</span>
                    <span v-if="match.status === 'completed'" class="mini-score">{{ match.homeTeam.score }}</span>
                  </div>
                  <div class="mini-team">
                    <img :src="match.awayTeam.logo" :alt="match.awayTeam.name" />
                    <span>{{ match.awayTeam.name }}</span>
                    <span v-if="match.status === 'completed'" class="mini-score">{{ match.awayTeam.score }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div v-if="hasMore" class="load-more-container">
        <button @click="loadMore" class="load-more-btn" :disabled="isLoading">
          {{ isLoading ? 'Loading...' : 'Load More Matches' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import strapiService from '@/services/strapi';

// TypeScript Interfaces
interface Team {
  name: string;
  logo: string;
  score?: number;
}

interface Match {
  id: number;
  competition: string;
  date: string;
  venue: string;
  homeTeam: Team;
  awayTeam: Team;
  status: 'upcoming' | 'completed';
}

interface StrapiMatch {
  id: number;
  attributes: {
    competition: string;
    date: string;
    venue: string;
    homeTeamName: string;
    homeTeamLogo: { data: { attributes: { url: string } } };
    homeTeamScore?: number;
    awayTeamName: string;
    awayTeamLogo: { data: { attributes: { url: string } } };
    awayTeamScore?: number;
    status: 'upcoming' | 'completed';
  };
}

// State
const activeTab = ref<'upcoming' | 'results' | 'all'>('upcoming');
const selectedMonth = ref('All');

const tabs = [
  { label: 'Upcoming Fixtures', value: 'upcoming' },
  { label: 'Recent Results', value: 'results' },
  { label: 'All Matches', value: 'all' }
];

const availableMonths = ['All', 'January', 'February', 'March', 'April', 'May', 'June'];

const upcomingFixtures = ref<Match[]>([]);
const recentResults = ref<Match[]>([]);
const isLoading = ref(false);
const hasMore = ref(false);
const errorMessage = ref('');

// Computed
const filteredMatches = computed(() => {
  const allMatches = [...upcomingFixtures.value, ...recentResults.value];
  if (selectedMonth.value === 'All') return allMatches;
  return allMatches.filter(match => {
    const matchMonth = new Date(match.date).toLocaleString('en-US', { month: 'long' });
    return matchMonth === selectedMonth.value;
  });
});

// Methods
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'short',
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
};

const getDay = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', { weekday: 'short' });
};

const getMonthDay = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const getResultClass = (match: Match): string => {
  if (match.status !== 'completed') return '';
  
  const isHome = match.homeTeam.name === 'Aztec Sports';
  const homeScore = match.homeTeam.score || 0;
  const awayScore = match.awayTeam.score || 0;
  
  if (isHome) {
    if (homeScore > awayScore) return 'win';
    if (homeScore < awayScore) return 'loss';
    return 'draw';
  } else {
    if (awayScore > homeScore) return 'win';
    if (awayScore < homeScore) return 'loss';
    return 'draw';
  }
};

const getResultText = (match: Match): string => {
  const resultClass = getResultClass(match);
  if (resultClass === 'win') return 'W';
  if (resultClass === 'loss') return 'L';
  if (resultClass === 'draw') return 'D';
  return '';
};

const viewMatchDetails = (matchId: number) => {
  console.log('View match details:', matchId);
  // TODO: Navigate to match details page
  // router.push(`/matches/${matchId}`)
};

const loadMore = async () => {
  // No pagination implemented yet; hide button
  hasMore.value = false;
};

// Fetch fixtures from Strapi
const mapMatch = (m: any): Match => ({
  id: m.id,
  competition: m.attributes.competition,
  date: m.attributes.date,
  venue: m.attributes.venue,
  homeTeam: {
    name: m.attributes.homeTeamName,
    logo: strapiService.getMediaUrl(m.attributes.homeTeamLogo) || '/Aztec.jpg',
    score: m.attributes.homeTeamScore ?? undefined,
  },
  awayTeam: {
    name: m.attributes.awayTeamName,
    logo: strapiService.getMediaUrl(m.attributes.awayTeamLogo) || '/Aztec.jpg',
    score: m.attributes.awayTeamScore ?? undefined,
  },
  status: (m.attributes.status as 'upcoming' | 'completed') || 'upcoming',
});

const fetchData = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const [upcoming, completed] = await Promise.all([
      strapiService.getMatches({ status: 'upcoming', pageSize: 10 }),
      strapiService.getMatches({ status: 'completed', pageSize: 10 }),
    ]);
    upcomingFixtures.value = upcoming.data.map(mapMatch);
    recentResults.value = completed.data.map(mapMatch);
  } catch (e) {
    console.error('Error loading matches', e);
    errorMessage.value = 'Failed to load matches.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchData);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fixtures-section {
  min-height: 100vh;
  padding: clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2.5rem);
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
}

.container {
  max-width: min(1400px, 95vw);
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3.125rem);
}

.section-header h2 {
  font-size: clamp(1.75rem, 4vw + 1rem, 2.5rem);
  font-weight: 700;
  color: #faf9f9;
  margin-bottom: 0.9375rem;
  line-height: 1.2;
}

.subtitle {
  font-size: clamp(0.875rem, 1.5vw + 0.25rem, 1.1rem);
  color: #d1d5db;
}

/* Responsive */
@media (max-width: 968px) {
  .matches-grid {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: 100px;
  }

  .timeline-date {
    left: -100px;
    width: 80px;
  }
}

@media (max-width: 968px) {
  .matches-grid {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: clamp(80px, 10vw, 100px);
  }

  .timeline-date {
    left: clamp(-100px, -10vw, -80px);
    width: clamp(70px, 8vw, 90px);
  }
}

@media (max-width: 768px) {
  .match-content {
    flex-direction: column;
    gap: clamp(0.9375rem, 2vw, 1.25rem);
  }

  .timeline {
    padding-left: 0;
    padding-top: clamp(2rem, 4vw, 2.5rem);
  }

  .timeline-date {
    position: static;
    width: 100%;
    text-align: left;
    margin-bottom: 0.625rem;
  }

  .timeline-line {
    display: none;
  }
}

@media (max-width: 480px) {
  .match-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: clamp(0.5rem, 1.5vw, 0.625rem);
  margin-bottom: clamp(2rem, 4vw, 3.125rem);
  flex-wrap: wrap;
}

.tab-button {
  padding: clamp(0.625rem, 1.5vw, 0.75rem) clamp(1.25rem, 3vw, 1.75rem);
  background: rgba(34, 197, 94, 0.1);
  color: #d1d5db;
  border: 2px solid rgba(34, 197, 94, 0.2);
  border-radius: 8px;
  font-size: clamp(0.875rem, 1.5vw + 0.25rem, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.tab-button:hover {
  border-color: #22c55e;
  color: #22c55e;
}

.tab-button.active {
  background: #22c55e;
  color: #1a1a1a;
  border-color: #22c55e;
}

.section-title {
  font-size: 1.8rem;
  color: #f3efef;
  margin-bottom: 30px;
  font-weight: 700;
}

.matches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(clamp(280px, 30vw, 380px), 1fr));
  gap: clamp(1.25rem, 2.5vw, 1.5625rem);
  margin-bottom: clamp(2rem, 4vw, 2.5rem);
}

.match-card {
  border-radius: 12px;
  padding: clamp(1.25rem, 2.5vw, 1.5625rem);
  border: 1px solid var(--card-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.match-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: #22c55e;
}

.match-card.win {
  border-color: #22c55e;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, #0d5f2e 50%, #1a1a1a 100%);
}

.match-card.draw {
  border-color: #f59e0b;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, #0d5f2e 50%, #1a1a1a 100%);
}

.match-card.loss {
  border-color: #ef4444;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, #0d5f2e 50%, #1a1a1a 100%);
}

.match-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
}

.competition {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.match-date {
  color: #9ca3af;
  font-size: 0.9rem;
}

.result-badge {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.result-badge.win {
  background: #22c55e;
  color: #1a1a1a;
}

.result-badge.draw {
  background: #f59e0b;
  color: #1a1a1a;
}

.result-badge.loss {
  background: #ef4444;
  color: #fff;
}

.match-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.team-logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px;
}

.team-name {
  color: #f3efef;
  font-weight: 600;
  text-align: center;
  font-size: 0.95rem;
}

.match-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 80px;
}

.time {
  color: #22c55e;
  font-size: 1.1rem;
  font-weight: 700;
}

.vs {
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 600;
}

.venue {
  color: #9ca3af;
  font-size: 0.8rem;
  text-align: center;
}

.score-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.score {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 2rem;
  font-weight: 700;
}

.home-score,
.away-score {
  color: #f3efef;
}

.separator {
  color: #6b7280;
}

.status {
  color: #9ca3af;
  font-size: 0.85rem;
}

.match-footer {
  text-align: center;
}

.details-btn {
  padding: 10px 24px;
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid #22c55e;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.details-btn:hover {
  background: #22c55e;
  color: #1a1a1a;
}

/* Month Filter */
.month-filter {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.month-btn {
  padding: 8px 20px;
  background: rgba(34, 197, 94, 0.1);
  color: #d1d5db;
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.month-btn:hover {
  border-color: #22c55e;
  color: #22c55e;
}

.month-btn.active {
  background: #22c55e;
  color: #1a1a1a;
  border-color: #22c55e;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 120px;
}

.timeline-item {
  display: flex;
  margin-bottom: 30px;
  position: relative;
}

.timeline-date {
  position: absolute;
  left: -120px;
  width: 90px;
  text-align: center;
}

.day {
  display: block;
  color: #9ca3af;
  font-size: 0.85rem;
  font-weight: 600;
}

.month-day {
  display: block;
  color: #22c55e;
  font-size: 1.2rem;
  font-weight: 700;
}

.timeline-line {
  position: absolute;
  left: -20px;
  top: 10px;
  width: 12px;
  height: 12px;
  background: #22c55e;
  border-radius: 50%;
  border: 3px solid #1a1a1a;
}

.timeline-line::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 12px;
  transform: translateX(-50%);
  width: 2px;
  height: 100px;
  background: rgba(34, 197, 94, 0.3);
}

.timeline-item:last-child .timeline-line::after {
  display: none;
}

.timeline-content {
  flex: 1;
}

.mini-match-card {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 10px;
  padding: 20px;
}

.mini-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.mini-result {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
}

.mini-result.win {
  background: #22c55e;
  color: #1a1a1a;
}

.mini-result.draw {
  background: #f59e0b;
  color: #1a1a1a;
}

.mini-result.loss {
  background: #ef4444;
  color: #fff;
}

.mini-teams {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mini-team {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mini-team img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px;
}

.mini-team span:nth-child(2) {
  flex: 1;
  color: #f3efef;
  font-weight: 600;
  font-size: 0.95rem;
}

.mini-score {
  color: #22c55e;
  font-weight: 700;
  font-size: 1.2rem;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-state svg {
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-state h4 {
  font-size: 1.3rem;
  color: #f3efef;
  margin-bottom: 10px;
}

.empty-state p {
  color: #9ca3af;
}

/* Load More */
.load-more-container {
  text-align: center;
  margin-top: 40px;
}

.load-more-btn {
  padding: 14px 32px;
  background: #22c55e;
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.load-more-btn:hover:not(:disabled) {
  background: #16a34a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.load-more-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>