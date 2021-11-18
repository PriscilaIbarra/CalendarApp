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
                <span class="white--text text-h5">AB</span>
            </v-avatar>
        </v-row>
        <v-row 
            justify="space-around"
            class="mb-3"
        >
            aaaaaaa@gmail.com
        </v-row>
    <v-divider></v-divider>
    <v-list nav dense>
    <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >         
          <v-list-item :link="'/tasks'">
            <v-list-item-icon>
              <v-icon>mdi-calendar-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Calendar</v-list-item-title>
          </v-list-item>
           <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
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
    data: () => ({ drawer: null }),
  }
</script>
