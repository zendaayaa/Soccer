<template>
  <section id="home" class="home-section">
    <div class="hero-content">
      <h1 class="hero-title shimmer">Welcome to Aztec Sports</h1>
      <p class="hero-subtitle">Where passion meets excellence on the field</p>
      <button class="cta-button btn-primary" @click="scrollTo('#membership')">Join Our Team</button>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollTo = (hash: string) => {
  const el = document.querySelector(hash);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<style scoped>
.home-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(800px 400px at 20% 20%, rgba(34,197,94,0.10) 0%, transparent 60%),
              radial-gradient(800px 400px at 80% 20%, rgba(34,197,94,0.08) 0%, transparent 60%),
              linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: #fff;
  padding: 20px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #00A86B, #00ff9f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.shimmer {
  background-size: 200% 100%;
  animation: shimmer 6s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #b0b0b0;
  margin-bottom: 40px;
}

.cta-button { border-radius: 999px; }

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>