<template>
 <div class="bg-black text-white font-poppins">
    <!-- HERO SECTION -->
    <section
      class="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style="background-image: url('/pictures/Aztec.jpg');"
    >
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <div class="relative z-10 px-4">
        <h1
          class="text-4xl md:text-6xl font-bold text-green-500 mb-4 animate-fade-in"
        >
          Welcome to Aztec Sports
        </h1>
        <p class="text-lg md:text-xl text-gray-200 mb-8 animate-slide-up">
          Building unity, discipline, and excellence through football.
        </p>
        <div class="space-x-4">
          <a
            href="/membership"
            class="bg-green-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition"
            >Join Our Team</a
          >
          <a
            href="/about"
            class="border border-green-500 px-6 py-3 rounded-full hover:bg-green-500 hover:text-black transition"
            >Learn More</a
          >
        </div>
      </div>
    </section>

    <!-- ABOUT PREVIEW -->
    <section class="py-20 px-6 md:px-20 text-center bg-gray-900">
      <h2 class="text-3xl md:text-4xl font-bold text-green-500 mb-6">
        About Aztec Sports
      </h2>
      <p class="max-w-3xl mx-auto text-gray-300 mb-8">
        Aztec Sports is a community centered football club dedicated to
        developing young, talented players through teamwork, discipline, and
        mentorship. We empower athletes to excel both on and off the field.
      </p>
      <a
        href="/about"
        class="text-green-500 font-semibold border border-green-500 px-6 py-2 rounded-full hover:bg-green-500 hover:text-black transition"
        >Read More</a
      >
    </section>

    <!-- FIXTURES & RESULTS -->
    <section class="py-20 px-6 md:px-20 bg-black text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-green-500 mb-10">
        Latest Fixtures & Results
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="match in fixtures"
          :key="match.id"
          class="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition"
        >
          <h3 class="text-xl font-semibold text-green-400 mb-2">
            {{ match.opponent }}
          </h3>
          <p class="text-gray-400">{{ match.date }} | {{ match.location }}</p>
          <p v-if="match.score" class="text-white mt-2 font-bold">
            Score: {{ match.score }}
          </p>
        </div>
      </div>
    </section>

    <!-- ANNOUNCEMENTS -->
    <section class="py-20 px-6 md:px-20 bg-gray-900 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-green-500 mb-10">
        Club Announcements
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="news in announcements"
          :key="news.id"
          class="bg-black p-6 rounded-xl border border-gray-800 hover:border-green-500 transition"
        >
          <img
            :src="news.image"
            alt="announcement"
            class="rounded-lg mb-4 h-40 w-full object-cover"
          />
          <h3 class="text-xl font-semibold mb-2">{{ news.title }}</h3>
          <p class="text-gray-400 mb-4">{{ news.summary }}</p>
          <a
            href="/announcements"
            class="text-green-500 hover:underline hover:text-green-400"
            >Read More →</a
          >
        </div>
      </div>
    </section>

    <!-- MEMBERSHIP CTA -->
    <section
      class="py-20 px-6 md:px-20 text-center bg-green-500 text-black flex flex-col items-center justify-center"
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Become part of the Aztec Sports family — join us today!
      </h2>
      <a
        href="/membership"
        class="bg-black text-green-500 font-semibold px-8 py-3 rounded-full hover:bg-gray-900 transition"
        >Register Now</a
      >
    </section>

    <!-- CONTACT & NEWSLETTER -->
    <section class="py-20 px-6 md:px-20 bg-gray-900 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-green-500 mb-6">
        Stay Connected
      </h2>
      <p class="text-gray-300 mb-6">
        Stay updated with the latest news, fixtures, and community events.
      </p>
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-4 max-w-lg mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          class="w-full md:w-2/3 p-3 rounded-lg text-black"
        />
        <button
          class="bg-green-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Subscribe
        </button>
      </div>
    </section>

    <!-- FOOTER -->
    <footer
      class="bg-black text-gray-400 py-10 px-6 md:px-20 text-center border-t border-gray-800"
    >
      <div class="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
        <a href="/" class="hover:text-green-500 transition">Home</a>
        <a href="/about" class="hover:text-green-500 transition">About</a>
        <a href="/fixtures" class="hover:text-green-500 transition">Fixtures</a>
        <a href="/membership" class="hover:text-green-500 transition"
          >Membership</a
        >
        <a href="/contact" class="hover:text-green-500 transition">Contact</a>
      </div>
      <p class="text-sm">
        © 2025 Aztec Sports. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fixtures = ref([
  {
    id: 1,
    opponent: "Falcons FC",
    date: "Oct 14, 2025 - 4:00 PM",
    location: "Jafferys Sports Club ",
    score: "2 - 1",
  },
  {
    id: 2,
    opponent: "Blue Warriors",
    date: "Oct 21, 2025 - 3:30 PM",
    location: "Saifee Park",
  },
  {
    id: 3,
    opponent: "Bright ball",
    date: "Oct 28, 2025 - 5:00 PM",
    location: "Parkland Sports Club",
  },
]);

const announcements = ref([
  {
    id: 1,
    image: "/images/training.jpg",
    title: "Pre-season Training Begins",
    summary:
      "Our pre-season training sessions kick off next week. All players are expected to attend.",
  },
  {
    id: 2,
    image: "/images/community.jpg",
    title: "Community Outreach Program",
    summary:
      "Aztec Sports will be hosting a football clinic for young players in collaboration with local schools.",
  },
  {
    id: 3,
    image: "/images/kit-launch.jpg",
    title: "New Kit Launch 2025",
    summary:
      "Check out our brand-new home and away kits for the 2025 season — available soon!",
  },
]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease forwards;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 1.2s ease forwards;
}
</style>
