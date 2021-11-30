const state = () =>({
    authError: '',
    registerError: '',
    registerSuccess: '',
    eventError:'',
    eventSuccess:''
})

const getters = {
    authError : state =>state.authError,
    registerError: state =>state.registerError,
    registerSuccess: state=>state.registerSuccess,
    eventError: state=>state.eventError,
    eventSuccess: state=>state.eventSuccess,
}

const actions = {
   notifyAuthError({commit}){
    commit('NOTIFY',{name:'authError',content:'Wrong user or password'});
   },
   notifyRegisterSuccess({commit}){
    commit('NOTIFY',{name:'registerSuccess',content:'The user has been registered successfuly'});
   },
   notifyRegisterError({commit},error){
    commit('NOTIFY',{name:'registerError',content:error});
   },
   notifyGetEventsError({commit},errors){
    commit('NOTIFY',{name:'eventError',content:errors})   
   },
   notifyAddEventError({commit},error){
    commit('NOTIFY',{name:'eventError',content:error});
   },
   notifyAddEventSuccess({commit}){
    commit('NOTIFY',{name:'eventSuccess',content:'The event has been registed successfuly'});
   },
   notifySetEventError({commit},error){
    commit('NOTIFY',{name:'eventError',content:error});
   },
   notifyUpdateEventError({commit,error}){
    commit('NOTIFY',{name:'eventError',content:error})
   },
   notifyUpdateEventSuccess({commit}){
    commit('NOTIFY',{name:'eventSuccess',content:'The event has been updated successfuly'})
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