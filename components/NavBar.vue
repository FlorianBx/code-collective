<template>
	<nav class="flex items-center justify-between">
		<div class="flex items-center gap-4 justify-between w-full md:w-auto">
			<NuxtLink class="text-2xl font-bold" to="/">Code Collective</NuxtLink>
			<NuxtLink class="sm:hidden px-4 py-2  hover:bg-accent text-white rounded" to="/apply">Postuler</NuxtLink>
		</div>
		<div class="hidden md:flex items-center gap-4 font-inter">
			<NuxtLink class="" to="/formations">Formations</NuxtLink>
			<NuxtLink class="" to="/blog">Ressources</NuxtLink>
			<NuxtLink class="" to="/about">A propos</NuxtLink>
			<NuxtLink class="" to="/inProgress">Calendrier</NuxtLink>
			<NuxtLink class="px-4 py-2 border-2 border-accent hover:bg-accent text-white rounded" to="/apply">Postuler</NuxtLink>
		</div>
		<!-- <Teleport to="body"> -->
		<!-- 	<div class="fixed bottom-5 left-10 right-10 flex md:hidden justify-between items-center gap-4 z-50 backdrop-blur bg-white/50 p-2.5 rounded-lg"> -->
		<!-- 		<NuxtLink to="/" class="flex flex-col items-center"> -->
		<!-- 			<Icon name="mdi:home" size="34" class="text-stone-800" /> -->
		<!-- 		</NuxtLink> -->
		<!-- 		<NuxtLink to="/formations" class="flex flex-col items-center"> -->
		<!-- 			<Icon name="mdi:book-open-variant" size="34" class="text-stone-800" /> -->
		<!-- 		</NuxtLink> -->
		<!-- 		<NuxtLink to="/blog" class="flex flex-col items-center"> -->
		<!-- 			<Icon name="mdi:file-document-outline" size="34" class="text-stone-800" /> -->
		<!-- 		</NuxtLink> -->
		<!-- 		<NuxtLink to="/inProgress" class="flex flex-col items-center"> -->
		<!-- 			<Icon name="mdi:calendar" size="34" class="text-stone-800" /> -->
		<!-- 		</NuxtLink> -->
		<!-- 	</div> -->
		<!-- </Teleport> -->
	</nav>
</template>

