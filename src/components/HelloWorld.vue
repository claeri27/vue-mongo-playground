<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.fat }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
              <td class="text-xs-right">{{ props.item.protein }}</td>
              <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
          </v-data-table>
          <v-card-text class="px-0">12</v-card-text>
          <v-card-text class="px-0">12</v-card-text>
          <v-card-text class="px-0">12</v-card-text>
          <v-card-text class="px-0">12</v-card-text>
          <v-card-text class="px-0">12</v-card-text>
          <v-card-text class="px-0">12</v-card-text>
          <v-card-text class="px-0">12</v-card-text>
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
          <v-card-text class="px-0">6</v-card-text>
          <v-card-text class="px-0">6</v-card-text>
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 6" :key="`2${i}`" xs2>
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 12" :key="`1${i}`" xs1>
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories', align: 'right' },
          { text: 'Fat (g)', value: 'fat', align: 'right'  },
          { text: 'Carbs (g)', value: 'carbs', align: 'right'  },
          { text: 'Protein (g)', value: 'protein', align: 'right'  },
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          }
        ],
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify'
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify'
        }
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com'
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuetifyjs.com'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs'
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify'
        }
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined'
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }

      ]
    })
  }
</script>

<style>

</style>
