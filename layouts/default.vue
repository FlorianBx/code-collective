<template>
  <div class="relative bg-[#111113] text-white min-h-screen z-10">
    <svg class="absolute -z-10 inset-0 w-full h-full">
      <filter id="grainy">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#grainy)" />
    </svg>
    <header class="sticky top-0 backdrop-blur-sm bg-[#111113]/70 z-50">
      <PromotionBar />
      <NavBar />
    </header>
    <main class="p-6 min-h-screen">
      <slot />
    </main>
  </div>
</template>

<style scoped>
svg {
  opacity: 0.05;
}
</style>
