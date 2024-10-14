<script setup lang="ts">
const showPromotionBar = ref(true);

const handleShowPromotionBar = () => {
  showPromotionBar.value = !showPromotionBar.value;
};
</script>
<template>
  <section v-if="showPromotionBar">
    <div
      class="bg-gradient-to-r from-[#4DC9E6] to-[#482c8f] text-gray-100 w-full sm:p-4 flex justify-between"
    >
      <LucideConstruction tabindex="-1" class="w-6 h-6 text-gray-200 mr-2" />
      <div class="flex items-center gap-2">
        <p text-sm md:text-md>Bienvenue ! Notre site évolue, mais vous pouvez déjà réserver vos formations !</p>
        <button
          @click="handleShowPromotionBar"
					aria-label="close promotion button"
					role="button"
        >
          <LucideX class="w-6 h-6 text-gray-100 cursor-pointer mr-4 md:mr-0 ml-2 hover:text-blue-400 transition-colors duration-300" />
        </button>
      </div>
    </div>
  </section>
</template>
