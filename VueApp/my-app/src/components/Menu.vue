<template>
  <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn
        icon
        href="/"
        >
          <v-icon
          :size="40">
            mdi-calendar
          </v-icon>
        </v-btn>
        <p
        class="
        text--white
        text-h6
        ml-2
        mr-2 mt-3
        "
        >
        CalendarApp
        <p/>
      </div>

      <v-spacer></v-spacer>
      <v-btn      
      depressed
      elevation="24"      
      raised
      rounded
      href="sign-in"
      >
      Sign In
      </v-btn>     
      <v-btn
      href="sign-up"
      text
      >
      <span class="mr-2">Sign Up</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
  </v-app-bar>
</template>
<script>
export default {
    name: 'Menu'
}
</script>