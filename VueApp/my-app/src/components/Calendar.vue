<template>
  <div>
    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="align-left"
        label="type"
      ></v-select>
      <v-spacer></v-spacer>
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="align-right"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>   
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @click:date="showEventForm"    
        @click:event="showEvent"    
        @change="getEvents"
      ></v-calendar>
    </v-sheet>    
    <event-modal-form/>
  </div>
</template>
<script>
import EventModalForm from './EventModalForm.vue'
import {mapState} from 'vuex'

export default {
  components:{
    EventModalForm
  },
  data:()=>({
    type: "month",
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] }
    ],
    value: "",    
  }),
  computed:{
    ...mapState({        
        events: state =>state.calendar.events,
        colors: state=>state.calendar.colors
     })
  },
  methods: {
    showEvent({event}){ 
      this.$store.dispatch('calendar/showModalFormForEditEvent',event);
    },
    showEventForm({date}){
      this.$store.dispatch('calendar/showModalFormForAddEvent',date);
    },
    getEvents() {
      return this.events;
    },
    getEventColor(event) {
      return event.color;
    },    
  },
  mounted(){
    this.$store.dispatch('calendar/getEvents',this.$store.state.user.user);
  }
};
</script>
