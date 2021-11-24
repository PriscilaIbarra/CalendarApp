<template>
     <v-item-group mandatory
     v-model="selected"
     >
      <v-container>
        <v-row>
          <v-col
            v-for="c in colors"
            :key="c"
          >
            <v-item v-slot="{ active, toggle }">
              <v-btn
                fab     
                rounded     
                :color="c"
                class="d-flex align-center"
                @click="selectColor(toggle,c)"
                x-small
              >
                <v-scroll-y-transition>
                  <v-icon>{{active?'':''}}</v-icon>
                </v-scroll-y-transition>
              </v-btn>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
</template>
<script>
import {mapState} from 'vuex'
export default{
    computed:{
        ...mapState({
            colors: state=>state.calendar.colors,
            selected: state=>state.calendar.event.color
        }),
    },
    methods:{
      selectColor(toggle,c){
        this.$store.dispatch('calendar/updateEvent',{name:'color',value:c});
        toggle();
      }
    }
}
</script>