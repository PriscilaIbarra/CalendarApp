import axios from 'axios'
import normalizer from './normalizer'
import store from '../store';

const axiosConfig = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials: false,
    headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default {
    getHeaders(){
        return {
            headers:{
                'Content-type':'application/json;charset=UTF-8',
                'Authorization': 'Bearer '+`${store.state.user.token}`
            }
        }
    }
    ,
    async registerUser(user) 
    {  
        try
        { 
          const response = await axiosConfig.post('/register',user);  
          return [null,response];
        }
        catch(e)
        { 
          return [e.response.data,null];
        }
    },
    async authenticateUser(user)
    {     
        try
        {
            const response = await axiosConfig.post('/login',user);
            return [response.data,null]
        }   
        catch(e)
        {
            return [null,e.response.data]
        }
    },
    async logout(user)
    {  
        try
        {
          const response = await axiosConfig.get('/logout',user);  
          return [null, response.data]
        }
        catch(e)
        {
          return [e.response.error, null]
        }
    },    
    async getEvents(user)
    {
       try
       { 
        const response = await axiosConfig.get('/events?'+'userId='+user.id,this.getHeaders());   
        return [null, normalizer.normalizeEvents(response.data)]
       }
       catch(e)
       {
         return  [e,null] 
       }
    },
    async addEvent(ev)
    {
        try
        { 
          const response = await axiosConfig.post('/events',normalizer.normalizeEvent(ev),this.getHeaders());
          return [null,response.data.status]
        }
        catch(e)
        {
            return [e]
        }
    },
    async updateEvent(ev)
    {
      try
      { 
        const response = await axiosConfig.put('/events/'+ev.id,normalizer.normalizeEventToUpdate(ev),this.getHeaders());
        return [null,response.data.status];
      }
      catch(e)
      {
        return [e]
      }
    },
    async deleteEvent(ev)
    {
      try
      { 
        const response  = await axiosConfig.delete('/events/'+ev.id,this.getHeaders());
        return [null,response.data.status];
      }
      catch(e)
      {
        return [e.response.error]
      }
    }
}