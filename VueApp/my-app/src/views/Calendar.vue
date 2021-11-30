<template>
    <v-spacer class="mt-n8">
        <v-container 
        :md="8"
        :sm="8"
        :xs="8"
        >
            <EventAlertSuccess/>
            <EventAlertError/>
            <Calendar/>
        </v-container>
    </v-spacer> 
</template>
<script>
import Calendar from '../components/Calendar.vue'
import EventAlertError from '../components/EventAlertError.vue'
import EventAlertSuccess from '../components/EventAlertSuccess.vue'
export default {
    components:{
        Calendar,
        EventAlertError,
        EventAlertSuccess
    },
}
</script>