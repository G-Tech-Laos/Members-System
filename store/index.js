export const state = () => ({
  locales: ['la', 'en', 'ch'],
  locale: 'la'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
