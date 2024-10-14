<script setup lang="ts">
const teamMembers = [
  {
    name: "Elise Patrikainen",
    role: "Experte en Développement Web Full-Stack",
    bio: "Elise excelle dans la création d'applications web performantes et guide nos participants vers l'excellence technique avec passion.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQE64WR4L3onEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711908758071?e=1734566400&v=beta&t=-c3Q-Eq28_HGAB4lxqVliUy8Z5ls1TZIVaIn3REsZps",
    socials: [
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
    ],
  },
  {
    name: "Florian Beaumont",
    role: "Développeur front-end passionné",
    bio: "Florian apporte son expertise en conception de systèmes robustes et transforme des concepts complexes en enseignements accessibles.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQEWzb2EhoGTyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696890004250?e=1734566400&v=beta&t=MuzDE2ChXPA2YS1F8la4kIqmv-grMe8a6Inwd3j2SgA",
    socials: [
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
    ],
  },
];
</script>

<template>
  <section class="py-12 mt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 v-scroll-animation class="text-5xl font-bold text-center text-white mb-4">
        Notre Équipe
      </h2>
      <p v-scroll-animation class="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto">
        Découvrez les experts passionnés derrière Code Collective, dédiés à
        offrir une formation de pointe en développement web.
      </p>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="bg-punk-surface rounded-lg overflow-hidden shadow-lg p-6"
        >
          <div class="flex items-center mb-6">
            <div class="relative w-32 h-32 mr-6 transform transition duration-200 ease-in-out hover:rotate-6 hover:-translate-y-1">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover rounded-xl"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-punk-surface via-transparent to-transparent rounded-xl"
              ></div>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-white">
                {{ member.name }}
              </h3>
              <p class="text-blue-400">{{ member.role }}</p>
            </div>
          </div>
          <p class="text-gray-300 mb-6">{{ member.bio }}</p>
          <div class="flex justify-end gap-4 mt-8">
            <a
              :href="member.twitter"
              class="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300"
            >
              <LucideTwitter class="w-6 h-6" />
            </a>
            <a
              :href="member.linkedin"
              class="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300"
            >
              <LucideLinkedin class="w-6 h-6" />
            </a>
            <a
              :href="member.github"
              class="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300"
            >
              <LucideGithub class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

