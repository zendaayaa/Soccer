<template>
  <div class="app-container">
    <main class="main-content">
      <Home />
      <About />
      <Fixtures />
      <Announcements />
      <Membership />
      <Contact />
    </main>
  </div>
</template>

<script setup lang="ts">
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Fixtures from '@/components/Fixtures.vue';
import Announcements from '@/components/Announcements.vue';
import Membership from '@/components/Membership.vue';
import Contact from '@/components/Contact.vue';
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-top: 65px;
}
</style>

