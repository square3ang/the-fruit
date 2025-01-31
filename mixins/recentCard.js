export default {
    props: {
        recent: {
            type: Array,
            default: () => []
        },
        limit: {
            type: Number,
            default: 10
        }
    },
    methods: {
        doc_action_link(document, action) {
            // Implement the logic to generate the document action link
            return `/document/${document}/${action}`;
        },
        getDateType(date) {
            // Implement the logic to determine the date format
            return 'YYYY-MM-DD';
        }
    }
};