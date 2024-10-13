<template>
  <div class="relative bg-punk-global bg-[#111113] text-white min-h-screen">
    <header class="sticky top-0 backdrop-blur-sm bg-[#111113]/70 z-50">
      <PromotionBar />
      <NavBar />
    </header>
    <main class="p-4 min-h-screen">
      <slot />
    </main>
  </div>
</template>
