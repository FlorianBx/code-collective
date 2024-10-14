<script setup lang="ts">
import { GraduationCap, Users, BookOpen, ShieldCheck } from "lucide-vue-next";

interface Advantage {
  title: string;
  description: string;
  icon: any;
}

const advantages: Advantage[] = [
  {
    title: "Formation Accélérée",
    description:
      "Programmes intensifs de 2 à 3 jours pour une acquisition rapide des compétences clés les plus demandées sur le marché.",
    icon: GraduationCap,
  },
  {
    title: "Collaboratif",
    description:
      "Petits groupes favorisant les échanges, la pratique intensive et un suivi personnalisé pour une expérience d'apprentissage optimale.",
    icon: Users,
  },
  {
    title: "Expertise technique",
    description:
      "Formateurs alliant rigueur académique et expérience pratique, apportant les dernières avancées du domaine et des cas concrets.",
    icon: BookOpen,
  },
];
</script>

<template>
  <section class="bg-punk-gradient text-gray-100 p-4 sm:p-8 my-24">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
        <span class="text-5xl text-grotesk font-bold mb-4 text-center">
          Pourquoi choisir Code Collective ?
        </span>
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <div
          v-for="(advantage, index) in advantages"
          :key="index"
          class="relative bg-punk-surface rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-blue-400"></div>
          <div class="p-6 sm:p-8">
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-all duration-300"
            >
              <component
                :is="advantage.icon"
                class="w-6 h-6 sm:w-8 sm:h-8 text-blue-400"
              />
            </div>
            <h3
              class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-100"
            >
              {{ advantage.title }}
            </h3>
            <p
              class="text-gray-300 group-hover:text-gray-100 transition-colors duration-300"
            >
              {{ advantage.description }}
            </p>
          </div>
          <div
            class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          ></div>
        </div>
      </div>
      <div
        class="relative group overflow-hidden mt-64 sm:mt-12 bg-punk-surface p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-400"
      >
        <h3
          class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center text-gray-100"
        >
          <ShieldCheck
            class="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-blue-400"
          />
          Notre Engagement
        </h3>
        <p class="text-base sm:text-lg text-gray-300">
          Nous anticipons vos préoccupations et y répondons de manière
          proactive, garantissant ainsi une expérience d'apprentissage optimale.
          Notre approche pédagogique est conçue pour assurer votre réussite et
          votre satisfaction tout au long de votre parcours de formation.
        </p>
        <div
          class="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
        ></div>
      </div>
    </div>
  </section>
</template>
