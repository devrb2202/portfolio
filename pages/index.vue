<template>
    <Profile />
</template>

<script setup lang="ts">

// useHead({
//   title: 'Web Portfolio | Home Page',
//   meta: [
//     { name: 'description', content: 'Explore the portfolio and secure web projects of a modern developer using Nuxt 3, Vuetify, and Supabase.' },
//     { name: 'keywords', content: 'web portfolio, Nuxt developer, Vuetify, Supabase, secure web app, frontend developer' },
//     { name: 'author', content: 'Your Name' },
//     { name: 'google-site-verification', content: 'zx9t9DIS6a84nTW564mzMkYiph1szRnhAqmGxu-RZJs' }, 
//     { property: 'og:title', content: 'Web Portfolio | Home Page' },
//     { property: 'og:description', content: 'Secure and modern web development projects by a Nuxt developer.' },
//     { property: 'og:type', content: 'website' },
//     { property: 'og:url', content: 'https://rmlbrcs.vercel.app' },
//   ],
//    link: [
//     { rel: 'canonical', href: 'https://rmlbrcs.vercel.app' }
//   ]
// })

useHead({
  title: 'Nuxt 3 Developer Portfolio | Your Name',
  meta: [
    { name: 'description', content: 'Portfolio of a Nuxt 3 developer specializing in secure, modern web apps with Vuetify & Supabase. See projects and contact me!' },
    { name: 'keywords', content: 'Nuxt 3 developer, Vuetify projects, Supabase backend, frontend portfolio, web app developer' },
    { name: 'author', content: 'Your Name' },
    { name: 'google-site-verification', content: 'zx9t9DIS6a84nTW564mzMkYiph1szRnhAqmGxu-RZJs' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // OpenGraph
    { property: 'og:title', content: 'Nuxt 3 Developer Portfolio | Your Name' },
    { property: 'og:description', content: 'Secure and modern web development projects by a Nuxt developer.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rmlbrcs.vercel.app' },
    { property: 'og:image', content: 'https://rmlbrcs.vercel.app/images/og-preview.jpg' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Nuxt 3 Developer Portfolio | Your Name' },
    { name: 'twitter:description', content: 'Secure and modern web development projects by a Nuxt developer.' },
    { name: 'twitter:image', content: 'https://rmlbrcs.vercel.app/images/twitter-preview.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://rmlbrcs.vercel.app' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ramil Bercasio",
        "url": "https://rmlbrcs.vercel.app",
        "jobTitle": "Frontend Developer",
        "skills": "Nuxt 3, Vuetify, Supabase"
      })
    }
  ]
})


</script>