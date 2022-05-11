<script setup lang="ts">
import { Ref } from 'vue'
import { NewsPostModel } from '~~/models/news-post'
import { User } from '~~/models/user'

const runtimeConfig = useRuntimeConfig()

const user: Ref<User> = useState('user')
const { data, pending, error } = await useFetch<NewsPostModel[]>('/api/news', { baseURL: runtimeConfig.apiBase })

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
        <div v-if="user?.permissions.includes('Permissions.News.Edit')">
          <NuxtLink :to="`/admin/news`">
            Administrera nyheter
          </NuxtLink>
        </div>
        <NewsPost v-for="value in data" :key="value.id" :news="value" />
      </div>
      <div class="column">
        asdf, här kan man ha spons o skitd
      </div>
    </div>
    <span v-if="pending">loading...</span>
    <span v-if="error" class="has-text-danger">Kunde inte ladda nyheter {{ error }}</span>
  </NuxtLayout>
</template>

<style>
</style>
