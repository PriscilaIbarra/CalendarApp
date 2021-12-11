import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import notifications from './modules/notifications'
import dashboard from './modules/dashboard'
import calendar from './modules/calendar'
import VuexPersistence from 'vuex-persist'; 

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store =  new Vuex.Store({  
  modules: {
    user:user,
    notifications:notifications,
    dashboard:dashboard,
    calendar:calendar,
  }, 
  plugins: [vuexLocal.plugin],
});



export default store