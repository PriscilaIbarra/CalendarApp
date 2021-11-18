import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import notifications from './modules/notifications'

Vue.use(Vuex)

export default new Vuex.Store({ 
  modules: {
    user:user,
    notifications:notifications
  }
})
