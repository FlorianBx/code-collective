<template>
	<div class="h-screen-minus-menu grid grid-cols-1 md:grid-cols-5 grid-rows-4 gap-6 mt-8">
		<div class="relative bg-white text-black p-6 md:p-8 rounded-lg order-1 row-span-2 md:col-span-3 lg:row-span-3">
			<div class="text-sm mb-2">lorem ipsum</div>
			<h1 class="text-3xl font-grotesk xs:text-6xl font-bold z-20">
				FORMEZ-VOUS, DEMARQUEZ-VOUS
			</h1>
			<a href="#" class="absolute bottom-4 right-4 py-4 px-8 bg-black text-white rounded inline-block">Participer à des workshops</a>
		</div>

		<div class="rounded-lg flex items-end h-64 md:h-auto overflow-hidden order-2 md:col-span-2 row-span-2 lg:row-span-3" style="filter: saturate(70%); background-image: url('/image.webp'); background-size: cover; background-position: center;">
			<div class="text-white text-lg md:text-xl font-semibold w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>
		</div>

		<div class="bg-stone-800/60 text-white p-6 rounded-lg flex order-4 md:order-3 md:col-span-3 row-span-2">
			<div>
				<h2 class="font-bold text-3xl mb-4">WORKSHOPS INTENSIFS</h2>
				<ul class="list-item mt-6">
					<li class="flex items-center gap-2">
						<svg class="flex-shrink-0 w-3.5 h-3.5 text-gray-200 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
						</svg>
						<span>2 a 3 jours pour maîtriser des compétences clés</span></li>
					<li class="flex items-center gap-2 mt-2">
						<svg class="flex-shrink-0 w-3.5 h-3.5 text-gray-200 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
						</svg>
						<span>Petits groupes, pratique intensive</span></li>
					<li class="flex items-center gap-2 mt-2">
						<svg class="flex-shrink-0 w-3.5 h-3.5 text-gray-200 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
						</svg>
						<span>Formateurs experts du terrain</span></li>
				</ul>
			</div>
		</div>

		<div class="bg-white text-black p-6 rounded-lg order-3 md:order-4 md:col-span-2 row-span-2">
			<div class="text-4xl md:text-5xl font-bold">4.98</div>
			<div class="text-sm mb-4">BASED ON 619 REVIEWS</div>
			<div class="flex flex-wrap gap-2">
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">Tests Unitaires</span>
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">Git</span>
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">Console de Debub</span>
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">Maitrise d'IDE</span>
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">TailwindCSS</span>
			</div>
		</div>
	</div>
</template>
