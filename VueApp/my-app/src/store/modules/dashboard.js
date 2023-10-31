const state = () =>({
    menu:{
        options:[
            {
                id:1,
                name:'Calendar',
                icon:'mdi-calendar-check',
                path:'/dashboard/calendar'
            }
            ,
            {
                id:2,
                name:'Logout',
                icon:'mdi-logout',
                path:'/logout'
            }
        ]
    }
});

const getters = {
    menu: state => state.menu
}

const actions = {}
const mutations = {}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}