<template>
    <v-card
    elevation="24"
    outlined
    shaped
    >
    <v-card-title
    class="
    primary 
    white--text
    ">
      Sign In       
    </v-card-title>
    <v-container>
        <form>
                <v-text-field
                v-model="email"
                filled
                prepend-inner-icon="mdi-email"               
                label="E-mail"
                :type="'email'"
                required        
                ></v-text-field>
                <v-text-field
                v-model="password"
                filled
                prepend-inner-icon="mdi-lock"               
                label="Password"
                :type="'password'"
                autocomplete="true" 
                required               
                ></v-text-field>               
                <v-btn
                color="primary"
                class="mr-4"
                @click="login"
                >
                Sign In
                </v-btn>
        </form>       
        </v-container>
    </v-card>
</template>
<script>

export default {   
    computed:{    
      email:{
        get(){  
         return this.$store.state.user.email
        },
        set(val){
          this.$store.dispatch('user/updateUser',{name:'email',value:val});
        }
      }
      ,
     password:{
        get(){ 
          return this.$store.state.user.password
        },
        set(val){
          this.$store.dispatch('user/updateUser',{name:'password',value:val})
        }
     }
  
    },
    methods:{
      login(){
        this.$store.dispatch('user/login');       
      }
    }
}
</script>