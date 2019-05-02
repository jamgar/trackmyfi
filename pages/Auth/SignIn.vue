<template>
  <div id="signin-form">
    <form novalidate="true">
      <div v-if="errors.length">
        <ul>
          <li v-for="(error, idx) in errors" :key="idx">{{ error }}</li>
        </ul>
      </div>
      <input
        id="email"
        v-model="email"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        type="text"
        placeholder="Email"
      />
      <input
        id="password"
        v-model="password"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        type="password"
        placeholder="Password"
      />
      <button
        class="f6 link dim ba bw1 ph3 pv2 mb2 dib dark-green"
        @click.prevent="handleSubmit"
      >
        Sign In
      </button>
      <nuxt-link class="f6 link dim ba bw1 ph3 pv2 mb2 dib mid-gray" to="/"
        >Cancel</nuxt-link
      >
      <p>Sign Up</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      errors: []
    }
  },
  methods: {
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    handleSubmit() {
      if (!this.email || !this.validateEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.password) {
        this.errors.push('Password required.')
      }

      if (!this.errors.lenght) {
        console.log('call auth/signin')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
