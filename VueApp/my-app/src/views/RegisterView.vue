<template>
     <v-container>
         <v-row justify="center">
            <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            >
             <register-form
             class="animate__animated 
             animate__slideInLeft"
             />
             <register-success-alert/>
             <register-error-alert/>
            </v-col>
         </v-row>
     </v-container>        
</template>
<script>
import RegisterForm from '../components/RegisterForm.vue'
import RegisterSuccessAlert from '../components/RegisterSuccessAlert';
import RegisterErrorAlert from '../components/RegisterErrorAlert';

export default {
    components:{
        RegisterForm,
        RegisterSuccessAlert,
        RegisterErrorAlert
    },
}
</script>