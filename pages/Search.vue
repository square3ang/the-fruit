<template>
    
</template>

<script>
export default {
    mounted() {
        console.log('commit');
        this.$store.commit("changeViewName", "search");
        this.$store.commit("changePageData", {
            document: {
                forceShowNamespace: false,
                namespace: '',
                title: "검색"
            },
            body: {
                section: '',
                baserev: 1
            },
            date: '',
            edit_acl_message: '',
            editable: false,
        });
        navigateTo("/w/" + this.$route.query.q);
    }
}
</script>