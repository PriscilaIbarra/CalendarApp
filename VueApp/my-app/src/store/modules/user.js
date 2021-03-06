import api from '../../api/api'
import router from '../../router';

const state = ()=>({
    isAuthenticated : false,
    status:'',
    token:'',
    user:{
        id:'',
        email:'',
    }
})

const getters = {
     user: state => state.user,
     isAuthenticated: state => !!state.token,   
}

const actions = {
    updateUser({commit},input){
        commit('UPDATE_USER',input);        
    }
    ,
    async login({commit,dispatch},user)
    { 
       const [data,error] = await api.authenticateUser(user);
       if(!error)
       {
          commit('CLEAN_USER_STATE'); 
          commit('SET_USER',data.user);
          commit('LOGIN',{status:'success',token:data.accessToken})      
          router.push({path: "/dashboard/calendar"})
       }
       else
       {
          dispatch('notifications/notifyAuthError',{},{root:true}) 
       }
    },
    async register({dispatch},user)
    {
        const [error] = await api.registerUser(user);
        if(!error) dispatch('notifications/notifyRegisterSuccess',{},{root:true});
        if(error) dispatch('notifications/notifyRegisterError',error,{root:true});
    },
    async logout({commit,state})
    { 
        const [error] = await api.logout({token:state.token, user:state.user});
        if(error)console.log(error);
        commit('CLEAN_USER_STATE');
        commit('LOGOUT');
    }    

}

export const mutations = {
    UPDATE_USER(state,input){
        state.user[input.name] = input.value      
    },
    CLEAN_USER_STATE(state){
        state.user.id = ''
        state.user.email = ''
        state.isAuthenticated = false
        state.status = ''
        state.token = ''
    },    
    SET_USER(state,payload){
        state.user.id = payload.id 
        state.user.email = payload.email  
    },
    LOGIN(state,payload){
        state.isAuthenticated = true
        state.status = payload.status
        state.token = payload.token
    },
    LOGOUT(state){       
        state.isAuthenticated = false
        state.status = ''
        state.token = ''
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}