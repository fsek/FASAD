<script setup lang="ts">
import { NewsPostModel } from '~~/models/news-post'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch<NewsPostModel[]>('/api/news', { baseURL: runtimeConfig.apiBase })

definePageMeta({
  title: 'Home',
  alias: '/home',
  layout: 'home'
})
</script>

<template>
  <NuxtLayout name="home">
    <div class="columns p-3">
      <div class="column is-three-quarters">
        <NewsPost v-for="value in data" :key="value.id" :news="value" />
        <div @click="() => refresh()">
          asd
        </div>
      </div>
      <div class="column">
        <img src="/partner1.png" class="partner">
      </div>
    </div>
    <span v-if="pending">loading...</span>
    <span v-if="error" class="has-text-danger">Kunde inte ladda nyheter {{ error }}</span>
  </NuxtLayout>
</template>

<style>
</style>
