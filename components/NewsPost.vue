<script setup lang="ts">
import dayjs from 'dayjs'
import 'dayjs/locale/sv'

import { NewsPostModel } from '~~/models/news-post'

// eslint-disable-next-line import/no-named-as-default-member
dayjs.locale('sv')

defineProps<{
  news: NewsPostModel
}>()
</script>

<template>
  <div class="card mb-3">
    <div class="card-content">
      <div class="level">
        <div class="level-left">
          <h4 class="title is-4">
            {{ news.title }}
          </h4>
        </div>
        <div class="level-right">
          <p class="is-capitalized">
            {{ dayjs(news.created).format('ddd DD MMMM YYYY HH:mm:ss') }}
          </p>
          <NuxtLink :to="`/admin/news/${news.id}`">
            Adm
          </NuxtLink>
        </div>
      </div>
      <div class="content">
        {{ news.content }}
      </div>
    </div>
    <footer class="card-footer p-2 px-4">
      <p class="is-italic has-text-dark">
        <UserLink :user="news.author" />
      </p>
    </footer>
  </div>
</template>

<style scoped>

</style>
