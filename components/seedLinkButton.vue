<template>
    <button @click="navigate" class="seed-link-button">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'seed-link-button',
    props: {
        to: {
            type: String,
            required: true
        }
    },
    methods: {
        navigate() {
            // Example: assume this is a Nuxt environment with $router
            this.$router.push(this.to);
        }
    }
};
</script>

<style scoped>
.seed-link-button {
    /* Basic styling for a link button */
    background-color: #4188f1;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin: 0.25rem;
}

.seed-link-button:hover {
    background-color: #3069b6;
}
</style>