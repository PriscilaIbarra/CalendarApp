import api from '../../api/api'

const state = ()=>({   
    events: [
        {name:"Prueba",
        start:new Date("2021-11-22T19:00:00.000Z"),
        end: new Date("2021-11-22T20:00:00.000Z"),
        color:"green",
        timed:"true",
        userId:1,
        id:0}
    ],    
    showDialog:false
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
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
