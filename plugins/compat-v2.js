import { NuxtPage } from "#components";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('nuxt', NuxtPage)
});