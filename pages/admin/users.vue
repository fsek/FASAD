<script setup lang="ts">
import { User } from '~~/models/user'
const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch<User[]>('/api/users', { baseURL: runtimeConfig.apiBase })

const columns = [
  {
    label: 'Id',
    field: 'id'
  },
  {
    label: 'Email',
    field: 'email'
  },
  {
    label: 'Email',
    field: 'emailConfirmed',
    type: 'boolean'
  }
]

definePageMeta({
  title: 'Admin - Users'
})
</script>

<template>
  <NuxtLayout name="home">
    <div class="p-2">
      <div class="buttons">
        <button class="button" :class="{'loading': pending }" @click="refresh()">
          Refresh
        </button>
      </div>
      <div v-if="error" class="has-text-danger">
        {{ error }}
      </div>
      <client-only>
        <vue-good-table
          v-if="!pending && !error"
          :columns="columns"
          :rows="data ?? []"
          :search-options="{
            enabled: true
          }"
        />
      </client-only>
    </div>
  </NuxtLayout>
</template>

<style scoped>
table {
  width: 100%;
}
</style>
