<template>
  <div id="login">
    <div class="login-container">
      <div class="split left">
        <div class="logo-box">
          <img src="@/assets/images/indexlogo.png" alt srcset />
          <span class="desc-box">Time Attendance System</span>
        </div>
        <div class="footer left">
          <span>
            Copyright &copy; {{ new Date().getFullYear() }} | BCEL IT
            Center
          </span>
        </div>
      </div>
      <div class="split right">
        <div class="bg-box">
          <img src="@/assets/images/indexlogo.png" alt srcset />
        </div>
        <span class="bg-desc-box">Time Attendance System</span>
        <div class="p-spacer top"></div>
        <div class="bcel-logo">
          <img src="@/assets/images/logo.png" alt srcset />
          <div class="p-spacer s10"></div>
          <div class="welcom">WELCOME</div>
        </div>
        <div class="p-spacer s50"></div>
        <form class="login-box" method="post" @submit.prevent="login">
          <div class="control-box">
            <input type="text" id="user" v-model="credential.enc_uname" required />
            <label for="user">Username</label>
            <v-icon>mdi-account</v-icon>
          </div>
          <div class="control-box">
            <input type="password" id="password" v-model="credential.enc_passwd" required />
            <label for="password">Password</label>
            <v-icon>mdi-key</v-icon>
          </div>
          <div class="p-spacer s20"></div>
          <button type="submit" class="btn-submit">Login</button>
        </form>
        <div class="footer right">
          <span>
            Copyright &copy; {{ new Date().getFullYear() }} | BCEL IT
            Center
          </span>
        </div>
        <transition
          enter-active-class="animated slideInRight"
          leave-active-class="animated slideOutRight"
        >
          <notify v-if="snackbar" :msg="message" :type="type"></notify>
        </transition>
      </div>
    </div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import notify from '@/components/Notification'

import { mapActions } from 'vuex'

export default {
  middleware: 'loginCheck',
  components: {
    notify
  },
  data() {
    return {
      snackbar: false,
      message: '',
      type: '',
      loading: false,
      credential: {
        act: 'login',
        enc_uname: 'Pitpy',
        enc_passwd: 'Pitpy@#bceL'
      }
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  methods: {
    ...mapActions('appAuth', ['setAuth', 'getMenu']),
    async login() {
      this.loading = true
      let data = await this.setAuth(this.credential)
      if (data.sessionId == '') {
        this.snackbar = true
        this.type = 'warning'
        this.message = data.message.msg
        setTimeout(() => {
          this.snackbar = false
        }, 5000)
      } else {
        this.getMenu({
          act: 'get_menu_list',
          session_id: data.sessionId
        })
      }
      if (data.code == 503) {
        this.snackbar = true
        this.type = 'error'
        this.message = data.msg
        setTimeout(() => {
          this.snackbar = false
        }, 5000)
      }
      if (data) this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/login.scss';
</style>
