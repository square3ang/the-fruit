<template>
    <div class="alert" :class="[
        theme === 'primary' ? 'alert-primary' : 'alert-danger',
        { 'alert-closable': closable },
        { 'alert-error': error }
    ]">
        <slot></slot>
        <!-- Optional close button -->
        <button v-if="closable" type="button" class="close" @click="closeAlert">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'alert',
    props: {
        theme: {
            type: String,
            default: 'primary' // or 'danger', etc.
        },
        error: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeAlert() {
            // Emit "close" event for the parent to handle
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
.alert {
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #bbb;
    border-radius: 4px;
    position: relative;
}

.alert-closable .close {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    cursor: pointer;
    background: none;
    border: none;
}

.alert-primary {
    background-color: #cce5ff;
}

.alert-danger {
    background-color: #f8d7da;
}

.alert-error {
    border-color: #dc3545;
}
</style>