<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Crypto</span>
        <span>VEXX</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y left transition="slide-x-transition">
        <v-btn
          slot="activator"
          color="primary"
          dark
        >
          Login
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            @click=""
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu offset-y left transition="slide-x-transition">
        <v-btn
          slot="activator"
          color="error"
          dark
        >
          Register
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            @click=""
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
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
      items: [
        { title: 'Google' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }
  }
}
</script>

<style>
</style>
