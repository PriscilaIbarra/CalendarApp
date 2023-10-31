<template>
    <v-card
    elevation="24"
    outlined
    shaped
    class="animate__animated 
    animate__slideInLeft"
    >
    <v-card-title
    class="
    primary 
    white--text
    ">
      Sign In       
    </v-card-title>
    <v-container>
        <v-form
        ref="form"
        v-model="valid"
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
                 ></v-text-field>                
                <v-text-field
                v-model="user.password"
                filled
                prepend-inner-icon="mdi-lock"               
                label="Password"
                :type="'password'"
                autocomplete="true"   
                :error-messages="passwordErrors"
                @input="$v.user.password.$touch()"
                @blur="$v.user.password.$touch()"
                v-on:keyup.enter="login"
                ></v-text-field>               
                <v-btn
                color="primary"
                class="mr-4"
                @click="login"
                >
                Sign In
                </v-btn>
        </v-form>    
        </v-container>
    </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate' 
import { required, email} from 'vuelidate/lib/validators'

export default {  
    mixins: [validationMixin], 
    data:()=>({  
        user:{
          email:'',
          password:'',
        }
    }),
    validations:{
        user:{
          email:{
              required,
              email
          },
          password:{
             required
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
        return errors
      }
    },    
    methods:{
      login(){
        if(!this.$v.user.$invalid)this.$store.dispatch('user/login',this.user); 
      }
    }
}
</script>