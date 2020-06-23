<template>
  <v-container grid-list-xs>
    <div class="page-title lao">{{pageTitle}}</div>
    <v-card class="mx-auto" elevation="3" :loading="loading">
      <v-card-title class="lao font-weight-bold font-size-24">ຂໍ້ມູນພື້ນຖານ</v-card-title>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <!-- <v-btn text class="lao font-size-20" color="primary">
            ບັນທຶກ
            <v-icon right>mdi-floppy</v-icon>
          </v-btn>-->
          <div class="my-2">
            <v-btn
              color="info lao font-size-18"
              dark
              @click.stop="loading = !loading"
              :disabled="loading"
            >
              ບັນທຶກ
              <v-icon right>mdi-floppy</v-icon>
            </v-btn>
          </div>
        </v-card-actions>
      </v-form>
    </v-card>

    <div class="space"></div>
    <v-card class="mx-auto" elevation="3">
      <v-card-title class="lao font-weight-bold font-size-24">ປ່ຽນລະຫັດເຂ້າສູ່ລະບົບ</v-card-title>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <!-- <v-btn text class="lao font-size-20" color="primary">
            ບັນທຶກ
            <v-icon right>mdi-floppy</v-icon>
          </v-btn>-->
          <div class="my-2">
            <v-btn color="info lao font-size-18" dark>
              ປ່ຽນລະຫັດ
              <v-icon right>mdi-account-check</v-icon>
            </v-btn>
          </div>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Info',
      loading: false,
      pageTitle: 'ຂໍ້ມູນສ່ວນຕົວ',
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
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
.font-size-18 {
  font-size: 18px !important;
}
.font-size-24 {
  font-size: 24px !important;
}
.space {
  height: 50px;
}
</style>