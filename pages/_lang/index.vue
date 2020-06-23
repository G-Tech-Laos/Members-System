<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-card :height="170" class="rounded-0">
        <v-img
          class="white--text align-end"
          height="170px"
          :src="require('@/assets/images/finger.jpg')"
        >
          <v-card-title v-if="!miniVariant" class="title-style lao">{{ userData.userName }}</v-card-title>
        </v-img>
      </v-card>
      <v-list class="lao">
        <template v-for="(menu, i) in menus">
          <v-list-item v-if="menu.subMenus.length <= 0" :key="i" :to="menu.menuUrl" router exact>
            <v-list-item-action>
              <v-icon
                style="--fa-primary-color: #073ea5; --fa-secondary-color:  #3c87c4;"
              >{{ menu.menuIcon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="menu.menuName" />
            </v-list-item-content>
          </v-list-item>
          <v-list-group v-else-if="menu.subMenus.length > 0" :key="i" no-action>
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon
                  style="--fa-primary-color: #073ea5; --fa-secondary-color:  #3c87c4;"
                >{{ menu.menuIcon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.menuName }}</v-list-item-title>
            </template>

            <v-list-item v-for="(sub, i) in menu.subMenus" :key="i" :to="sub.menuUrl">
              <v-list-item-title v-text="sub.menuName"></v-list-item-title>
              <v-list-item-action>
                <v-icon
                  style="--fa-primary-color: #073ea5; --fa-secondary-color:  #3c87c4;"
                >{{ sub.menuIcon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-{{ `${drawer ? 'menu-open' : 'menu'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>-->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>-->
      <v-toolbar-title v-text="title" class="font-weight-bold" />
      <v-spacer />
      <v-btn class="ma-2" outlined color="primary" @click="logout">
        <v-icon left>mdi-logout</v-icon>Logout
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <transition name="fade" mode="out-in">
          <nuxt />
        </transition>
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" class="grey lighten-2" app>
      <span>Copyright &copy; {{ new Date().getFullYear() }} | BCEL IT Center</span>
    </v-footer>
  </v-layout>
</template>

<script>
import jsonMenu from '@/assets/menu.json'

import { mapActions, mapState } from 'vuex'

export default {
  middleware: 'authCheck',
  data() {
    return {
      title: 'Home',
      menus: jsonMenu,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Time Attendance System'
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  computed: {
    ...mapState('appAuth', ['userData'])
  },
  methods: {
    ...mapActions('appAuth', ['logout'])
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'NotoSansLao';
  src: url('~assets/fonts/NotoSansLao.ttf');
}
.lao {
  font-family: NotoSansLao;
}
.title-style {
  background-color: rgba(0, 0, 0, 0.5);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
