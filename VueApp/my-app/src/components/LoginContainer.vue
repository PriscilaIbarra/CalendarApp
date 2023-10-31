<template>
    <v-app
    >
    <app-menu/>
    <v-container 
    >
         <v-row justify="center">
            <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            >
            <slot>
                
            </slot>
            </v-col>
         </v-row> 
    </v-container>
    </v-app>        
</template>
<script>
import Menu from '../components/Menu.vue'
export default {
    components:{
       'app-menu':Menu
    }
}
</script>