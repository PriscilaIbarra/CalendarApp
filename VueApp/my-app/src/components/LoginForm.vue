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
                v-model="email"
                filled
                prepend-inner-icon="mdi-email"               
                label="E-mail"
                :type="'email'"                
                :rules="emailRules"
                 ></v-text-field>                
                <v-text-field
                v-model="password"
                filled
                prepend-inner-icon="mdi-lock"               
                label="Password"
                :type="'password'"
                autocomplete="true"               
                :rules="passwordRules" 
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
export default {   
    data:()=>({  
      valid:true,   
      emailRules:[
        v=>!!v||'Email is required',
        v=> /.+@.+\..+/.test(v) ||'Invalid format'
      ],
      passwordRules:[
        v=>!!v||'Password is required'
      ]
    }),
    computed:{    
      email:{
        get(){
         return this.$store.state.user.email
        },
        set(val){
          this.$store.dispatch('user/updateUser',{name:'email',value:val.trim()});
        }
      }
      ,
     password:{
        get(){ 
          return this.$store.state.user.password
        },
        set(val){
          this.$store.dispatch('user/updateUser',{name:'password',value:val.trim()});
        }
     }     
    },    
    methods:{
      login(){
        if(this.$refs.form.validate())this.$store.dispatch('user/login'); 
      }
    }
}
</script>