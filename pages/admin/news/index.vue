<script setup lang="ts">
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
  },
  {
    label: 'Delete',
    field: 'delete'
  }
]

let pendingDelete = ref(false)
let errorDelete: any = ref(false)

function onRowClick (params: any) {
  if (params.column.field === 'author') { return }
  if (params.column.field === 'delete') { return }
  const router = useRouter()
  router.push('/admin/news/' + params.row.id)
}

async function deleteRow (row: any) {
  ({ pending: pendingDelete, error: errorDelete } = await useFetch<NewsPostModel[]>('/api/news/', { body: { ...row }, method: 'DELETE', ...useState<RequestInit>('defaultFetchOpts').value }))
  refresh()
}

definePageMeta({
  title: 'Admin - Users'
})
</script>

<template>
  <NuxtLayout name="home">
    <div class="p-2">
      <div class="buttons">
        <button class="button" :class="{'loading': pending || pendingDelete }" @click="refresh()">
          Refresh
        </button>
        <NuxtLink class="button" to="/admin/news/new">
          Ny Nyhet
        </NuxtLink>
      </div>
      <div v-if="error" class="has-text-danger">
        {{ error }}
      </div>
      <div v-if="errorDelete" class="has-text-danger">
        {{ errorDelete }}
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
            <span v-if="props.column.field === 'delete'">
              <font-awesome-icon class="is-clickable" icon="trash" beat size="2x" @click="() => deleteRow(props.row)" />
            </span>
            <span v-else-if="props.column.field === 'author'">
              <UserLink :user="props.row.author" />
            </span>
            <span v-else-if="props.column.field === 'created'">
              {{ $dayjs(props.row.created).format('ddd DD MMMM YYYY HH:mm:ss') }}
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
