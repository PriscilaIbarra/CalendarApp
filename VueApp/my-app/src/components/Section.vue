<template>
      <v-section>
          <v-row class="mt-14 mb-14" v-if="reverse">
            <v-col>
                <v-img
                max-height="600"
                max-width="600"
                :src="imgPath"
                />
            </v-col>
            <v-col>
                <h3
                class=
                "
                ml-4
                font-weight-medium
                align-right
                text-h2
                "
                >
                 {{title}}
                 </h3> 
                 <p
                 class="
                 mt-6
                 ml-4
                 align-right
                 text-h6
                 font-weight-regular
                 grey-lighten-2--text
                 "
                 >
                    {{description}}
                 </p>
            </v-col>
          </v-row>
          <v-row class="mt-14 mb-14" v-else>
            <v-col>
                <h3
                class=
                "
                font-weight-medium
                align-left
                text-h2
                "
                >
                 {{title}}
                 </h3> 
                 <p
                 class="
                 mt-6
                 align-left
                 text-h6
                 font-weight-regular
                 grey-lighten-2--text
                 "
                 >
                    {{description}}
                 </p>
                <v-btn 
                v-if="id==0"
                depressed
                color="black"
                elevation="24"      
                raised
                class="white--text"
                rounded
                href="sign-in"
                >
                Sign In
                </v-btn> 
                <v-btn
                v-if="id==0"
                depressed
                raised
                class="ml-3"
                color="grey lighten-2"
                rounded
                href="sign-up"
                >
                <span class="mr-2">Sign Up</span>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
            </v-col>
            <v-col>
               <v-img
                max-height="600"
                max-width="600"
                :src="imgPath"
                />
            </v-col>
          </v-row>
        </v-section>
</template>
<script>
export default {
    props:[
        'id',
        'title',
        'description',
        'imgPath',
        'reverse'
    ]
}
</script>
<style>
.wrapper {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.typing-title {
  width: 12ch;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}
.typing-text{
  width: 400ch;
  animation: typing 2s steps(50), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  20% {
    border-color: transparent;
  }
}
</style>
