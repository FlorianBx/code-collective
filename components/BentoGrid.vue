<template>
	<div class="h-screen-minus-menu grid grid-cols-1 md:grid-cols-5 grid-rows-4 gap-6 mt-8">
		<div class="relative bg-white text-black p-6 md:p-8 rounded-lg order-1 md:col-span-3 row-span-3">
			<div class="text-sm mb-2">lorem ipsum</div>
			<h1 class="text-4xl font-grotesk md:text-6xl font-bold z-20">
				FORMEZ-VOUS, DEMARQUEZ-VOUS
			</h1>
			<a href="#" class="absolute bottom-4 right-4 py-4 px-8 bg-black text-white rounded inline-block">Participer à des workshops</a>
		</div>

		<div class="bg-orange-500 rounded-lg flex items-end h-64 md:h-auto overflow-hidden order-2 md:col-span-2 row-span-3" style="filter: saturate(70%); background-image: url('/image.webp'); background-size: cover; background-position: center;">
			<div class="text-white text-lg md:text-xl font-semibold w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>
		</div>

		<div class="bg-stone-800/60 text-white p-6 rounded-lg flex items-center order-4 md:order-3 md:col-span-3 row-span-2">
			<div>
				<h2 class="font-bold text-3xl mb-4">WORKSHOPS INTENSIFS</h2>
				<ul>
					<li class="text-lg disc">2-3 jours pour maîtriser des compétences clés</li>
					<li class="text-lg ">Petits groupes, pratique intensive</li>
					<li class="text-lg">Formateurs experts du terrain</li>
				</ul>
			</div>
		</div>

		<div class="bg-white text-black p-6 rounded-lg order-3 md:order-4 md:col-span-2 row-span-2">
			<div class="text-4xl md:text-5xl font-bold">4.98</div>
			<div class="text-sm mb-4">BASED ON 619 REVIEWS</div>
			<div class="flex flex-wrap gap-2">
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">BOXING RING</span>
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">BASKETBALL COURTS</span>
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">JUICE BAR</span>
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">PERSONAL TRAINERS</span>
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">LOCKERS</span>
				<span class="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">FREE PARKING</span>
			</div>
		</div>
	</div>
</template>
