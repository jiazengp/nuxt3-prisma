<template>
  <div>
    <Logos mb-6 />
     <div
    v-for="{id, title} in posts"
    :key="id"
  >
    {{id}} - {{title}}

  </div>
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from 'nuxt3';

const nuxtApp = useNuxtApp();

const posts = await nuxtApp.$prisma.post.findMany();
</script>