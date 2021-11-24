<template>
  <v-dialog
  ref="dialog"
  v-model="modal2"
  :return-value.sync="time_input"
  persistent
  width="290px"
  >
        <template 
        v-slot:activator="{ on, attrs }"
        >
            <v-text-field
            :value="time"
            label=""
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            @input="updateEvent"
            v-bind="attrs"
            v-on="on"
            ></v-text-field>
        </template>
        <v-time-picker
        v-if="modal2"
        :value="time"
        @input="updateEvent"
        full-width
        >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="primary"
                    @click="modal2 = false"
                >
                Cancel
                </v-btn>
                <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(time)"
                >
                OK
                </v-btn>
        </v-time-picker>
    </v-dialog>    
</template>
<script>
import {mapState} from 'vuex'

export default{
    props:['label'],
    data:()=>({
        modal2: false,
    }),
    computed:{
        ...mapState({
            startTime: state=>state.calendar.event.startTime,
            endTime: state=>state.calendar.event.endTime
        }),
        time(){
            if(this.label=='start'){
                return this.startTime;
            }
            else{
                return this.endTime;
            }
        }
    },
    methods:{
        updateEvent(e){
            let selectedLabel = (this.label=='start'?'startTime':'endTime');
            this.$store.dispatch('calendar/updateEvent',{name:selectedLabel,value:e});
        }
    }
}
</script>