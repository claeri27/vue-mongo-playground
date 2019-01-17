<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Crypto</span>
        <span>FLEX</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        target="_blank"
      >
        <span>Login</span>
      </v-btn>
      <v-btn
        flat
      >
        <span>Register</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
</style>
