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
      <LucideConstruction class="w-6 h-6 text-gray-100 mr-2" />
      <div class="flex items-center gap-2">
        <p>Bienvenue ! Notre site évolue, mais vous pouvez déjà réserver vos formations !</p>
        <button
          @click="handleShowPromotionBar"
        >
          <LucideX class="w-6 h-6 text-gray-100 cursor-pointer ml-2" />
        </button>
      </div>
    </div>
  </section>
</template>
