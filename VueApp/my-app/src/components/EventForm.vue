<template>
     <v-container fluid>
         <v-row>
             <v-col         
             >
              <v-text-field
              label="Add title"
              :value="name"
              @input="updateEvent"
              required
              ></v-text-field>  
             </v-col>
         </v-row>
         <sup>From</sup>
         <DateTimePicker :label="'start'" class="mt-n6"/>
         <sup>To</sup>
         <DateTimePicker :label="'end'" class="mt-n6"/> 
         <ColorPicker/>
     </v-container>    
</template>
<script>
import DateTimePicker from './DateTimePicker.vue'
import ColorPicker from './ColorPicker.vue'
import {mapState} from 'vuex'

export default {
     components:{
       DateTimePicker,
       ColorPicker
     },
     computed:{
       ...mapState({
          name : state =>state.calendar.event.name 
        })
     },
     methods:{
       updateEvent(e){ 
         this.$store.dispatch('calendar/updateEvent',{name:'name',value: e})
       }
     }
}
</script>