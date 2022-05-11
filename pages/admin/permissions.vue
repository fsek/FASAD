<script setup lang="ts">
import { Permission } from '~~/models/permission'

const { data, pending, error: fetchError } = await useFetch<Permission[]>('/api/permissions/permission', { ...useState<RequestInit>('defaultFetchOpts').value })

const reactiveState = reactive({ saveError: '' })

const toggleBox = async (role: Permission) => {
  reactiveState.saveError = ''

  const resp = await useFetch('/api/permissions/permission', { ...useState<RequestInit>('defaultFetchOpts').value, method: 'POST', body: role })
  if (resp.error.value) { reactiveState.saveError = 'Kunde inte spara roller' }
}

definePageMeta({
  title: 'Admin - Users'
})
</script>

<template>
  <NuxtLayout name="home">
    <div class="p-2">
      <div v-if="fetchError" class="has-text-danger">
        {{ fetchError }}
      </div>
      <div v-if="reactiveState.saveError" class="has-text-danger">
        {{ reactiveState.saveError }}
      </div>
      <div v-if="!pending">
        <section v-for="role in data" :key="role.roleId" class="section">
          <h4 class="title">
            {{ role.roleName }}
          </h4>
          <span v-for="claim in role.roleClaims" :key="claim.value" class="mr-4">
            {{ claim.value }}
            <input v-model="claim.selected" type="checkbox" @change="toggleBox(role)">
          </span>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
table {
  width: 100%;
}
</style>
