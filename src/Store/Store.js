import Vue from 'vue'
import Vuex from 'vuex';
import slideData from '../../data/dataSLides.json'

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        a: slideData
    },
    mutations: {
        // increment (state) {
        //     state.a
        // }
    },
});