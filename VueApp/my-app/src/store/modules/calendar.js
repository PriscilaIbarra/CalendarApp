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
        timed:'',
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
    updateEvent({commit},input){ 
        commit('UPDATE_EVENT',input);
    },
    addEvent(){ 
       
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
    UPDATE_EVENT(state,input){
        state.event[input.name] = input.value
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
