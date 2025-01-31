import { createStore } from "vuex";
export default createStore({
    namespaced: true,
    state: {
        config: {
            'skin.liberty.navbar_logo_text': '정사각위키',
            //'skin.liberty.brand_color_1': '#3498db',
            //'skin.liberty.brand_dark_color_1': '#2980b9',
            //'skin.liberty.brand_bright_color_1': '#5dade2',
            //'skin.liberty.navbar_logo_image': '/assets/logo.png',
            //'skin.liberty.navbar_logo_minimum_width': '120px',
            //'skin.liberty.navbar_logo_width': '100px',
            //'skin.liberty.navbar_logo_size': 'medium',
            'skin.liberty.navbar_logo_padding': '6px',
            //'skin.liberty.navbar_logo_margin': '0px',
            //'skin.liberty.brand_color_2': '#2ecc71',
            //'skin.liberty.brand_bright_color_2': '#58d68d',
            'wiki.sitenotice': '',
            'wiki.copyright_text': '© 2025 square3ang. All rights reserved.',
            'skin.liberty.footer_html': '<p>그냥푸터</p>',
        },
        localConfig: {
            'liberty.fixed_navbar': true,
            'liberty.sidebar': 'fix',
            'wiki.hide_user_document_discuss': false,
        },
        session: {
            menus: [
                { t: 'Home', l: '/' },
                { t: 'Recent Changes', l: '/recent' },
                { t: 'Random', l: '/random' },
            ],
            gravatar_url: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro',
            account: {
                type: 1,
                name: 'JohnDoe',
                uuid: '123e4567-e89b-12d3-a456-426614174000',
            },
            user_document_discuss: false,
            quick_block: false
        },
        page: {
            data: {
                document: {
                    forceShowNamespace: false,
                    namespace: '',
                    title: '',
                },
                body: {
                    section: 'Introduction',
                    baserev: 42,
                },
                //rev: 42,
                date: '2025-01-31T12:00:00Z',
                edit_acl_message: '',
                editable: true,
            },
            viewName: 'wiki',
            title: '정사각위키',
        },
        currentTheme: 'light',
    },
    getters: {},
    mutations: {
        localConfigSetValue (state, obj) {
            switch (obj.key) {
                case "wiki.theme":
                    state.currentTheme = obj.value;
                    break;
            }
        },
        changeViewName(state, viewName) {
            //console.log('changeViewName:', viewName);
            state.page.viewName = viewName;
        },
        changePageData(state, data) {
            //console.log('changePageData:', data);
            state.page.data = data;
        }
    },
    actions: {},
    modules: {},
});