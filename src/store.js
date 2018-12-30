import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navigation:"ideas",
        xlnavigation: "homemenu"
    },
    mutations: {
        updateState(state, text){
            state.navigation = text;
        },
        updateXLState(state, text){
            state.xlnavigation = text;
        }
    },
    actions: {
        updateStateVal({commit},context){
            commit('updateState', context)
        },
        updateXLStateVal({commit},context){
            commit('updateXLState', context)
        }
    }
});
