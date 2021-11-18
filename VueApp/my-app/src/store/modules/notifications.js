const state = () =>({
    authError:''
})

const getters = {
    authError : state =>state.authError
}

const actions = {
   cleanNotification({commit},msgName){ 
     commit('CLEAN',msgName);
   }
}

const mutations = {
    NOTIFY_AUTH_ERROR(state, msg){ 
        state.authError = msg
    },
    CLEAN(state,msgName){
         state[msgName] = ''         
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}