 import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    draw_value : "",
    input_value : "",
    upload_value : "",
    params : [],
    swiperWhat: "",
}
const getters = {
    getDrawValue(state) {
        return state.draw_value
    },
    getInputValue(state) {
        return state.input_value  
    },
    getUploadValue(state) {
        return state.upload_value
    },
    getParams(state) {
        return state.params
    },
    getSwiperWhat(state) {
        return state.swiperWhat
    }
}
const mutations = {
    DrawValue(state, DrawValue) {
        state.draw_value = DrawValue
    },
    InputValue(state, InputValue) {
        state.input_value = InputValue
    },
    Params(state, paramList) {
        state.params = paramList
    },
    SwiperWhat(state, swiperValue) {
        state.swiperWhat = swiperValue
    }
}
const actions = {
    setDrawValue(context, DrawValue) {
        context.commit('DrawValue', DrawValue)
    },
    setInputValue(context, inputValue){
        context.commit('InputValue', inputValue)
    },
    setParams(context, paramList){
        context.commit('Params', paramList)
    },
    setSwiperWhat(context, swiperValue){
        context.commit('SwiperWhat', swiperValue)
    }
    
    // 使用 this.$store.dispatch('setSwiperWhat', "draw")
    // this.$store.getters.getDrawValue;
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
 
export default store;