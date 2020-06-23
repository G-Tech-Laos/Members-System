import axios from "axios"
export const state = () => ({
  appSession: sessionStorage.getItem("app"),
  userData: JSON.parse(sessionStorage.getItem("user")),
  menus: JSON.parse(sessionStorage.getItem("menus"))
})

export const getters = {
  getLoggedIn(state) {
    return state.isLoggedIn
  }
}

export const mutations = {
  setAuth(state, payload) {
    if (payload.sessionId != "") {
      state.appSession = payload.sessionId
      state.userData = {
        userId: payload.weblocalUserId,
        userName: payload.fullName
      }
      sessionStorage.setItem("app", payload.sessionId)
      sessionStorage.setItem("user", JSON.stringify(state.userData))
      this.$router.push('/')
    }
  },
  getMenu(state, payload) {
    sessionStorage.setItem("menus", JSON.stringify(payload))
    state.menus = payload
  },
  clearSession(state, payload) {
    state.appSession = payload
    state.userData = payload
    sessionStorage.clear()
    this.$router.push('/login')
  }
}

export const actions = {
  async setAuth({
    commit
  }, payload) {
    try {
      const res = await axios.get(process.env.BASE_URL + '/new_finger/auth', {
        params: payload
      })
      commit("setAuth", res.data)
      return res.data
    } catch (error) {
      return {
        code: 503,
        msg: "ບໍ່ສາມາດເຊື່ອມຕໍ່ກັບເຊີເວີໄດ້"
      };
    }
  },
  async getMenu({
    commit
  }, payload) {
    const res = await axios.get(process.env.BASE_URL + '/new_finger/auth', {
      params: payload
    })
    commit("getMenu", res.data)
  },
  async logout({
    commit
  }) {
    commit("clearSession", null)
  }
}


// http: //10.0.2.86:8080/new_finger/auth?act=get_menu_list&session_id=dhfgshdf0sd8fsdfa08sd0fa8sdfhjaksdf0
