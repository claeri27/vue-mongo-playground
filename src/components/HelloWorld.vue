<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-dropdown>
      <button class="button is-primary" slot="trigger">
          <span>Modal Button</span>
      </button>

      <b-dropdown-item>Action</b-dropdown-item>
      <b-dropdown-item>Another action</b-dropdown-item>
      <b-dropdown-item>Something else</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
