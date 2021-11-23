<template>
    <v-spacer>
        <v-container>
            <v-alert
              class="mt-1"
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
            <Calendar/>
        </v-container>
    </v-spacer>
</template>
<script>
import Calendar from '../components/Calendar.vue'
export default {
    components:{
        Calendar
    },
    computed:{
      msg(){
          return this.$store.state.notifications.getEventsError
      }     
    },
    methods:{
        close(toggle){
            this.$store.dispatch('notifications/cleanNotification','getEventsError')
            toggle()
        }
    }
}
</script>