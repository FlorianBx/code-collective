<script setup lang="ts">
const workshopItems = [
  "2 à 3 jours pour maîtriser des compétences clés",
  "Petits groupes, pratique intensive",
  "Formateurs experts du terrain",
];

const reviewTags = [
  "Tests Unitaires",
  "Git",
  "Console de Debug",
  "Maîtrise d'IDE",
  "TailwindCSS",
];
</script>

<template>
  <div class="bg-punk-gradient text-gray-100 p-4 sm:p-8 my-12">
    <div class="max-w-7xl mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-5 grid-rows-[auto,auto,auto,auto] sm:grid-rows-[auto,auto,auto] gap-4 sm:gap-6"
      >
        <!-- Hero Section -->
        <div
          class="bg-punk-surface p-6 sm:p-8 rounded-lg order-1 row-span-2 sm:row-span-3 md:col-span-3 flex flex-col justify-between"
        >
          <div>
            <div class="text-sm mb-2 text-blue-400">lorem ipsum</div>
            <h1
              class="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 font-grotesk"
            >
              <span class="text-punk-primary font-grotesk">
                FORMEZ-VOUS, DEMARQUEZ-VOUS
              </span>
            </h1>
            <p class="text-punk-primary mb-8">
              Maîtrisez les compétences clés du marché et gagnez en confiance :
              98% de nos participants se démarquent en entretien
            </p>
          </div>
          <div class="flex flex-col gap-4 mt-4">
            <input
              type="email"
              class="w-full h-12 sm:h-14 px-4 sm:px-6 py-2 sm:py-3 text-sm text-gray-900 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Votre email"
            />
            <NuxtLink href="#" class="w-full py-3 sm:py-4 px-4 sm:px-6 bg-blue-600 hover:bg-blue-700 text-white rounded transition duration-300 text-center text-sm sm:text-base font-semibold">
              Participer à un workshop
            </NuxtLink>
          </div>
        </div>

        <!-- Image Section -->
        <div
          class="rounded-lg bg-[url('/image.webp')] flex items-end h-64 md:h-auto overflow-hidden order-2 md:col-span-2 row-span-3"
          style="background-size: cover; background-position: center"
        >
          <div
            class="w-full h-full bg-gradient-to-b from-transparent to-black/60"
          ></div>
        </div>

        <!-- Workshops Section -->
        <div
          class="bg-punk-surface p-6 rounded-lg flex order-4 md:order-3 md:col-span-3 row-span-2"
        >
          <div>
            <h2 class="font-bold text-2xl sm:text-3xl mb-4 text-blue-400">
              WORKSHOPS INTENSIFS
            </h2>
            <ul class="space-y-2">
              <li
                v-for="item in workshopItems"
                :key="item"
                class="flex items-center gap-2"
              >
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span class="text-gray-300">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Reviews Section -->
        <div
          class="bg-punk-surface p-6 rounded-lg order-3 md:order-4 md:col-span-2 row-span-2"
        >
          <div class="text-4xl md:text-5xl font-bold text-blue-400">4.98</div>
          <div class="text-sm mb-4 text-gray-400">BASED ON 619 REVIEWS</div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in reviewTags"
              :key="tag"
              class="bg-gray-700 px-3 py-1 rounded-full text-xs md:text-sm text-gray-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
