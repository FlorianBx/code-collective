<script setup lang="ts">
defineProps<{
  rating: number;
  quote: string;
  name: string;
  position: string;
  avatar: string;
}>();

</script>
<template>
  <div class="bg-transparent backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300">
    <div class="flex items-center mb-4">
      <div class="text-yellow-400 text-xl mr-2">★</div>
      <div class="text-xl font-bold text-gray-100">{{ rating.toFixed(1) }}</div>
    </div>
    <p class="text-gray-300 mb-4">"{{ quote }}"</p>
    <div class="flex items-center">
      <img :src="avatar" :alt="name" class="w-10 h-10 rounded-full mr-3">
      <div>
        <h4 class="font-semibold text-gray-100">{{ name }}</h4>
        <p class="text-sm text-gray-400">{{ position }}</p>
      </div>
    </div>
  </div>
</template>

