<template>
     <v-container>
         <v-row justify="center">
            <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            >
             <register-form/>
              <v-alert
              class="mt-2"
              border="top"
              color="green"
              dismissible
              type="success"             
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
</template>
<script>
import RegisterForm from '../components/RegisterForm.vue'
export default {
    components:{
        RegisterForm
    },
    computed:{
      msg(){ 
          return this.$store.state.notifications.registerSuccess
      }  
    },
    methods:{
        close(toggle){
            this.$store.dispatch('notifications/cleanNotification','registerSuccess')
            toggle()
        }
    }
}
</script>