<template>
	<div class="flex flex-col items-center justify-center gap-4 p-4">
		<h1 class="text-4xl font-bold">Postuler</h1>
		<h2 class="text-xl font-bold self-start">Sélectionnez le/les workshops qui vous intéressent</h2>
		<div class=" w-full md:w-1/2 flex flex-col gap-1 items-center relative">
			<label class="font-bold z-10 self-start" for="email">Email</label>
			<input type="email" id="email" class="w-full p-2 border-1 rounded text-black border-black" required placeholder="john.doe@mail.com" />
		</div>

		<div class="flex flex-wrap justify-center gap-4 mt-4">
			<CardFormation title="Tests unitaires" duration="2 heures" place="Paris" prerequisite="Aucun" numberOfSlots="limité" />
			<CardFormation title="Git devenir opérationnel" duration="2 heures" place="Paris" prerequisite="Aucun" numberOfSlots="limité" />
			<CardFormation title="Maitriser Tailwindcss" duration="2 heures" place="Paris" prerequisite="Aucun" numberOfSlots="limité" />
			<CardFormation title="Développer plus vite : IDE, console de déboggage" duration="2 heures" place="Paris" prerequisite="Aucun" numberOfSlots="limité" />
			<CardFormation title="Performance et sécurité des applications" duration="2 heures" place="Paris" prerequisite="Aucun" numberOfSlots="limité" />
			<CardFormation title="Accessibilité web" duration="2 heures" place="Paris" prerequisite="Aucun" numberOfSlots="limité" />
			</div>

		<button class="w-full md:w-1/2 bg-black text-white p-2 border-2 border-white rounded mt-4 hover:bg-white hover:text-black">Envoyer</button>
	</div>
</template>
