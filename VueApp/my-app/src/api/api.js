import axios from 'axios'
export default {
    registerUser(user){
        return axios.post('http://localhost:3000/users',user);
    },
    authenticateUser(user){        
        return axios.get('http://localhost:3000/users?'+'email='+user.email+'&'+'password='+user.password);
    },
    logout(userData){
        return axios.get('http://localhost:3000/logout',userData);
    }
}