<template>
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
</template>
<script>
export default {
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