import VueFinalModal from 'vue-final-modal';

export default defineNuxtPlugin((nuxtApp) => {
    // here you can register simply
    nuxtApp.vueApp.use(VueFinalModal());

});