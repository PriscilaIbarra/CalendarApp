import api from '../../api/api'
import router from '../../router';

const state = ()=>({
    isAuthenticated : false,
    status:'',
    token:'',
    user:{
        email:'',
        password:''
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
    login({commit,state}){ api,commit,state       
       commit('SET_USER',{email:state.user.email,status:'success',token:'aaaaaaaa123'});
       router.push({path: "/dashboard"})
       /* api.authUser(state.user).then(response=>{ 
           commit('SET_USER',response.data);
           router.push({path: "/dashboard"})
        }).catch(e=>{ e 
           commit('notifications/NOTIFY_AUTH_ERROR','Wrong user or password',{root:true}) 
        });*/
    }
}

const mutations = {
    UPDATE_USER(state,input){
        state.user[input.name] = input.value      
    },   
    SET_USER(state,payload){
        state.user.email = payload.email
        state.user.password = ''
        state.isAuthenticated = true
        state.status = payload.status
        state.token = payload.token
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}