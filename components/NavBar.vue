<template>
  <nav class="flex items-center justify-between p-4">
    <div class="flex items-center gap-4 justify-between w-full md:w-auto">
      <NuxtLink class="text-2xl font-bold" to="/">Code Collective</NuxtLink>
      <NuxtLink
        class="sm:hidden px-4 py-2 hover:bg-accent text-white rounded"
        to="/apply"
        >Postuler</NuxtLink
      >
    </div>
    <div class="hidden md:flex items-center gap-4 font-inter">
      <NuxtLink class="" to="/formations">Formations</NuxtLink>
      <NuxtLink class="" to="/blog">Ressources</NuxtLink>
      <NuxtLink class="" to="/about">A propos</NuxtLink>
      <NuxtLink class="" to="/inProgress">Calendrier</NuxtLink>
      <NuxtLink
        class="px-4 py-2 border-2 border-accent hover:bg-accent text-white rounded"
        to="/apply"
        >Postuler</NuxtLink
      >
    </div>
    <Teleport to="#teleports">
      <div
        class="fixed bottom-2 left-3 right-3 flex md:hidden justify-between items-center gap-4 z-50 backdrop-blur bg-white/10 p-6 rounded-lg"
      >
        <NuxtLink to="/" class="flex scale-110 flex-col items-center">
          <LucideHouse />
        </NuxtLink>
        <NuxtLink to="/formations" class="flex scale-125 flex-col items-center">
          <LucideGraduationCap />
        </NuxtLink>
        <NuxtLink to="/blog" class="flex scale-105 flex-col items-center">
          <LucideBook />
        </NuxtLink>
        <NuxtLink to="/inProgress" class="flex scale-110 flex-col items-center">
          <LucideCalendar />
        </NuxtLink>
      </div>
    </Teleport>
  </nav>
</template>
