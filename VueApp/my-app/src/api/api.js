import axios from 'axios'
export default {
    authUser(user){        
         return axios.post('',user);
    }
}