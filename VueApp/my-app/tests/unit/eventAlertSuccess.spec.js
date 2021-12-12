import Vuetify from 'vuetify'
import Vuex from 'vuex'
import {createLocalVue,mount} from '@vue/test-utils'
import EventAlertSuccess from '../../src/components/EventAlertSuccess.vue'
import notifications from '../../src/store/modules/notifications'
import VuexPersistence from 'vuex-persist'; 

const localVue = createLocalVue();
/*localVue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

describe("EventAlertSuccess.vue",()=>{

        const vuetify = new Vuetify();

        const store = new Vuex.Store({  
                        modules: {
                            notifications:notifications,
                        },
                        plugins: [vuexLocal.plugin],
        });

        store.dispatch = jest.fn()
    
    it("Test Component mounts properly", async ()=>{
        const wrapper = mount(EventAlertSuccess,{
                   localVue,
                   vuetify,
                   store
        });
         //await store.dispatch('notifications/notifyAddEventSuccess',{},{root:true});
         //let alert = wrapper.get('[data-test-id="msg"]')
         expect(wrapper.html()).toMatchSnapshot()
         expect(alert.text()).toBe('The event has been registered successfuly')
    });
   
})
*/
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