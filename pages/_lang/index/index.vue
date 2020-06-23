<template>
  <v-container>
    <div class="page-title">{{ $t('text') }}</div>
    <v-row dense class="md-12">
      <v-col v-for="(item, i) in items" :key="i" class="mb-6 md-6">
        <v-card :class="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div class="lao">
              <v-card-title
                class="_card-title"
                v-text="item.title"
              ></v-card-title>

              <v-card-subtitle
                class="_card-sub-title"
                v-text="item.artist"
              ></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="120" tile>
              <div class="card-result">{{ item.result }}</div>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Dashboard',
      pageTitle: 'Dashboard',
      items: [
        {
          color: 'c-color-1',
          // src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'ຈຳນວນມື້ມາຊ້າ',
          artist: 'ປະຈຳເດືອນນີ້',
          result: 7
        },
        {
          color: 'c-color-2',
          // src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'ຈຳນວນມື້ເມືອຊ້າ',
          artist: 'ປະຈຳເດືອນນີ້',
          result: 3
        },
        {
          color: 'c-color-3',
          // src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'ຈຳນວນມື້ມາວຽກ',
          artist: 'ປະຈຳເດືອນນີ້',
          result: 18
        },
        {
          color: 'c-color-4',
          // src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'ຈຳນວນມື້ລາພັກ',
          artist: 'ປະຈຳເດືອນນີ້',
          result: 5
        }
      ]
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss" scoped>
._card-title {
  font-size: 30px;
}
._card-sub-title {
  margin-top: 1px;
  font-size: 20px;
}
.card-result {
  font-size: 80px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
}
.c-color-1 {
  background: linear-gradient(87deg, #11cdef, #1171ef) !important;
}
.c-color-2 {
  background: linear-gradient(87deg, #5e72e4, #825ee4) !important;
}
.c-color-3 {
  background: linear-gradient(87deg, #09833b, #6cf536) !important;
}
.c-color-4 {
  background: linear-gradient(87deg, #f5365c, #f56036) !important;
}
.page-title {
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: 700;
}
</style>
