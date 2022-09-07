<script setup lang="ts">
import { NewsPostModel } from '~~/models/news-post'

const pendingSave = ref(false)
const errorSave: any = ref(false)
const saved = ref(false)

async function saveNewsPost (newsPost: NewsPostModel) {
  const { pending, error } = await useFetch<NewsPostModel[]>('/api/news/', { body: { ...newsPost }, method: 'POST', ...useState<RequestInit>('defaultFetchOpts').value })
  pendingSave.value = pending.value
  errorSave.value = error.value

  if (!errorSave.value) { saved.value = true }
}

const modelData = {
  title: '',
  content: ''
} as NewsPostModel

definePageMeta({
  title: 'News'
})
</script>

<template>
  <NuxtLayout name="home">
    <progress v-if="pendingSave" class="progress is-small is-primary" max="100">
      15%
    </progress>
    <div class="p-2">
      <div class="buttons">
        <NuxtLink to="/admin/news" class="button">
          Tillbaka till administrera nyheter
        </NuxtLink>
      </div>
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

      <div v-if="saved" class="notification is-success">
        <button class="delete" @click="saved = false" />
        News post was successfully created
      </div>
      <div v-if="errorSave" class="notification is-danger">
        <button class="delete" @click="errorSave = false" />
        Could not create news post
      </div>

      <div class="buttons mt-1">
        <button class="button is-success" :class="{'loading': pendingSave }" @click="() => saveNewsPost(modelData)">
          Save
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
