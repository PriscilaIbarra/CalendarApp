import store from '../../src/store'
import user from '../../src/store/modules/user'

const {mutations} = user;

describe('mutations',()=>{
    it('Set user data after login',()=>{
        const state = {
            isAuthenticated : false,
            status:'',
            token:'',
            user:{
                id:'',
                email:'',
                password:'',       
                }
        }
        mutations.SET_USER(state,{id:1,email:'a@gmail.com'});
        expect(state.user).toStrictEqual({id:1,email:'a@gmail.com',password:''})
    })
});

describe('mutations',()=>{
    it('Update login form input',()=>{
        const state = {
            isAuthenticated : false,
            status:'',
            token:'',
            user:{
                id:'',
                email:'',
                password:'',       
                }
        }
        mutations.UPDATE_USER(state,{name:'email',value:'a@gmail.com'});
        expect(state.user).toStrictEqual({id:'',email:'a@gmail.com',password:''})
    })
});