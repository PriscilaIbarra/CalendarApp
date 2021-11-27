import axios from 'axios'
import normalizer from './normalizer'

const axiosConfig = axios.create({
    baseURL:'http://localhost:3000',
});

export default {
    getHeaders(token){
        return {
            headers:{
                'Authorizations': `${token}`
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
    async logout(userData)
    {  
        try
        {
          const response = await axiosConfig.get('/logout',userData);  
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
        const response = await axiosConfig.get('/events?'+'userId='+user.id);   
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
          const response = await axiosConfig.post('/events',normalizer.normalizeEvent(ev));
          return [null,response.data.status]
        }
        catch(e)
        {
            return [e]
        }
    }
}