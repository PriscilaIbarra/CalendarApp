<template>
  <v-app
  >
    <app-menu/>
    <v-container
    class="mt-6"
    > 
        <app-section
         v-for="section in sections"
         :key="section.id"
         :id="section.id"
         :title="section.title"
         :description="section.description"
         :imgPath="section.imgPath"
         :reverse="section.reverse"
        />
    </v-container>   
  </v-app> 
</template>
<script>
import Menu from '../components/Menu.vue'
import Section from '../components/Section.vue'

export default {
  name:'home',
  components:{
    'app-menu': Menu,
    'app-section': Section
  },
  data:()=>({
    sections:[
      {
        id:0,
        title:'Calendar Lorem Ipsum is simply dummy ',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        imgPath:'../images/undraw_online_calendar_re_wk3t.svg',
        reverse:false
      }
      ,
      {
        id:1,
        title:'Calendar Lorem Ipsum is simply dummy ',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        imgPath:'../images/undraw_online_organizer_ofxm.svg',
        reverse:true
      }
      ,
      {
        id:2,
        title:'Calendar Lorem Ipsum is simply dummy ',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        imgPath:'../images/undraw_calendar_re_ki49.svg',
        reverse:false
      }
    ]
  })
}
</script>
<style>
.wrapper {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.typing-demo {
  width: 12ch;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
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
  50% {
    border-color: transparent;
  }
}
</style>
