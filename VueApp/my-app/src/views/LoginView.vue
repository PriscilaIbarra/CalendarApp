<template>
    <v-app
    >
    <v-container 
    >
         <v-row justify="center">
            <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            >
              <login-form 
              class="animate__animated animate__slideInLeft"
              />
              <v-alert
              class="mt-2"
              border="top"
              color="red"
              dismissible
              type="error"             
              v-if="msg"              
              >
              {{msg}}
                <template v-slot:close="{toggle}">
                     <v-btn 
                     icon
                     fab x-small
                     color="bg-black"
                     dark
                     @click="close(toggle)">
                         <v-icon>
                             mdi-close
                        </v-icon>
                     </v-btn>   
                </template>
              </v-alert>
            </v-col>
         </v-row> 
    </v-container>
    </v-app>
</template>
<script>
import LoginForm from '../components/LoginForm.vue'

export default {
    components:{
        LoginForm
    },
    computed:{
      msg(){
          return this.$store.state.notifications.authError 
      }     
    },
    methods:{
        close(toggle){
            this.$store.dispatch('notifications/cleanNotification','authError')
            toggle()
        }
    }
}
</script>   