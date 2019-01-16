<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="nav">
      <b-dropdown>
        <button class="button is-primary" slot="trigger">
            <span>Login</span>
        </button>

        <b-dropdown-item>Action</b-dropdown-item>
        <b-dropdown-item>Another action</b-dropdown-item>
        <b-dropdown-item>Something else</b-dropdown-item>
      </b-dropdown>
      <b-dropdown>
        <button class="button is-primary" slot="trigger">
            <span>Register</span>
        </button>

        <b-dropdown-item>Action</b-dropdown-item>
        <b-dropdown-item>Another action</b-dropdown-item>
        <b-dropdown-item>Something else</b-dropdown-item>
      </b-dropdown>
      <b-dropdown hoverable>
          <button class="button is-info" slot="trigger">
              <span>Hover Button w/ drop down list</span>
              <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-item>Something else</b-dropdown-item>
      </b-dropdown>

      <b-dropdown disabled>
          <button class="button" slot="trigger">
              <span>Disabled</span>
              <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-item>Something else</b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="body">
      <section>
        <div class="block">
            <b-icon
                icon="account"
                size="is-large"
                type="is-success">
            </b-icon>
            <b-icon
                icon="home"
                size="is-large"
                type="is-info">
            </b-icon>
            <b-icon
                icon="view-dashboard"
                size="is-large"
                type="is-primary">
            </b-icon>
        </div>

        <button class="button is-dark">
            <b-icon icon="check"></b-icon>
            <span>Finish</span>
        </button>

        <button class="button is-warning">
            <b-icon icon="check"></b-icon>
            <span>Finish</span>
        </button>
    </section>
    <section>
        <b-field grouped group-multiline>
            <b-field label="Total">
                <b-input type="number" v-model="total"></b-input>
            </b-field>
            <b-field label="Items per page">
                <b-input type="number" v-model="perPage"></b-input>
            </b-field>
            <b-field label="Order">
                <b-select v-model="order">
                    <option value="">default</option>
                    <option value="is-centered">is-centered</option>
                    <option value="is-right">is-right</option>
                </b-select>
            </b-field>
            <b-field label="Size">
                <b-select v-model="size">
                    <option value="">default</option>
                    <option value="is-small">is-small</option>
                    <option value="is-medium">is-medium</option>
                    <option value="is-large">is-large</option>
                </b-select>
            </b-field>
        </b-field>
        <div class="block">
            <b-switch v-model="isSimple">Simple</b-switch>
            <b-switch v-model="isRounded">Rounded</b-switch>
        </div>

        <hr>
        <b-pagination
            :total="total"
            :current.sync="current"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage">
        </b-pagination>
    </section>
    <section>
        <b-message title="Danger with icon" type="is-danger" has-icon>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-message>

        <b-message title="Success with icon" type="is-success" has-icon>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-message>

        <b-message title="Info with icon" type="is-info" has-icon>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-message>

        <b-message title="Warning with icon" type="is-warning" has-icon>
            Lorem ipsum dolor sit amet, consectetur warning elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-message>
    </section>
    </div>
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
.nav {
  background-color: red;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
}
</style>
