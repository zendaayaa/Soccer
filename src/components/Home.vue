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
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/Aztec.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  color: #fff;
  padding: clamp(1.25rem, 4vw, 2.5rem);
  text-align: center;
}

.home-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(clamp(400px, 50vw, 800px) clamp(200px, 25vw, 400px) at 20% 20%, rgba(34,197,94,0.10) 0%, transparent 60%),
              radial-gradient(clamp(400px, 50vw, 800px) clamp(200px, 25vw, 400px) at 80% 20%, rgba(34,197,94,0.08) 0%, transparent 60%),
              linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(26, 26, 26, 0.8) 100%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: min(800px, 90vw);
  width: 100%;
}

.hero-title {
  font-size: clamp(2rem, 5vw + 1rem, 3.5rem);
  font-weight: 700;
  margin-bottom: clamp(1rem, 2vw, 1.25rem);
  background: linear-gradient(90deg, #00A86B, #00ff9f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.shimmer {
  background-size: 200% 100%;
  animation: shimmer 6s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem);
  color: #b0b0b0;
  margin-bottom: clamp(2rem, 4vw, 2.5rem);
  line-height: 1.5;
}

.cta-button {
  border-radius: 999px;
}

@media (max-width: 480px) {
  .home-section {
    background-attachment: scroll;
  }
}
</style>