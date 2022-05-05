<script lang="ts">
import { Permission } from '~~/models/permission'

export default {
  data () {
    return {
      roleInput: ref(''),
      fetch: reactive({} as any),
      columns: [
        {
          label: 'Permission',
          field: 'value'
        },
        {
          label: 'Selected',
          field: 'selected',
          type: 'boolean'
        }
      ]
    }
  },
  methods: {
    async submit () {
      this.fetch = await useLazyFetch<Permission[]>('/api/permissions/permission/' + this.roleInput, { ...useState<RequestInit>('defaultFetchOpts').value })
    }
  }
}
</script>

<script setup lang="ts">
definePageMeta({
  title: 'Admin - Users'
})
</script>

<template>
  <NuxtLayout name="home">
    <div class="p-2">
      <form @submit.prevent="submit">
        <div class="field">
          <label class="label">Role</label>
          <div class="control">
            <input v-model="roleInput" class="input" type="text">
          </div>
        </div>
        <div>
          <button class="button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div v-if="fetch.error" class="has-text-danger">
        {{ fetch.error }}
      </div>
      <client-only>
        <vue-good-table
          v-if="!fetch.pending"
          :columns="columns"
          :rows="fetch.data?.roleClaims ?? []"
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
