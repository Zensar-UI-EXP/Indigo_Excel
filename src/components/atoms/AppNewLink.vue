<template>
    <a v-if="isNewWindow" :title="label" :class="classname" :href="path" target="_blank"> {{label}} </a>
    <a v-else :title="label" :class="classname" :href="path"> {{label}} </a>
</template>

<script>
export default {
    name: 'AppNewLink',
    data () {
        return {}
    },
    props: {
        label: String,
        classname: String,
        iconclassname: String,
        iconclassprename: String,
        path: {
            type: String,
            default: "javascript:void(0);"
        },
        isNewWindow: {
            type: Boolean,
            default: false
        }
    }
}
</script>