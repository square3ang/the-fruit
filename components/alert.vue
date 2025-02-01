<template>
    <div class="alert" :class="[
        'alert-' + theme ?? 'primary',
        { 'alert-closable': closable ?? false },
        { 'alert-error': error ?? false }
    ]">
        <div style="flex: 1;">
            <slot></slot>
            <!-- Optional close button -->
            <button v-if="closable" type="button" class="close" @click="closeAlert">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'alert',
    props: {
        theme: {
            type: String,
            default: 'danger' // or 'danger', etc.
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
    /*background-color: #f3f3f3;
    border: 1px solid #d5d5d5;*/
    border-radius: .25rem;
    -moz-column-gap: .75rem;
    column-gap: .75rem;
    display: flex;
    margin-bottom: 1.5rem;
    padding: .5rem .75rem
}

.theseed-dark-mode .alert {
    background-color: #2a2a2a;
    border-color: #484848
}

.alert-closable .close {
    background: none;
    border: none;
    color: #212529;
    color: var(--light-text-color, var(--text-color, #212529));
    display: inline-block;
    height: 1.15rem;
    margin: .05rem 0 0;
    opacity: .7;
    width: 1.15rem
}

.theseed-dark-mode .alert-closable .close {
    color: #e0e0e0;
    color: var(--dark-text-color, var(--text-color, #e0e0e0))
}

.theseed-dark-mode .alert-error {
    background-color: #3d050b;
    border-color: #861520;
    color: #eec0c0;
}
</style>