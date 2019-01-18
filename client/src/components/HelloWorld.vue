<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-carousel dark height=250>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
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
    items: [
      {
        src: 'https://cryptocurrencynews.com/wp-content/uploads/sites/3/2017/12/Depositphotos_159283418_m-2015-e1513363517587.jpg'
      },
      {
        src: 'https://i.pinimg.com/originals/31/e1/ef/31e1ef90a4ea2c5b74e101ade24e4127.png'
      },
      {
        src: 'https://partners.adobe.com/content/dam/tep_assets/images/tech_home_hero_banner1.jpg'
      },
      {
        src: 'https://cn.novumind.com/wp-content/uploads/2018/06/abstract-tech-banner-lower-res.jpeg'
      }
    ],
    headers: [
      {
        text: 'Dessert',
        align: 'center',
        sortable: false,
        value: 'name'
      },
      { text: 'Calories', value: 'calories', align: 'right' },
      { text: 'Fat (g)', value: 'fat', align: 'right' },
      { text: 'Carbs (g)', value: 'carbs', align: 'right' },
      { text: 'Protein (g)', value: 'protein', align: 'right' },
      { text: 'Rank', value: 'cmc_rank', align: 'center' },
      { text: 'Name', value: 'name', align: 'center' },
      { text: 'Sym', value: 'sym', align: 'center' },
      { text: 'Volume', value: 'volume', align: 'center' },
      { text: 'Market Cap', value: 'market-cap', align: 'center' },
      { text: '1hr', value: '1hr-change', align: 'center' },
      { text: '24hr', value: '24hr-change', align: 'center' },
      { text: '7d', value: '7d-change', align: 'center' }
    ],
    desserts: [
      {
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
      },
      {
        value: false,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3
      },
      {
        value: false,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0
      },
      {
        value: false,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3
      },
      {
        value: false,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9
      },
      {
        value: false,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0
      },
      {
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0
      },
      {
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5
      },
      {
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9
      },
      {
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7
      }
    ]
  })
}
</script>

<style>

</style>
