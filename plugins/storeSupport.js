import store from "./store";  	// Vuex 추가 

export default defineNuxtPlugin((nuxtApp) => {
    // here you can register simply
    nuxtApp.vueApp.use(store);

});