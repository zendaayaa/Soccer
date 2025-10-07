<template>
  <nav class="navbar">
    <div class="logo">Aztec United</div>
    <div class="menu-icon" @click="toggleMenu">
      <span v-if="!menuOpen">&#9776;</span>
      <span v-else>&times;</span>
    </div>
    <ul :class="['nav-links', { open: menuOpen }]">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#fixtures">Fixtures</a></li>
      <li><a href="#announcements">Announcements</a></li>
      <li><a href="#membership">Membership</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.navbar {
  background-color: #000;
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

.nav-links a:hover {
  color: #00A86B;
}

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
    background-color: #000;
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