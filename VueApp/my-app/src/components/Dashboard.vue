<template>  
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
        <v-row justify="space-around" class="mb-3 mt-3">
            <v-avatar 
            color="primary"
            align="center"
            size="80"
            >
                <span class="white--text text-h5">
                  {{user.email.split('@')[0].substring(0,2)}}
                </span>
            </v-avatar>
        </v-row>
        <v-row 
            justify="space-around"
            class="mb-3"
        >
            {{user.email}}
        </v-row>
    <v-divider></v-divider>
    <v-list nav dense>
          <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          >         
              <v-list-item 
              v-for="option in menu.options"
              :key="option.id"
              :href="option.path"
              >
                <v-list-item-icon>
                  <v-icon>{{option.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{option.name}}</v-list-item-title>
              </v-list-item>
        </v-list-item-group>       
    </v-list>
    </v-navigation-drawer>

    <v-app-bar
     color="primary"
     class="white--text"
     app>
      <v-app-bar-nav-icon 
      class="white--text" 
      @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-spacer/>
         <v-toolbar-title>Calendar</v-toolbar-title>     
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: false }),
    computed:{
      user(){
        return this.$store.state.user.user
      },
      menu(){
        return this.$store.state.dashboard.menu
      }
    }
  }
</script>
