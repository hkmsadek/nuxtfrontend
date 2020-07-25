//import Vuex from 'vuex'
//import axios from 'axios'
export const strict = false
export const state = () => ({
    user : 'no user',
    authUser: false,
})
// common getters
export const getters ={

}
//mutations for changing data from action
export const mutations = {
  loginUser(state, data) {
    state.authUser = data
  },
}
// actionns for commiting mutations
export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
   console.log('I am running as nuxt server init')

    //console.log('session is ', request.session)
    try {
      // get the initial data
      let { data } = await $axios.get('myuser')
      commit('loginUser', data)
      //console.log(data)

    } catch (e) {
        console.log('nuxt server error ', e.response)
    }
  },
}
