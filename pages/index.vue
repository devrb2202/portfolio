<template>
    <Profile />
</template>

<script setup lang="ts">

useHead({
  title: 'Web Portfolio | Home Page',
  meta: [
    { name: 'description', content: 'Explore the portfolio and secure web projects of a modern developer using Nuxt 3, Vuetify, and Supabase.' },
    { name: 'keywords', content: 'web portfolio, Nuxt developer, Vuetify, Supabase, secure web app, frontend developer' },
    { name: 'author', content: 'Your Name' },
    { property: 'og:title', content: 'Web Portfolio | Home Page' },
    { property: 'og:description', content: 'Secure and modern web development projects by a Nuxt developer.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://yourdomain.com' },  // replace with your real domain
    // { property: 'og:image', content: 'https://yourdomain.com/cover.jpg' }, // optional: OG image
  ]
})

</script>