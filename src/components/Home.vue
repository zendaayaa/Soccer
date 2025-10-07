<template>
  <section id="home" class="home-section">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to Aztec United</h1>
      <p class="hero-subtitle">Where passion meets excellence on the field</p>
      <button class="cta-button">Join Our Team</button>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
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

.hero-subtitle {
  font-size: 1.5rem;
  color: #b0b0b0;
  margin-bottom: 40px;
}

.cta-button {
  background-color: #00A86B;
  color: #fff;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Poppins', sans-serif;
}

.cta-button:hover {
  background-color: #00ff9f;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 168, 107, 0.3);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>