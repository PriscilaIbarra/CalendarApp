import axios from 'axios'
export default {
    authenticateUser(user){        
         return axios.get('http://localhost:3000/login',user);
    }
}