<script setup lang="ts">
const props = defineProps<{
	numberOfSlots: number;
	title: string;
	duration: string;
	place: string;
	prerequisite: string;
}>();

const emit = defineEmits(['click']);

function onClick() {
	emit('click');
}
</script>
<template>
	<div @click="onClick" class="flex flex-col w-full md:w-1/4 border-2 border-white h-60 gap-2 p-2 rounded cursor-pointer">
		<span class="text-center text-sm text-black bg-white rounded py-1 px-2">places: {{ props.numberOfSlots }}</span>
		<h3 class="text-xl font-bold">{{ props.title }}</h3>
		<p class="text-sm">
			<span class="font-bold">Durée :</span> {{props.duration}}
		</p>
		<p class="text-sm">
			<span class="font-bold">Lieu :</span> {{props.place}}
		</p>
		<p class="text-sm">
			<span class="font-bold">Prérequis :</span> {{props.prerequisite}}
		</p>
	</div>
</template>
