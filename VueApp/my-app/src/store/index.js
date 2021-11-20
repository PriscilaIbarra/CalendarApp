import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import notifications from './modules/notifications'
import dashboard from './modules/dashboard'
import VuexPersistence from 'vuex-persist'; //library to persist state object inside localStorage


Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store =  new Vuex.Store({  
  modules: {
    user:user,
    notifications:notifications,
    dashboard:dashboard
  }, 
  plugins: [vuexLocal.plugin],
});



export default store