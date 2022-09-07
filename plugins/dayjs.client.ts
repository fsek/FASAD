// ~/plugins/dayjs.ts
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// eslint-disable-next-line import/no-named-as-default-member
dayjs.extend(relativeTime)

// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
//   }
// }

// declare module '#app' {
//   interface NuxtApp {
//     $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
//  }
// }

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs
    }
  }
})
