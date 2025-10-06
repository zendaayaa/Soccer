<template>
  <nav class="bg-black px-6 py-4 shadow-lg">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo and Brand -->
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <span class="text-black font-bold text-xl">AU</span>
        </div>
        <h1 class="text-2xl font-bold text-white">
          Aztec United
        </h1>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <a
          v-for="link in navLinks"
          :key="link"
          :href="`#${link.toLowerCase()}`"
          @click="activeLink = link"
          :class="[
            'text-lg font-medium transition-colors duration-200 hover:text-green-400',
            activeLink === link ? 'text-green-500' : 'text-green-500'
          ]"
        >
          {{ link }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden text-green-500 hover:text-green-400"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden mt-4 space-y-2">
      <a
        v-for="link in navLinks"
        :key="link"
        :href="`#${link.toLowerCase()}`"
        @click="activeLink = link; mobileMenuOpen = false"
        class="block text-green-500 hover:text-green-400 py-2 px-4 rounded transition-colors duration-200"
      >
        {{ link }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AztecNavbar',
  data() {
    return {
      activeLink: 'Home',
      mobileMenuOpen: false,
      navLinks: [
        'Home',
        'About',
        'Fixtures',
        'Announcements',
        'Membership',
        'Contact'
      ]
    }
  }
}
</script>

<style scoped>
/* Add any additional custom styles here if needed */
/* This component uses Tailwind CSS classes for styling */
</style>