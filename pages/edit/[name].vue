<template>
    <h1>{{ $route.params.name }} edit</h1>
</template>

<script>
export default {
    mounted() {
        console.log('commit');
        this.$store.commit("changeViewName", "edit");
        var namesplit = this.$route.params.name.split(':');
        this.$store.commit("changePageData", {
            document: {
                forceShowNamespace: namesplit.length > 1,
                namespace: namesplit.length > 1 ? namesplit[0] : '문서',
                title: namesplit.length > 1 ? namesplit[1] : namesplit[0]
            },
            body: {
                section: '',
                baserev: 1
            },
            date: '2025-01-31T12:00:00Z',
            edit_acl_message: '',
            editable: true,
        });
    }
}
</script>