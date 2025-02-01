<template>
    <alert v-if="curAlertOn" :closable=curAlertClosable :theme=curAlertTheme @close="curAlertOn = false"
        :class="curAlertClasses"><span v-html="curAlertContent"></span></alert>
    <div id="item"></div>
</template>

<script>
import alert from '~/components/alert.vue';
const curAlertClosable = ref(false);
const curAlertOn = ref(false);
const curAlertTheme = ref("primary");
const curAlertContent = ref("Err");
const curAlertClasses = ref("");
export default {
    setup() {

        return {
            curAlertClosable,
            curAlertOn,
            curAlertTheme,
            curAlertContent,
            curAlertClasses
        };
    },
    mounted() {
        console.log('commit');
        this.$store.commit("changeViewName", "wiki");
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
            edit_acl_message: '편집 권한이 부족합니다',
            editable: false,
        });
        useSeoMeta({
            title: this.$route.params.name,
            description: this.$route.params.name
        });
        window.loadAlert = function (content, type, dismissible, classes) {
            curAlertClosable.value = dismissible;
            curAlertTheme.value = type;
            curAlertContent.value = content;
            curAlertClasses.value = classes;
            curAlertOn.value = true;

        }
        //alert.render();
        fetch("/api/api/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                asdf: `[[분류:어쩔팁이ㅋ]]
{{{#!wiki style="background: linear-gradient(90deg, #555555, #bbbbbb);color:white;border-radius:15px;padding:15px;text-align:center;font-size:24px;letter-spacing: -1.1px"
정사각위키에 오신것을
환영하지 않습니다ㅋ
}}}


----
{{{#!wiki style="text-align:center;"
{{{+5 쓸데없는 정보만 가득한 위키
ㅋㅋㅋㅋㅋㅋㅋ}}}}}}
----
`
            })
        }).then(res => res.json()).then(data => {
            document.getElementById("item").innerHTML = data.api;
            document.getElementById("item").querySelectorAll("script").forEach((el) => {
                try {
                    const scriptContent = el.textContent.trim();
                    if (scriptContent) {
                        new Function(scriptContent)(); // 더 안전한 실행 방법
                    }
                } catch (error) {
                    console.error("Error executing script:", error);
                } finally {
                    el.remove();
                }
            });

        });
    },
    components: {
        alert
    }
}

</script>