<script setup lang="ts">
import dayjs from 'dayjs'
import { NewsPostModel } from '~~/models/news-post'

const { data, pending, error, refresh } = await useFetch<NewsPostModel[]>('/api/news', { ...useState<RequestInit>('defaultFetchOpts').value })

const columns = [
  {
    label: 'Id',
    field: 'id'
  },
  {
    label: 'Title',
    field: 'title'
  },
  {
    label: 'Author',
    field: 'author'
  },
  {
    label: 'Created',
    field: 'created'
  }
]

function onRowClick (params: any) {
  if (params.column.field === 'author') { return }
  const router = useRouter()
  router.push('/admin/news/' + params.row.id)
}

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
        <NuxtLink class="button" to="/admin/news/new">
          Ny Nyhet
        </NuxtLink>
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
          style-class="vgt-table condensed"
          @cell-click="onRowClick"
        >
          <template #table-row="props">
            <span v-if="props.column.field === 'author'">
              <UserLink :user="props.row.author" />
            </span>
            <span v-else-if="props.column.field === 'created'">
              {{ dayjs(props.row.created).format('ddd DD MMMM YYYY HH:mm:ss') }}
            </span>
            <span v-else>
              {{ props.formattedRow[props.column.field] }}
            </span>
          </template>
        </vue-good-table>
      </client-only>
    </div>
  </NuxtLayout>
</template>

<style scoped>
table {
  width: 100%;
}
</style>
