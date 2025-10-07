<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Fixtures from './components/Fixtures.vue'
import Announcements from './components/Announcements.vue'
import Membership from './components/Membership.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="app-container">
    <Navbar />
    
    <main class="main-content">
      <Home />
      <About />
      <Fixtures />
      <Announcements />
      <Membership />
      <Contact />
    </main>

    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #f5f5f5;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-top: 65px; /* Height of fixed navbar */
}
</style>