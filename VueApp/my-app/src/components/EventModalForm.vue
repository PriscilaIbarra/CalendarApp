<template>
        <v-dialog
          v-model="show"
          transition="dialog-top-transition"
          max-width="600"
        >       
            <v-card
            rounded="t-xl"
            >
              <v-toolbar
              :color="!!color?color:'white'"
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
                    @click="add"
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
            show : state => state.calendar.showDialog,
            color: state =>state.calendar.event.color
        })
    },
    methods:{
        close(){
            this.$store.dispatch('calendar/closeEventModalForm');
        },
        add(){
          this.$store.dispatch('calendar/addEvent');
        }
    }
}
</script>