import axios from 'axios'
import normalizer from './normalizer'

export default {
    registerUser(user){
        return axios.post('http://localhost:3000/users',user);
    },
    authenticateUser(user){        
        return axios.get('http://localhost:3000/users?'+'email='+user.email+'&'+'password='+user.password);
    },
    logout(userData){
        return axios.get('http://localhost:3000/logout',userData);
    },    
    async getEvents(user){
       try
       { 
        const response = await axios.get('http://localhost:3000/events?'+'userId='+user.id);   
        return [null, normalizer.normalizeEvents(response.data)]
       }
       catch(e)
       {
         return  [e,null] 
       }
    },
    async addEvent(ev){
        try
        { 
          let event = normalizer.normalizeEvent(ev); 
          const response = await axios.post('http://localhost:3000/events',event);
          return [null,response.data.status]
        }
        catch(e)
        {
            return [e]
        }
       
    }
}