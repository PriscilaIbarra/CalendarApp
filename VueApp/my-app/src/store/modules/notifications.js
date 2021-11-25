const state = () =>({
    authError: '',
    registerErrors: [],
    registerSuccess: '',
    getEventsError:'',
    addEventError:''
})

const getters = {
    authError : state =>state.authError,
    registerErrors: state =>state.registerErrors,
    registerSuccess: state=>state.registerSuccess,
    getEventsError: state=>state.getEventsError,
    addEventError:state=>state.addEventError
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
   notifyGetEventsError({commit},errors){
    commit('NOTIFY',{name:'getEventsError',content:errors})   
   },
   notifyAddEventError({commit},error){
    commit('NOTIFY',{name:'addEventError',content:error});
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