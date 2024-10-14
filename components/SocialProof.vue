<script setup lang="ts">
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

interface Statistic {
  value: string;
  label: string;
}

interface Accreditation {
  id: number;
  name: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Cette formation a transformé ma carrière. Les compétences que j'ai acquises m'ont permis de décrocher le poste de mes rêves.",
    name: "Marie Durand",
    position: "Développeuse Full Stack",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    quote:
      "L'approche pratique et le niveau d'expertise des formateurs sont incomparables. Je me sens prêt à relever tous les défis.",
    name: "Thomas Martin",
    position: "Data Scientist",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    quote: "Une expérience d'apprentissage incroyable. J'ai acquis des compétences que je peux immédiatement appliquer dans mon travail.",
    name: "Sophie Legrand",
    position: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    quote: "Les workshops intensifs m'ont permis de monter rapidement en compétence. Une formation qui vaut vraiment le coup !",
    name: "Lucas Dubois",
    position: "DevOps Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    quote: "J'ai adoré l'approche hands-on. Les projets concrets m'ont aidé à mieux comprendre et appliquer les concepts.",
    name: "Emma Petit",
    position: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    quote: "Une formation qui m'a ouvert de nouvelles perspectives de carrière. Je recommande vivement !",
    name: "Alexandre Martin",
    position: "Backend Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const statistics = [
  { value: "12", label: "Mois d'accès exclusif" },
  { value: "200h+", label: "De formation proposée" },
  { value: "80%", label: "Projets pratiques" }
];

const accreditations: Accreditation[] = [
  { id: 1, name: "Accréditation 1", logo: "/api/placeholder/100/32" },
  { id: 2, name: "Accréditation 2", logo: "/api/placeholder/100/32" },
  { id: 3, name: "Accréditation 3", logo: "/api/placeholder/100/32" },
];
</script>

<template>
  <section class="bg-punk-gradient text-gray-100 p-4 sm:p-8 my-12">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-center items-center">
        <h2
					v-scroll-animation
          class="font-bold mb-6 text-center py-1.5 px-4 border-2 border-gray-700 bg-gray-800 rounded"
        >
          Ce que disent nos étudiants
        </h2>
      </div>
      <div class="flex justify-center items-center">
        <p v-scroll-animation class="text-5xl text-grotesk font-bold mb-8 sm:mb-16 text-center">
          Ce sont eux qui en parlent le mieux.
        </p>
      </div>

      <!-- Témoignages -->
      <Suspense>
        <template #default>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16"
          >
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              class="bg-punk-surface rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div class="p-6 sm:p-8">
                <p class="text-base sm:text-lg text-gray-300 italic mb-6">
                  "{{ testimonial.quote }}"
                </p>
                <div class="flex items-center">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.name"
                    class="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-100">
                      {{ testimonial.name }}
                    </h4>
                    <p class="text-sm text-gray-400">
                      {{ testimonial.position }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              ></div>
            </div>
          </div>
        </template>
        <template #fallback>
          <div
            class="bg-punk-surface rounded-lg shadow-md p-6 sm:p-8 mb-8 sm:mb-16"
          >
            <p>Chargement...</p>
          </div>
        </template>
      </Suspense>

      <!-- Statistiques -->
      <div
        class="bg-punk-surface rounded-lg shadow-md p-6 sm:p-8 mb-8 sm:mb-16"
      >
        <h3
          class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-100"
        >
          Nos Résultats
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="stat in statistics" :key="stat.label" class="text-center">
            <div
              class="text-3xl sm:text-4xl font-bold text-blue-400 mb-2"
            >
              {{ stat.value }}
            </div>
            <div class="text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
