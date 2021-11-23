<template>
        <v-dialog
          v-model="show"
          transition="dialog-top-transition"
          max-width="600"
        >       
            <v-card>
              <v-toolbar
              color="white"
              dark
              >              
                    <v-btn
                    icon      
                    color="grey darken-1"              
                    @click="close"
                    >
                    <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-spacer/>
                    <v-btn
                    class="rounded-pill"
                    color="primary"
                    @click="close"
                    >Add</v-btn>
              </v-toolbar>
              <v-card-text>
                 <EventForm/>
              </v-card-text>
            </v-card>        
        </v-dialog>
</template>
<script>
import EventForm from './EventForm.vue'
import {mapState} from 'vuex'

export default {
    components:{
      EventForm
    },
    computed:{
        ...mapState({
            show : state => state.calendar.showDialog
        })
    },
    methods:{
        close(){
            this.$store.dispatch('calendar/closeEventModalForm');
        }
    }
}
</script>