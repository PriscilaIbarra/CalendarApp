<template>
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
</template>
<script>
export default {
    computed:{
      msg(){
          return this.$store.state.notifications.eventError
      }     
    },
    methods:{
        close(toggle){
            this.$store.dispatch('notifications/cleanNotification','eventError')
            toggle()
        }
    }
}
</script>