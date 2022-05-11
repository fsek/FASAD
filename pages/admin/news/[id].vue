<script setup lang="ts">
import { User } from '~~/models/user'

const route = useRoute()

const { data: user } = await useFetch<User>('/api/users/' + route.params.id, { ...useState<RequestInit>('defaultFetchOpts').value })

definePageMeta({
  title: 'User'
})
</script>

<template>
  <NuxtLayout name="home">
    Yes, it looks bad, we havent designed anything yet
    <span>User: {{ user?.email }}</span>
  </NuxtLayout>
</template>
