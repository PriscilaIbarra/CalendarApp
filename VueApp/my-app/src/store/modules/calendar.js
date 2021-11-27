import api from '../../api/api'

const state = ()=>({   
    events: [],  
    showDialog:false,
    event:{
        name:'',
        startDate:'',
        startTime:'',
        endDate:'',
        endTime:'',
        color:'',
        timed:true,
        userId:'',
        id:''
    },
    colors:[
      "blue",
      "teal lighten-2",
      "yellow",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
      "red lighten-1"
    ],
})

const getters = { }

const actions = { 
    async getEvents({commit,dispatch},user){ 
        const [error,eventsList] = await api.getEvents(user)
        if(error) dispatch('notifications/notifyGetEventsError',error,{root:true})
        if(!error) commit('SET_EVENTS',eventsList) ;        
        if(!error) commit('SET_EVENT',user.id);
    }
    ,
    showEventModalForm({commit}){
        commit('SHOW_EVENT_MODAL_FORM');
    }
    ,
    closeEventModalForm({commit}){
        commit('CLOSE_EVENT_MODAL_FORM');
    }
    ,
    cleanEventModalForm({commit}){
        commit('CLEAN_EVENT_MODAL_FORM');
    }
    ,
    updateEvent({commit},input){ 
        commit('UPDATE_EVENT',input);
    },
    async addEvent({dispatch,state}){ 
       const [error] = await api.addEvent(state.event); 
       if(error){
         dispatch('notifications/notifyAddEventError',error,{root:true});
       }
       else {
         dispatch('getEvents',state.user);
         dispatch('closeEventModalForm');
         dispatch('cleanEventModalForm');
       }
      
    }
    
}

const mutations = {
    SET_EVENTS(state,eventslist){
        state.events = eventslist
    },
    SHOW_EVENT_MODAL_FORM(state){
        state.showDialog = true
    },
    CLOSE_EVENT_MODAL_FORM(state){
        state.showDialog = false
    },
    SET_EVENT(state,userId){
        state.event.userId = userId
    },
    UPDATE_EVENT(state,input){
        state.event[input.name] = input.value
    },
    CLEAN_EVENT_MODAL_FORM(state){
       state.event = {
        name:'',
        startDate:'',
        startTime:'',
        endDate:'',
        endTime:'',
        color:'',
        timed:true,
        userId:'',
        id:''
        }
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
