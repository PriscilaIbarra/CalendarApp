<template>
    <v-row class="mt-n4">
             <v-col>
               <DatePicker :label="label"/>
             </v-col>
             <v-col>
               <TimePicker :label="label"/>  
             </v-col>
    </v-row>
</template>
<script>
import DatePicker from './DatePicker.vue'
import TimePicker from './TimePicker.vue'


export default {
     components:{
        DatePicker,
        TimePicker
     },
     props:['label'],
}
</script>