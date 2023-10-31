import api from '../../api/api'
import normalizer from '../../api/normalizer';
import store from '../../store';
import {required, smallerThan, graterThan, checkInput} from '../../validations/validators';

const state = ()=>({   
    events: [],  
    showDialog:false,
    showAddBtn:true,
    showDelBtn:false,
    showEditBtn:false,
    showSaveBtn:false,
    showDeleteDialog:false,
    showEventErrorsDialog:false,
    event:{
        name:'',
        startDate:'',
        startTime:'00:00',
        endDate:'',
        endTime:'00:00',
        color:'orange',
        timed:true,
        userId:'',
        id:''
    },
    colors:[
      "orange",  
      "blue",
      "teal lighten-2",
      "yellow",
      "cyan",
      "green",
      "pink accent-2",
      "red lighten-1"
    ]
})



const getters = {
    nameRules:state=>{
       const errors = [];
       required(state.event.name,'Name',errors);
       return {status:checkInput(errors),result:errors}
    },
    dateFromRules:state=>{
        const errors = []
        required(state.event.startDate,'Date',errors)
        smallerThan(state.event.startDate,state.event.endDate,'Invalid date range',errors)
        return {status:checkInput(errors),result:errors}
    },
    dateToRules:state=>{
        const errors = []
        required(state.event.endDate,'Date',errors)
        graterThan(state.event.endDate,state.event.startDate,'Invalid date range',errors)
        return {status:checkInput(errors),result:errors}
    },
    timeFromRules:state=>{
        const errors = []
        required(state.event.startTime,'Time',errors)
        return {status:checkInput(errors),result:errors}
    },
    timeToRules:state=>{
        const errors = []
        required(state.event.endTime,'Time',errors)
        return {status:checkInput(errors),result:errors}
    },
    colorRules:state=>{
        const errors = []
        required(state.event.color,'Color',errors)
        return {status:checkInput(errors),result:errors}
    },
}

const actions = { 
    async getEvents({commit,dispatch},user)
    { 
        const [error,eventsList] = await api.getEvents(user);
        if(error) dispatch('notifications/notifyGetEventsError',error,{root:true})
        if(!error) commit('SET_EVENTS',eventsList);  
    }
    ,
    showModalFormForAddEvent({commit},date)
    {
        commit('CLEAN_EVENT_MODAL_FORM');
        commit('SHOW_ADD_EVENT_BTN');
        commit('HIDE_EDIT_EVENT_BTN');
        commit('HIDE_SAVE_EVENT_BTN');
        commit('HIDE_DELETE_EVENT_BTN');
        commit('CLOSE_EVENT_ERRORS_DIALOG')
        commit('SET_USERID_EVENT',store.state.user.user.id);
        commit('SET_DATE_EVENT',date);
        commit('SHOW_EVENT_MODAL_FORM');
    }
    ,
    showModalFormForEditEvent({dispatch,commit},event)
    {
        try
        {           
          commit('CLEAN_EVENT_MODAL_FORM');
          commit('HIDE_ADD_EVENT_BTN');
          commit('SHOW_EDIT_EVENT_BTN');
          commit('SHOW_DELETE_EVENT_BTN');
          commit('HIDE_SAVE_EVENT_BTN');
          commit('CLOSE_EVENT_ERRORS_DIALOG');
          commit('SET_EVENT',normalizer.formatEvent(event));
          commit('SHOW_EVENT_MODAL_FORM');
        }
        catch(e)
        {
          dispatch('notifications/notifySetEventError',e,{root:true});  
        }
    }
    ,
    enableForm({commit}){ 
        commit('HIDE_EDIT_EVENT_BTN');
        commit('SHOW_SAVE_EVENT_BTN');
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
    showDeleteDialog({commit}){ 
        commit('SHOW_DELETE_DIALOG');
    }  
    ,
    closeDeleteDialog({commit}){
        commit('CLOSE_DELETE_DIALOG');
    }
    ,
    showErrorsDialog({commit}){
        commit('SHOW_EVENT_ERRORS_DIALOG')
    }
    ,
    closeErrorsDialog({commit}){
        commit('CLOSE_EVENT_ERRORS_DIALOG')
    }
    ,
    updateEventAttributes({commit},input){ 
        commit('UPDATE_EVENT_ATTR',input);
    },
    async addEvent({dispatch,state})
    { 
       const [error] = await api.addEvent(state.event); 
       if(error)
       {
         dispatch('notifications/notifyAddEventError',error,{root:true});
       }
       else
       {
         dispatch('getEvents',store.state.user.user);
         dispatch('closeEventModalForm');
         dispatch('cleanEventModalForm');
         dispatch('notifications/notifyAddEventSuccess',{},{root:true});
       }
    }
    ,
    async updateEvent({dispatch,state})
    {                      
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
    },
    async deleteEvent({dispatch,state})
    {   
        const [error] = await api.deleteEvent(state.event);
        if(error)
        {
            dispatch('notifications/notifyDeleteEventError',error,{root:true});
        }
        else
        {
            dispatch('notifications/notifyDeleteEventSuccess',{},{root:true});
            dispatch('closeDeleteDialog');
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
        startTime:'00:00',
        endDate:'',
        endTime:'00:00',
        color:'orange',
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
    HIDE_DELETE_EVENT_BTN(state){
      state.showDelBtn = false
    },
    SHOW_DELETE_EVENT_BTN(state){
      state.showDelBtn = true  
    },
    SHOW_EDIT_EVENT_BTN(state){
        state.showEditBtn = true;
    },
    HIDE_EDIT_EVENT_BTN(state){
        state.showEditBtn = false;
    },
    SHOW_SAVE_EVENT_BTN(state){
        state.showSaveBtn = true
    },
    HIDE_SAVE_EVENT_BTN(state){
        state.showSaveBtn = false
    }
    ,
    SHOW_DELETE_DIALOG(state){
        state.showDeleteDialog = true
    }
    ,
    CLOSE_DELETE_DIALOG(state){
        state.showDeleteDialog = false
    }
    ,
    SHOW_EVENT_ERRORS_DIALOG(state){
        state.showEventErrorsDialog = true
    }
    ,
    CLOSE_EVENT_ERRORS_DIALOG(state){
        state.showEventErrorsDialog = false
    }
    ,
    SET_DATE_EVENT(state,date){
        state.event.startDate = date;
        state.event.endDate = date;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
