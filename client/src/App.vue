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
    <v-footer
      dark
      height="auto"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-actions>
      </v-card>
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
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
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
