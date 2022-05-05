<script>
export default {
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin () {
      const runtimeConfig = useRuntimeConfig()

      try {
        const response = await useFetch('/api/authentication/login', { method: 'POST', body: this.login, baseURL: runtimeConfig.apiBase })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<template>
  <div>
    <DataGrid />
    <form @submit.prevent="userLogin">
      <div>
        <label>Email</label>
        <input v-model="login.email" type="text">
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="text">
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
