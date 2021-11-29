<template>
  <v-app>
   <Menu/>
   <router-view></router-view>
  </v-app> 
</template>
<script>
import Menu from '../components/Menu.vue'
export default {
  name:'home',
  components:{
    Menu,
  },
}
</script>
