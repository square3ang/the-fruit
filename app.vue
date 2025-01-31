<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout name="liberty-layout" />
    <div>
        <modals-container class="modal-inset modal-fixed" />
    </div>

</template>

<style>
    @import "css/default.css"
</style>

<script>

export default {
    computed: {
        currentTheme() {
            return this.$store.state.currentTheme;
        }
    },
    watch: {
        currentTheme(newTheme, oldTheme) {
            if (newTheme === 'dark') {
                document.body.classList.add('theseed-dark-mode');
            } else {
                document.body.classList.remove('theseed-dark-mode');
            }
        }
    },
    mounted() {
    }
}
</script>