import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import notifications from './modules/notifications'
import {version} from '../../package.json'

Vue.use(Vuex)


const store = new Vuex.Store({ 
  state: {
    version:''
  },
  modules: {
    user:user,
    notifications:notifications
  }, 
  actions:{   },
  mutations:{
    initializeStore(state){
      if(localStorage.getItem('store')){
          let store = JSON.parse(localStorage.getItem('store'));
          if(store.version == version){
             this.replaceState(
              Object.assign(state,JSON.parse(localStorage.getItem('store')))
            ); 
          }
          else{
            state.version = version
          }              
      }
    }
  }
});

// Subscribe to store updates
store.subscribe((mutation,state)=>{   
     //Remove previous state
    localStorage.removeItem('store')
    //Store the new state object as JSON string
    localStorage.setItem('store',JSON.stringify(state))
});

export default store