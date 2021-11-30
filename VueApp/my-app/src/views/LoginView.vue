<template>
   <login-container>
              <login-form/>
              <login-alert/>
   </login-container>       
</template>
<script>
import LoginContainer from '../components/LoginContainer.vue'
import LoginForm from '../components/LoginForm.vue'
import LoginAlert from '../components/LoginAlert.vue'
export default {
    components:{
        LoginContainer,
        LoginForm,
        LoginAlert
    },
}
</script>   