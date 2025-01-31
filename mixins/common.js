// common.js
// Example mixin for shared methods or data across components
export default {
    methods: {
        doc_action_link(documentObj, action) {
            // Build a link path for a document action
            // Adjust according to your routing structure
            const namespace = documentObj.namespace ? encodeURIComponent(documentObj.namespace) : '';
            const title = documentObj.title ? encodeURIComponent(documentObj.title) : '';
            return `/${action}/${namespace}:${title}`;
        },
        user_doc(username) {
            // Create user document name or path
            // Adjust to your app’s naming convention
            return { namespace: '사용자', title: username };
        },
        contribution_link(uuid) {
            // Example path to user’s document contributions
            return `/w/member/contributions/${uuid}`;
        },
        contribution_link_discuss(uuid) {
            // Example path to user’s discussion contributions
            return `/w/member/contributions_discuss/${uuid}`;
        },
        onDynamicContentClick(event) {
            // In some cases, you may have dynamic content that requires
            // custom handling for clicked links or elements
            console.log('Dynamic content clicked:', event.target);
        }
    }
};