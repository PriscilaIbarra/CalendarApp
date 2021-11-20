import axios from 'axios'
export default {
    registerUser(user){
        return axios.post('http://localhost:3000/users',user);
    },
    authenticateUser(user){        
        return axios.get('http://localhost:3000/login',user);
    },
    logout(userData){
        return axios.get('http://localhost:3000/logout',userData);
    }
}