import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Dashboard from '../components/Dashboard.vue'
import Calendar from '../views/Calendar.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }
  ,
  {
    path:'/sign-in',
    name:'SignIn',
    component: LoginView
  }
  ,
  {
    path:'/sign-up',
    name:'SignUp',
    component: RegisterView
  }
  ,
  {
    beforeEnter:(to,from,next) =>{  
      if(store.state.user.isAuthenticated){
        next()
        return 
      }
      next('/sign-in')
    }, 
    path:'/dashboard',
    name:'Dashboard',
    component: Dashboard,    
    children:[
      {
        path:'/dashboard/calendar',
        name:'Calendar',
        component: Calendar
      },
      {
        path:'/logout',
        beforeEnter:(to,form,next)=>{
          store.dispatch('user/logout').then(()=>next('/'))                
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
