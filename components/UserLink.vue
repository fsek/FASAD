<script setup lang="ts">
import { User } from '~~/models/user'

defineProps<{
  user: User
}>()
</script>

<template>
  <NuxtLink :to="`/users/${user.id}`">
    {{ user.firstName }} {{ user.lastName }}
  </NuxtLink>
</template>
