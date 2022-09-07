<script setup lang="ts">
import { NewsPostModel } from '~~/models/news-post'

const route = useRoute()
const router = useRouter()

let pendingUpdate = ref(false)
let errorUpdate: any = ref(false)
const updated = ref(false)

const { data, pending, error } = await useFetch<NewsPostModel>('/api/news/' + route.params.id, { ...useState<RequestInit>('defaultFetchOpts').value })

async function saveNewsPost (newsPost: NewsPostModel) {
  ({ pending: pendingUpdate, error: errorUpdate } = await useFetch<NewsPostModel[]>('/api/news/', { body: { ...newsPost }, method: 'PUT', ...useState<RequestInit>('defaultFetchOpts').value }))

  if (!errorUpdate.value) { updated.value = true }
}

async function deleteNewsPost (newsPost: NewsPostModel) {
  ({ pending: pendingUpdate, error: errorUpdate } = await useFetch<NewsPostModel[]>('/api/news/', { body: { ...newsPost }, method: 'DELETE', ...useState<RequestInit>('defaultFetchOpts').value }))

  router.replace('/admin/news')
}

const modelData = data ?? {} as NewsPostModel // this dosent actually copy the data, only makes it non-null incase of failure

definePageMeta({
  title: 'News'
})
</script>

<template>
  <NuxtLayout name="home">
    <progress v-if="pending" class="progress is-small is-primary" max="100">
      15%
    </progress>
    <div v-if="updated" class="notification is-success">
      <button class="delete" @click="updated = false" />
      News post was successfully updated
    </div>
    <div v-if="error" class="has-text-danger">
      Could not load the news post
    </div>
    <div v-if="errorUpdate" class="has-text-danger">
      Could not update the news post
    </div>
    <div class="p-2">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="modelData.title" class="input" type="text" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea v-model="modelData.content" class="textarea" placeholder="Text input" />
        </div>
      </div>
      <span>Written by <UserLink v-if="data.author" :user="data.author" /> at {{ $dayjs(modelData.created).format('ddd DD MMMM YYYY HH:mm:ss') }}</span>

      <div class="buttons mt-1">
        <button class="button is-success" :class="{'loading': pendingUpdate }" @click="() => saveNewsPost(modelData)">
          Save
        </button>
        <button class="button is-danger" :class="{'loading': pendingUpdate }" @click="() => deleteNewsPost(data)">
          Delete
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
