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
  padding: 60px 20px;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 80px;
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero-content h1 {
  font-size: 3em;
  color: #faf9f9;
  margin-bottom: 10px;
  font-weight: bold;
}

.subtitle {
  font-size: 1.5em;
  color: #22c55e;
  margin-bottom: 20px;
}

.hero-image {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  height: 300px;
}

/* Mission & Vision */
.mission-vision {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;
}

.mission,
.vision {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mission h2,
.vision h2 {
  font-size: 2em;
  color: #3ec708;
  margin-bottom: 20px;
  border-bottom: 3px solid #22c55e;
  padding-bottom: 10px;
}

.mission p,
.vision p {
  font-size: 1.1em;
  color: #f7f8f7;
  line-height: 1.8;
}

/* Values Section */
.values-section {
  margin-bottom: 80px;
}

.values-section h2 {
  font-size: 2.5em;
  color: #f1eeee;
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: 30px;
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
  font-size: 3em;
  margin-bottom: 15px;
}

.value-card h3 {
  font-size: 1.5em;
  color: #06f025;
  margin-bottom: 10px;
}

.value-card p {
  color: #f7f3f3;
  line-height: 1.6;
}

/* Team Section */
.team-section {
  margin-bottom: 80px;
}

.team-section h2 {
  font-size: 2.5em;
  color: #f2f3f2;
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
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
  height: 250px;
  object-fit: cover;
}

.team-card h3 {
  font-size: 1.3em;
  color: #f3efef;
  margin: 20px 0 5px;
}

.team-card p {
  color: #22c55e;
  padding-bottom: 20px;
  font-weight: 500;
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  background: linear-gradient(135deg, #0d5f2e 0%, #1a1a1a 100%);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: 2.5em;
  color: #22c55e;
  font-weight: bold;
  margin-bottom: 10px;
}

.stat-card p {
  color: #f1efef;
  font-size: 1.1em;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section,
  .mission-vision {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 2em;
  }

  .subtitle {
    font-size: 1.2em;
  }

  .values-section h2,
  .team-section h2 {
    font-size: 2em;
  }
}
</style>