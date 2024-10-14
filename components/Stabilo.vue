<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'yellow',
    validator: (value) => ['yellow', 'green', 'blue', 'pink'].includes(value)
  }
});
</script>
<template>
  <span class="relative inline-block px-2">
    <span class="relative z-10"><slot></slot></span>
    <span 
      class="absolute bottom-0 left-0 right-0 h-6 bg-blue-400 opacity-70 transform -skew-x-6"
      :class="{ 
        'bg-yellow-300': color === 'yellow',
        'bg-green-400': color === 'green',
        'bg-gradient-to-r from-[#4DC9E6] to-[#482c8f] text-gray-100': color === 'blue',
        'bg-pink-400': color === 'pink'
      }"
    ></span>
  </span>
</template>

