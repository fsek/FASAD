<script setup lang="ts">
import '~~/assets/css/theme.css'
import { User } from '~~/models/user'

const runtimeConfig = useRuntimeConfig()

const { data: userData } = await useFetch<User>('/api/account/user', { baseURL: runtimeConfig.apiBase, headers: useRequestHeaders(['cookie']) })

if (userData == null) {
  useState('loggedIn', () => false)
} else {
  useState('user', () => userData)
  useState('loggedIn', () => true)
}

useState<RequestInit>('defaultFetchOpts', () => ({ baseURL: runtimeConfig.apiBase, credentials: 'include', headers: useRequestHeaders(['cookie']) })) // TODO: only use include for debug (i think)
</script>

<template>
  <NuxtPage />
</template>
