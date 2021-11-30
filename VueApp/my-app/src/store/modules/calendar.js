import api from '../../api/api'
import normalizer from '../../api/normalizer';
import store from '../../store';

const state = ()=>({   
    events: [],  
    showDialog:false,
    showAddBtn:true,
    showEditBtn:false,
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

const getters = {
    
}

const actions = { 
    async getEvents({commit,dispatch},user){ 
        const [error,eventsList] = await api.getEvents(user);
        if(error) dispatch('notifications/notifyGetEventsError',error,{root:true})
        if(!error) commit('SET_EVENTS',eventsList) ;        
        if(!error) commit('SET_USERID_EVENT',user.id);
    }
    ,
    showEventModalForm({commit}){
        commit('SHOW_EVENT_MODAL_FORM');
    }
    ,
    closeEventModalForm({commit}){
        commit('CLOSE_EVENT_MODAL_FORM');
        commit('SHOW_ADD_EVENT_BTN');
    }
    ,
    cleanEventModalForm({commit}){
        commit('CLEAN_EVENT_MODAL_FORM');
    }
    ,
    updateEventAttributes({commit},input){ 
        commit('UPDATE_EVENT_ATTR',input);
    },
    async addEvent({dispatch,state}){ 
       const [error] = await api.addEvent(state.event); 
       if(error){
         dispatch('notifications/notifyAddEventError',error,{root:true});
       }
       else {
         dispatch('getEvents',store.state.user.user);
         dispatch('closeEventModalForm');
         dispatch('cleanEventModalForm');
       }
    }
    ,
    showEditEventBtn({commit}){
        commit('SHOW_EDIT_EVENT_BTN')
    }
    ,
    hideAddEventBtn({commit}){
        commit('HIDE_ADD_EVENT_BTN');
    }
    ,
    setEvent({dispatch,commit},event){
        try
        {
          commit('SET_EVENT',normalizer.formatEvent(event));
          dispatch('hideAddEventBtn')
          dispatch('showEditEventBtn');
          dispatch('showEventModalForm');
        }
        catch(e)
        {
          dispatch('notifications/notifySetEventError',e,{root:true});  
        }
    }
    ,
    enableForm({commit}){ 
        commit('HIDE_EDIT_EVENT_BTN');
    }
    ,
    async updateEvent({dispatch,state}){ 
      const [error] = await api.updateEvent(state.event); 
      if(error)
      {
          dispatch('notifications/notifyUpdateEventError',error,{root:true});
      }
      else
      {
          dispatch('notifications/notifyUpdateEventSuccess',{},{root:true});
          dispatch('closeEventModalForm');
          dispatch('cleanEventModalForm');
          dispatch('getEvents',store.state.user.user);
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
    SET_USERID_EVENT(state,userId){
        state.event.userId = userId
    },
    UPDATE_EVENT_ATTR(state,input){
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
    },
    SET_EVENT(state,event){
      state.event = event  
    },
    HIDE_ADD_EVENT_BTN(state){
      state.showAddBtn = false
    },
    SHOW_ADD_EVENT_BTN(state){
      state.showAddBtn = true
    },
    SHOW_EDIT_EVENT_BTN(state){
        state.showEditBtn = true;
    },
    HIDE_EDIT_EVENT_BTN(state){
        state.showEditBtn = false;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
