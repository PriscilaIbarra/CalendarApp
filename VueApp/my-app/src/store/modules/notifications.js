const state = () =>({
    authError: '',
    registerErrors: [],
    registerSuccess: null
})

const getters = {
    authError : state =>state.authError,
    registerErrors: state =>state.registerErrors,
    registerSuccess: state=>state.registerSuccess
}

const actions = {
   notifyAuthError({commit}){
    commit('NOTIFY',{name:'authError',content:'Wrong user or password'});
   },
   notifyRegisterSuccess({commit}){
    commit('NOTIFY',{name:'registerSuccess',content:'The user has been registered successfuly'});
   },
   notifyRegisterErrors({commit},errors){
    commit('NOTIFY',{name:'registerErrors',content:errors});
   },
   cleanNotification({commit},msgName){ 
    commit('CLEAN',msgName);
   }
}

const mutations = {
    NOTIFY(state, msg){ 
        state[msg.name] = msg.content; 
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