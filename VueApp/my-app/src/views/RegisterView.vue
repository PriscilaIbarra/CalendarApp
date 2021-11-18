<template>
     <v-container>
         <v-row justify="center">
            <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            >
             <register-form/>
            </v-col>
         </v-row>
     </v-container>        
</template>
<script>
import RegisterForm from '../components/RegisterForm.vue'
export default {
    components:{
        RegisterForm
    }
}
</script>