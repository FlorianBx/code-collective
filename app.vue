<script setup lang="ts">
const organisationName = 'Code Collective'
useHead({
  title: organisationName,
  meta: [
    { name: 'description', content: 'Formez-vous aux compétences tech les plus demandées et boostez votre carrière avec nos workshops.' },
  ],
  bodyAttrs: {
    class: 'bg-punk-gradient text-gray-100'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

useSeoMeta({
  title: organisationName,
  ogTitle: organisationName,
  description: 'Formez-vous aux compétences tech les plus demandées et boostez votre carrière avec nos workshops.',
  ogDescription: 'Formez-vous aux compétences tech les plus demandées et boostez votre carrière avec nos workshops.',
  ogImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
		<NuxtPage />
  </NuxtLayout>
</template>
