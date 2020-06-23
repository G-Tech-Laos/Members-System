<template>
  <v-container grid-list-xs>
    <div class="page-title lao">{{pageTitle}}</div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-3 pt-5"
      :loading="true"
      loading-text="Loading... Please wait"
    >
      <template v-slot:top>
        <!-- <v-toolbar flat color="white"> -->
        <div class="table-actions">
          <v-col cols="12" sm="4" md="3">
            <v-menu
              v-model="picker.start"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date.start"
                  label="ເລີ່ມຕົ້ນວັນທີ:"
                  prepend-inner-icon="mdi-calendar-today"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  class="lao"
                  outlined
                  dense
                ></v-text-field>
              </template>
              <v-date-picker no-title v-model="date.start" @input="picker.start = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-menu
              v-model="picker.end"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date.end"
                  label="ສິ້ນສຸດວັນທີ:"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  class="lao"
                  outlined
                  dense
                ></v-text-field>
              </template>
              <v-date-picker no-title v-model="date.end" @input="picker.end = false"></v-date-picker>
            </v-menu>
          </v-col>
          <div class="pa-3 action-btn-box">
            <v-btn color="info lao font-size-16" dark>
              ສະແດງ
              <v-icon right>mdi-check</v-icon>
            </v-btn>
          </div>
        </div>
        <!-- </v-toolbar> -->
      </template>
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.fat }}</td>
            <td>{{ item.carbs }}</td>
            <td>{{ item.protein}}</td>
            <td>{{ item.iron }}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      title: 'Me',
      pageTitle: 'ລາຍງານປ້ຳໂມງໂຕເອງ',
      //date: new Date().toISOString().substr(0, 10),
      date: {
        start: '',
        end: ''
      },
      picker: {
        start: false,
        end: false
      },
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    }
  }
}
</script>

<style lang="scss" scoped>
.font-size-16 {
  font-size: 16px;
}
.table-actions {
  display: flex;
  flex-wrap: wrap;
}
.action-btn-box {
  position: relative;
  width: 100%;
  @media screen and (min-width: 760px) {
    width: auto;
    button {
      width: auto;
    }
  }
  button {
    padding: 20px 12px !important;
    margin: 0;
    width: 100%;
  }
}

tr {
  &:nth-of-type(odd) {
    background-color: #dfeafa;
  }

  // &:nth-of-type(even) {
  //   background-color: #d4d4d4;
  // }
}
</style>
