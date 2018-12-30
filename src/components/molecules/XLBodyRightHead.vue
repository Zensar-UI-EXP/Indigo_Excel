<template>
    <div class="xlbody__rthead">
        <h4 class="xlbody__rtheading">{{content.bodyrightcontent.title}}</h4>
        <AppNewLink classname="xlbody__rtclose" :label="content.bodyrightcontent.closelinklabel"/>
    </div>
</template>

<script>
import AppNewLink from '../atoms/AppNewLink'
export default {
    name: 'XLBodyRightHead',
    components: {
        AppNewLink
    },
    props: {
        content: Object,
        isAnchor:{
            type: Boolean,
            default: true
        },
        isAction:{
            type: Boolean,
            default: false
        }
    },
    computed: {
        style() {
            return 'background: url("./src/assets/sprite.png")';
        }
    }
}
</script>