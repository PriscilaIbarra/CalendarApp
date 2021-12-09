<template>
     <v-container fluid>
        <v-form 
        :disabled="edit"
        ref="eventForm"
        :value="valid"
        >
         <v-row>
             <v-col         
             >
              <v-text-field
              label="Add title"
              name="name"
              :value="name"
              @input="updateEventAttributes"
              :rules="nameRules"
              ></v-text-field>  
             </v-col>
         </v-row>
         <sup>From</sup>
         <DateTimePicker :label="'start'" class="mt-n6"/>
         <sup>To</sup>
         <DateTimePicker :label="'end'" class="mt-n6"/> 
         <ColorPicker/>
         </v-form>
     </v-container>    
</template>
<script>
import { mapState , mapGetters} from 'vuex'
import DateTimePicker from './DateTimePicker.vue'
import ColorPicker from './ColorPicker.vue'

export default {
     components:{
       DateTimePicker,
       ColorPicker,
     },
     computed:{
       ...mapState({
          name : state =>state.calendar.event.name,
          edit : state =>state.calendar.showEditBtn,
          check: state =>state.calendar.check
        }),
        ...mapGetters({
          nameRules:'calendar/nameRules'
        }),
        validate(){ alert(this.$refs.eventForm.validate())
          if(this.check){ 
            this.$store.dispatch('calendar/validateForm',this.$refs.eventForm.validate())
            return true
          }
          else{
            return false
          }
        }
     },
     methods:{
       updateEventAttributes(e){ 
         this.$store.dispatch('calendar/updateEventAttributes',{name:'name',value: e.trim()});
       }
     },
     mounted(){
       this.validate();
     }
}
</script>