<template>
    <v-menu
     v-model="menu2"
     :close-on-content-click="false"
     transition="scale-transition"
     offset-y
     max-width="290px"
     min-width="auto"
    >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="computedDateFormatted"
              label=""
              hint="MM/DD/YYYY"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            :value="date"
            no-title
            @input="updateEvent"
          ></v-date-picker>
        </v-menu>
</template>
<script>
import {mapState} from 'vuex'

export default {
    data:()=>({        
        menu2: false
    }),
    props:['label'],
    computed: {
      ...mapState({
         dateStart: state=>state.calendar.event.startDate,
         dateEnd: state=>state.calendar.event.endDate
      }),
      date(){
        if(this.label=='start'){ 
          return this.dateStart
        }
        else{
          return this.dateEnd
        }
      }
      ,
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    watch: { 
        date () { 
            this.dateFormatted = this.formatDate(this.date) 
        },
    },
    methods: {
      updateEvent(e){
        this.menu2 = false;
        let  inputName = (this.label=='start'?'startDate':'endDate');
        this.$store.dispatch('calendar/updateEventAttributes',{name:inputName,value:e});
      }
      ,
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
}
</script>