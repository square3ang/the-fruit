<template>
    
</template>

<script>
export default {
    mounted() {
        console.log('commit');
        this.$store.commit("changeViewName", "license");
        this.$store.commit("changePageData", {
            document: {
                forceShowNamespace: false,
                namespace: '',
                title: "License"
            },
            body: {
                section: '',
                baserev: 1
            },
            date: '',
            edit_acl_message: '',
            editable: false,
        });
    }
}
</script>