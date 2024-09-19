<template>
	<div class="relative bg-black text-white min-h-screen">
		<header class="sticky top-0 p-4 backdrop-blur-sm bg-black/50 z-50">
			<NavBar />
		</header>
		<main class="p-4 min-h-screen">
			<slot />
		</main>
	</div>
</template>
