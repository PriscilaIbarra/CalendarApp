import Vuetify from 'vuetify'
import {createLocalVue,mount} from '@vue/test-utils'
import EventAlertSuccess from '../../src/components/EventAlertSuccess.vue'


const localVue = createLocalVue();

describe("EventAlertSuccess.vue",()=>{
    const vuetify = new Vuetify();    
    it("Test Component mounts properly", async ()=>{
        const wrapper = mount(EventAlertSuccess,{
                   localVue,
                   vuetify,
                   computed:{
                       msg(){
                          return 'The event has been registered successfuly'
                       }
                   }
        });
        let alert = wrapper.get('[data-test="msg"]')
        expect(alert.text()).toBe('The event has been registered successfuly')
    });
    it("Component do not render if msg is empty", async ()=>{
        const wrapper = mount(EventAlertSuccess,{
                   localVue,
                   vuetify,
                   computed:{
                       msg(){
                          return ''
                       }
                   }
        });
        expect(wrapper.html()).toBe('')
    });
   
})