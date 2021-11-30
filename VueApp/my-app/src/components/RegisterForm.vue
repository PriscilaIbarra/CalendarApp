<template>
    <v-card
    elevation="24"
    outlined
    shaped
    class="
    animate__animated 
    animate__slideInLeft"
    >
    <v-card-title
    class="
    primary 
    white--text
    ">
      Sign Up       
    </v-card-title>
    <v-container>
        <v-form
        >
                <v-text-field
                v-model="user.email"
                filled
                prepend-inner-icon="mdi-email"               
                label="E-mail"
                :type="'email'"
                :error-messages="emailErrors"
                @input="$v.user.email.$touch()"
                @blur="$v.user.email.$touch()"
                autocomplete
                required               
                ></v-text-field>               
                <v-text-field
                v-model="user.password"
                filled
                prepend-inner-icon="mdi-lock"                
                label="Password"
                :type="'password'"
                :error-messages="passwordErrors"
                @input="$v.user.password.$touch()"
                @blur="$v.user.password.$touch()"
                autocomplete
                ref="password"
                required
                ></v-text-field> 
                <v-text-field
                v-model="user.confirmation"
                filled
                prepend-inner-icon="mdi-lock"              
                label="Confirm password"
                :type="'password'"
                ref="confirmation"
                required 
                :error-messages="confirmationErrors"
                @input="$v.user.confirmation.$touch()"
                @blur="$v.user.confirmation.$touch()"
                autocomplete
                v-on:keyup.enter="register"          
                ></v-text-field> 
                <v-btn
                color="primary"
                class="mr-4"
                @click="register"
                >
                Register
                </v-btn>
        </v-form>
        </v-container>
    </v-card>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required,minLength, email,sameAs} from 'vuelidate/lib/validators'

export default { 
  mixins: [validationMixin],
  data:()=>({    
      user:{
        email:'',
        password:'',
        confirmation:'',
      }    
  }),  
  validations:{
    user:{
      email:{
        required,
        email
      },
      password:{
        required,
        minLength:minLength(8),
        sameAs:sameAs('confirmation')
      },
      confirmation:{
        required,
        sameAs:sameAs('password')
      }
    }
  },
  computed:{     
      emailErrors(){
        const errors = []
        if(!this.$v.user.email.$dirty) return errors
        !this.$v.user.email.required && errors.push('Email is required')
        !this.$v.user.email.email && errors.push('Invalid format')
        return errors
      },
      passwordErrors(){
        const errors = []
        if(!this.$v.user.password.$dirty) return errors
        !this.$v.user.password.required && errors.push('Password is required')
        !this.$v.user.password.minLength && errors.push('Password must has at least 8 characters')
        !this.$v.user.password.sameAs && errors.push('Password must match')
        return errors
      },
      confirmationErrors(){
        const errors = []
        if(!this.$v.user.confirmation.$dirty) return errors
        !this.$v.user.confirmation.required && errors.push('Repeat the password to confirm')
        !this.$v.user.confirmation.sameAs && errors.push('Password must match')
        return errors
      }
    }
    ,
    methods:{ 
      clean(){
        this.user.email = '';
        this.user.password = '';
        this.user.confirmation = '';
        this.$v.$reset();
      },
      register(){       
        if(!this.$v.user.$invalid){
            let newUser = {"email":this.user.email,"password":this.user.password};
            this.$store.dispatch('user/register',newUser);
            this.clean();                                  
        }       
      },     
    },   
}
</script>