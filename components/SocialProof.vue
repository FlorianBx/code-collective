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
    avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    quote:
      "L'approche pratique et le niveau d'expertise des formateurs sont incomparables. Je me sens prêt à relever tous les défis.",
    name: "Thomas Martin",
    position: "Data Scientist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const statistics: Statistic[] = [
  { value: "98%", label: "Taux de satisfaction" },
  { value: "85%", label: "Taux d'embauche post-formation" },
  { value: "15k+", label: "Diplômés" },
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
      <h2 class="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
        >
          CE QUE DISENT NOS ETUDIANTS
        </span>
      </h2>

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
              class="text-3xl sm:text-4xl font-bold text-punk-secondary mb-2"
            >
              {{ stat.value }}
            </div>
            <div class="text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Accréditations -->
      <div class="bg-punk-surface rounded-lg shadow-md p-6 sm:p-8">
        <h3
          class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-punk-primary"
        >
          Nos Accréditations
        </h3>
        <div class="flex flex-wrap justify-center gap-6 sm:gap-8">
          <img
            v-for="accreditation in accreditations"
            :key="accreditation.id"
            :src="accreditation.logo"
            :alt="accreditation.name"
            class="h-12 sm:h-16 brightness-75 hover:brightness-100 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>
