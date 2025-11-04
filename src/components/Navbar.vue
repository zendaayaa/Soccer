<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="logo">Aztec United</div>
    <div class="menu-icon" @click="toggleMenu">
      <span v-if="!menuOpen">&#9776;</span>
      <span v-else>&times;</span>
    </div>
    <ul :class="['nav-links', { open: menuOpen }]">
      <li><a :class="{ active: activeHash === '#home' }" href="#home">Home</a></li>
      <li><a :class="{ active: activeHash === '#about' }" href="#about">About</a></li>
      <li><a :class="{ active: activeHash === '#fixtures' }" href="#fixtures">Fixtures</a></li>
      <li><a :class="{ active: activeHash === '#announcements' }" href="#announcements">Announcements</a></li>
      <li><a :class="{ active: activeHash === '#membership' }" href="#membership">Membership</a></li>
      <li><a :class="{ active: activeHash === '#contact' }" href="#contact">Contact</a></li>
    </ul>
  </nav>
 </template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menuOpen = ref(false);
const scrolled = ref(false);
const activeHash = ref<string>(window.location.hash || '#home');

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const onScroll = () => {
  scrolled.value = window.scrollY > 6;
};

const onHashChange = () => {
  activeHash.value = window.location.hash || '#home';
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('hashchange', onHashChange);
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('hashchange', onHashChange);
});
</script>

<style scoped>
.navbar {
  background-color: rgba(0,0,0,0.55);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(34,197,94,0.15);
}

.navbar.scrolled {
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: #00A86B;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  position: relative;
  transition: color 0.3s;
}

.nav-links a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: #00A86B;
  left: 0;
  bottom: -4px;
  transition: width 0.3s;
}

.nav-links a:hover { color: #00A86B; }
.nav-links a.active { color: #22c55e; }

.nav-links a:hover::after {
  width: 100%;
}

.menu-icon {
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 65px;
    right: 0;
    background-color: rgba(0,0,0,0.85);
    flex-direction: column;
    width: 100%;
    text-align: center;
    display: none;
    padding: 20px 0;
  }
  
  .nav-links.open {
    display: flex;
  }
  
  .nav-links li {
    padding: 10px 0;
  }
  
  .menu-icon {
    display: block;
  }
}
</style>