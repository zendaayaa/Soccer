<template>
  <section id="about" class="about-section">
    <div class="container">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1>{{ aboutData.title }}</h1>
          <p class="subtitle">{{ aboutData.subtitle }}</p>
        </div>
        <img :src="aboutData.heroImage" :alt="aboutData.title" class="hero-image" />
      </div>

      <!-- Mission & Vision -->
      <div class="mission-vision">
        <div class="mission">
          <h2>Our Mission</h2>
          <p>{{ aboutData.mission }}</p>
        </div>
        <div class="vision">
          <h2>Our Vision</h2>
          <p>{{ aboutData.vision }}</p>
        </div>
      </div>

      <!-- Core Values -->
      <div class="values-section">
        <h2>Core Values</h2>
        <div class="values-grid">
          <div v-for="value in aboutData.values" :key="value.title" class="value-card">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="team-section">
        <h2>Meet Our Team</h2>
        <div class="team-grid">
          <div v-for="member in aboutData.team" :key="member.name" class="team-card">
            <img :src="member.image" :alt="member.name" class="team-image" />
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="stats-section">
        <div v-for="stat in aboutData.stats" :key="stat.label" class="stat-card">
          <div class="stat-number">{{ stat.number }}</div>
          <p>{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      aboutData: {
        title: 'About Aztec Sports',
        subtitle: 'Where Champions Are Built',
        heroImage: '/Aztec.jpg',
        mission: 'At Aztec Sports, our mission is to develop skilled, disciplined and confident players through quality training and teamwork.',
        vision: 'Our vision is to create a united football community where every player has the opportunity to grow, learn and thrive.',
        values: [
          {
            icon: '🏆',
            title: 'Excellence',
            description: 'Striving for the highest standards in athletic achievement and performance.'
          },
          {
            icon: '👥',
            title: 'Community',
            description: 'Building a supportive environment where athletes thrive together.'
          },
          {
            icon: '🎯',
            title: 'Dedication',
            description: 'Committed to the continuous development and growth of our athletes.'
          },
          {
            icon: '❤️',
            title: 'Passion',
            description: 'Fueled by a deep love for sports and the competitive spirit.'
          }
        ],
        team: [
          {
            name: 'Yumna Fauz',
            role: 'Director of Aztec',
            image: '/Yumna.jpg'
          },
          {
            name: 'Abdo Gamal',
            role: 'Head Coach',
            image: '/Gamal.jpg'
          },
          {
            name: 'Mhammad Rakib',
            role: 'Coaching Assistant',
            image: '/Rakib.jpg'
          }
        ],
        stats: [
          {
            number: '100+',
            label: 'Active Athletes'
          },
          {
            number: '17+',
            label: 'Championships Won'
          },
          {
            number: '6',
            label: 'Years of Excellence'
          },
          {
            number: '98%',
            label: 'Athlete Satisfaction'
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-section {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2.5rem);
  min-height: 100vh;
}

.container {
  max-width: min(1200px, 95vw);
  margin: 0 auto;
}

.hero-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(2rem, 4vw, 2.5rem);
  align-items: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: clamp(2rem, 4vw, 2.5rem);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero-content h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 3rem);
  color: #faf9f9;
  margin-bottom: 0.625rem;
  font-weight: 700;
  line-height: 1.2;
}

.subtitle {
  font-size: clamp(1.125rem, 2vw + 0.5rem, 1.5rem);
  color: #22c55e;
  margin-bottom: 1.25rem;
}

.hero-image {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  height: clamp(200px, 30vw, 300px);
  aspect-ratio: 16/9;
}

.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.mission,
.vision {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: clamp(2rem, 4vw, 2.5rem);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mission h2,
.vision h2 {
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2rem);
  color: #3ec708;
  margin-bottom: 1.25rem;
  border-bottom: 3px solid #22c55e;
  padding-bottom: 0.625rem;
}

.mission p,
.vision p {
  font-size: clamp(1rem, 1.5vw + 0.5rem, 1.1rem);
  color: #f7f8f7;
  line-height: 1.8;
}

.values-section {
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.values-section h2 {
  font-size: clamp(1.75rem, 4vw + 1rem, 2.5rem);
  color: #f1eeee;
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3.125rem);
  font-weight: 700;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 25vw, 250px), 1fr));
  gap: clamp(1.5rem, 3vw, 1.875rem);
}

.value-card {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: clamp(1.5rem, 3vw, 1.875rem);
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.value-icon {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 0.9375rem;
}

.value-card h3 {
  font-size: clamp(1.125rem, 2vw + 0.5rem, 1.5rem);
  color: #06f025;
  margin-bottom: 0.625rem;
}

.value-card p {
  color: #f7f3f3;
  line-height: 1.6;
  font-size: clamp(0.875rem, 1.5vw + 0.25rem, 1rem);
}

.team-section {
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.team-section h2 {
  font-size: clamp(1.75rem, 4vw + 1rem, 2.5rem);
  color: #f2f3f2;
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3.125rem);
  font-weight: 700;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(250px, 30vw, 280px), 1fr));
  gap: clamp(1.5rem, 3vw, 1.875rem);
}

.team-card { 
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
}

.team-image {
  width: 100%;
  height: clamp(200px, 25vw, 250px);
  object-fit: cover;
}

.team-card h3 {
  font-size: clamp(1.125rem, 2vw + 0.5rem, 1.3rem);
  color: #f3efef;
  margin: clamp(1rem, 2vw, 1.25rem) 0 0.3125rem;
}

.team-card p {
  color: #22c55e;
  padding-bottom: clamp(1rem, 2vw, 1.25rem);
  font-weight: 500;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 20vw, 200px), 1fr));
  gap: clamp(1.5rem, 3vw, 1.875rem);
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: clamp(2rem, 4vw, 2.5rem);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: clamp(1.75rem, 3vw + 1rem, 2.5rem);
  color: #22c55e;
  font-weight: 700;
  margin-bottom: 0.625rem;
}

.stat-card p {
  color: #f1efef;
  font-size: clamp(0.875rem, 1.5vw + 0.25rem, 1.1rem);
}
</style>