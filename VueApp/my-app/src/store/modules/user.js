import api from '../../api/api'
import router from '../../router';

const state = ()=>({
    isAuthenticated : false,
    status:'',
    token:'',
    user:{
        email:'',
        password:'',
        confirmPassword:''
    }
})

const getters = {
     user: state => state.user,
     isAuthenticated: state => !!state.token
}

const actions = {
    updateUser({commit},input){
        commit('UPDATE_USER',input);        
    }
    ,
    login({commit,state, dispatch}){ 
       api.authenticateUser(state.user).then(response=>{
          commit('CLEAN_USER_STATE'); 
          commit('SET_USER',{email:response.data[0].email});
          commit('LOGIN',{status:'success',token:'aaaaaaaaaaa'})      
          router.push({path: "/dashboard"})
        }).catch(()=>{  
          dispatch('notifications/notifyAuthError',{},{root:true}) 
        });
    },
    register({commit,state,dispatch}){
        api.registerUser(state.user).then(()=>{ 
            commit('CLEAN_USER_STATE');                      
            dispatch('notifications/notifyRegisterSuccess',{},{root:true});
        }).catch(e=>{
            dispatch('notifications/notifyRegisterErrors',e.response.data.error,{root:true});
        });    
    },
    logout({commit,state}){ 
        api.logout({token:state.token, user:state.user}).then(()=>{
            commit('CLEAN_USER_STATE');
            commit('LOGOUT');}
        )
    }    

}

const mutations = {
    UPDATE_USER(state,input){
        state.user[input.name] = input.value      
    },
    CLEAN_USER_STATE(state){
        state.user.email = ''
        state.user.password = ''
        state.user.confirmPassword = ''
        state.isAuthenticated = false
        state.status = ''
        state.token = ''
    },    
    SET_USER(state,payload){
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