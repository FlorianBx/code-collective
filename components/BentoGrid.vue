<script setup lang="ts">
const mail = useMail();
const email = ref("");

const sendEmail = async () => {
  if (!email.value) {
    console.error("Veuillez entrer une adresse e-mail valide.");
    return;
  }

  try {
    await mail.send({
      to: email.value,
      subject: "[New User] Code Collective",
      text: `New user (${email.value}) has registered to the workshop.`,
    });
    console.log("Email envoyé avec succès");
    email.value = "";
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
  }
};

const workshopItems = [
  "2 à 3 jours pour maîtriser les compétences clés",
  "Petits groupes, pratique intensive",
  "Formateurs experts du terrain",
];

const reviewTags = [
  "Architecture",
  "Git",
  "Accessibilité",
  "Tests unitaires",
  "Tests d'intégration",
  "Dev tools",
  "Maîtrise d'IDE",
  "TailwindCSS",
];
</script>

<template>
  <div class="bg-punk-gradient text-gray-100">
    <div class="max-w-7xl mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-5 grid-rows-[auto,auto,auto,auto] sm:grid-rows-[auto,auto,auto] gap-4 sm:gap-6"
      >
        <!-- Hero Section -->
        <div
          class="bg-punk-surface p-6 sm:p-8 rounded-lg order-1 row-span-2 sm:row-span-3 md:col-span-3 flex flex-col justify-between"
        >
          <div>
            <div class="text-sm text-blue-400 mt-1">
              <span class="font-mono">// Workshops et formations</span>
            </div>
            <h1
              class="text-3xl sm:text-5xl lg:text-6xl font-bold font-grotesk leading-loose mt-[30px] mb-[15px]"
            >
              FORMEZ-VOUS, DEMARQUEZ-VOUS
            </h1>
            <p class="text-punk-primary mb-8 leading-relaxed">
              Maîtrisez les
              <Stabilo color="blue">
                <strong>compétences clés</strong>
              </Stabilo>
							du développement front-end <strong>javascript</strong>, et gagnez en
              <Stabilo color="blue"> <strong>confiance</strong></Stabilo>
							pour vous aider à trouver le job de vos rêves !
            </p>
          </div>
          <div class="flex flex-col gap-4 mt-4">
            <input
              v-model="email"
              type="email"
              class="w-full h-12 placeholder:text-base sm:h-14 px-4 sm:px-6 py-2 sm:py-3 text-sm text-gray-200 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              placeholder="Votre email"
            />
            <button
              @click="sendEmail"
              class="w-full border-2 border-blue-400 bg-transparent py-3 sm:py-4 px-4 sm:px-6 hover:bg-gray-800 text-white uppercase rounded transition duration-300 text-center font-grotesk text-sm sm:text-base font-semibold"
            >
              Participer à un workshop
            </button>
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

        <!-- Tags Section -->
        <div
          class="bg-punk-surface p-6 rounded-lg order-3 md:order-4 md:col-span-3 row-span-2"
        >
          <div
            class="text-4xl md:text-5xl font-bold text-blue-400 font-grotesk"
          >
            8+ tracks
          </div>
          <div class="text-sm mb-4 text-gray-400">
            Workshops actuellement disponibles
          </div>
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

        <!-- Workshops Section -->
        <div
          class="bg-punk-surface p-6 rounded-lg order-3 md:order-4 md:col-span-2 row-span-2"
        >
          <h2 class="font-bold text-2xl sm:text-3xl mb-4 text-blue-400">
            WORKSHOPS
          </h2>
          <ul class="space-y-2">
            <li
              v-for="item in workshopItems"
              :key="item"
              class="flex items-center gap-2"
            >
							<span class="w-6 h-6 flex items-center">
              <LucideCircleCheckBig class="text-blue-400" />
								</span>
              <span class="text-gray-300">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
