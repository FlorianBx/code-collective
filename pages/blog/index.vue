<script setup lang="ts">
const { data: articles } = await useAsyncData("articles", () =>
  queryContent("blog").find(),
);

// Assurez-vous d'avoir ces imports si vous utilisez des components Lucide
import { Calendar, User } from "lucide-vue-next";
</script>

<template>
  <div class="bg-punk-gradient text-gray-100 min-h-screen py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl font-bold text-center mb-4">News et ressources</h1>
      <p class="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
        Des connaissances techniques et des conseils de carrière gratuits pour
        vous aider à décrocher l'emploi de vos rêves ! Ce blog vous propose des
        articles sur les sujets suivants :
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">
        <!-- Featured Article -->
        <div v-if="articles && articles.length > 0" class="lg:col-span-2">
          <article
            class="bg-punk-surface rounded-lg overflow-hidden shadow-lg h-96"
          >
            <div class="md:flex h-full">
              <div class="md:flex-shrink-0">
                <img
                  :src="articles[0].image"
                  :alt="articles[0].title"
                  class="h-full w-full object-cover md:w-96"
                />
              </div>
              <div class="relative p-8">
                <div
                  class="uppercase tracking-wide text-sm text-blue-400 font-semibold mb-1"
                >
                  {{
                    new Date(articles[0].date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  }}
                </div>
                <h2
                  class="block mt-6 text-5xl font-grotesk leading-tight font-bold text-white"
                >
                  {{ articles[0].title }}
                </h2>
                <p class="mt-3 text-gray-400">{{ articles[0].description }}</p>
                <div class="mt-4 absolute bottom-6 right-6 flex items-center">
                  <img
                    :src="articles[0].authorImage"
                    alt=""
                    class="h-10 w-10 rounded-full mr-2"
                  />
                  <div class="text-sm">
                    <p class="text-gray-300 leading-none">
                      {{ articles[0].author }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Other Articles -->
        <div
          v-for="article in articles.slice(1)"
          :key="article._path"
          class="bg-punk-surface rounded-lg overflow-hidden shadow-lg"
        >
          <article>
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2 text-white hover:underline">
                {{ article.title }}
              </h2>
              <p class="text-gray-400 mb-4">{{ article.description }}</p>
              <div
                class="flex justify-between items-center text-sm text-gray-400"
              >
                <div class="flex items-center">
                  <Calendar class="w-4 h-4 mr-1" />
                  <span>{{
                    new Date(article.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  }}</span>
                </div>
                <div class="flex items-center">
                  <User class="w-4 h-4 mr-1" />
                  <span>{{ article.author }}</span>
                </div>
              </div>
              <div class="flex justify-end mt-6">
                <NuxtLink :to="article._path">Lire plus</NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
