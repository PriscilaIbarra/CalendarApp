<template>
    <register-container>
            <register-form/>
            <register-success-alert/>
            <register-error-alert/>
    </register-container>          
</template>
<script>
import RegisterContainer from '../components/RegisterContainer.vue';
import RegisterForm from '../components/RegisterForm.vue';
import RegisterSuccessAlert from '../components/RegisterSuccessAlert';
import RegisterErrorAlert from '../components/RegisterErrorAlert';

export default {
    components:{
        RegisterContainer,
        RegisterForm,
        RegisterSuccessAlert,
        RegisterErrorAlert
    },
}
</script>