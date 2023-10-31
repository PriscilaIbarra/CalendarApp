<template>
   <calendar-container>
            <event-alert-success/>
            <event-alert-error/>
            <calendar/>
   </calendar-container>
</template>
<script>
import CalendarContainer from '../components/CalendarContainer.vue'
import Calendar from '../components/Calendar.vue'
import EventAlertError from '../components/EventAlertError.vue'
import EventAlertSuccess from '../components/EventAlertSuccess.vue'

export default {
    components:{
        CalendarContainer,
        Calendar,
        EventAlertError,
        EventAlertSuccess
    },
}
</script>