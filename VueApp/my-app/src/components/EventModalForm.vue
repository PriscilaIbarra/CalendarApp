<template>
        <v-dialog
          v-model="show"
          transition="dialog-top-transition"
          max-width="600"
        >       
            <v-card
            rounded="t-xl"
            class="rounded-b-xl"
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
                    v-if="showAddBtn"
                    class="rounded-pill"
                    color="primary"
                    @click="add"
                    >Add
                    </v-btn>
                    <v-btn
                    v-if="showEditBtn"
                    color="primary"
                    fab
                    small
                    dark
                    @click="edit"
                    >
                       <v-icon>
                         mdi-pencil
                       </v-icon>
                    </v-btn>
                    <v-btn
                    v-if="showSaveBtn"
                    class="rounded-pill"
                    color="primary"
                    @click="update"
                    >save</v-btn>
              </v-toolbar>
              <v-card-text>
                 <event-form/>
                 <delete-event-dialog/>
                 <event-errors-dialog/>
              </v-card-text>
              <v-card-actions 
              class="mt-n4"
              >
                 <v-spacer/>
                      <v-icon
                      color="red"
                      v-if="showDelBtn"
                      @click="deleteEvent"
                      >
                        mdi-delete
                      </v-icon>
              </v-card-actions>
            </v-card> 
        </v-dialog>
</template>
<script>
import EventForm from './EventForm.vue'
import DeleteEventDialog from './DeleteEventDialog.vue'
import EventErrorsDialog from'./EventErrorsDialog.vue'
import {mapState, mapGetters} from 'vuex'

export default {
    components:{
      EventForm,
      DeleteEventDialog,
      EventErrorsDialog
    },
    computed:{
        ...mapState({
            show : state => state.calendar.showDialog,
            color: state =>state.calendar.event.color,
            showAddBtn:state=>state.calendar.showAddBtn,
            showEditBtn:state=>state.calendar.showEditBtn,
            showSaveBtn: state=>state.calendar.showSaveBtn,
            showDelBtn: state =>state.calendar.showDelBtn,
        }),
        ...mapGetters({
           nameRules:'calendar/nameRules',
           dateFromRules:'calendar/dateFromRules',
           dateToRules:'calendar/dateToRules',
           timeFromRules:'calendar/timeFromRules',
           timeToRules:'calendar/timeToRules',
           colorRules:'calendar/colorRules'
        }),
        formStatus(){
          return this.nameRules.status &&
                 this.dateFromRules.status &&
                 this.dateToRules.status &&
                 this.timeFromRules.status &&
                 this.timeToRules.status &&
                 this.colorRules.status
        }
    },
    methods:{
        close(){
          this.$store.dispatch('calendar/cleanEventModalForm');
          this.$store.dispatch('calendar/closeEventModalForm');
        },
        add(){ 
          if(this.formStatus) this.$store.dispatch('calendar/addEvent');
          if(!this.formStatus) this.$store.dispatch('calendar/showErrorsDialog');
        },
        edit(){
          this.$store.dispatch('calendar/enableForm');
        },
        update(){         
          if(this.formStatus) this.$store.dispatch('calendar/updateEvent');
          if(!this.formStatus) this.$store.dispatch('calendar/showErrorsDialog');
        },
        deleteEvent(){
          this.$store.dispatch('calendar/showDeleteDialog');
        }
    }
}
</script>