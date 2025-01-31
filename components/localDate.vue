<template>
    <span>{{ formattedDate }}</span>
</template>

<script>
export default {
    name: 'local-date',
    props: {
        date: {
            type: String, // or Date
            required: true
        }
    },
    computed: {
        formattedDate() {
            // Simple example to display a date using toLocaleString
            // Adjust based on your locale or formatting library
            const d = new Date(this.date);
            if (isNaN(d.getTime())) {
                return 'Invalid Date';
            }
            return d.toLocaleString();
        }
    }
};
</script>