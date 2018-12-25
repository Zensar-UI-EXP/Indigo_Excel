<template>
    <button v-if="nextLine" :title="label" :class="classname + btnscndclassname" :href="path" target="_blank">
        <i :class="iconclassprename + iconclassname"></i>
        <span :class="nextlineclassname">{{label}}</span>
        <i v-if="appLinkDownArrow" :class="iconDownArrowclassname"></i>
    </button>
    <button v-else :title="label" :class="classname + btnscndclassname" :href="path" target="_blank">
        <i :class="iconclassprename + iconclassname"></i>
        {{label}}
        <i v-if="appLinkDownArrow" :class="iconDownArrowclassname"></i>
    </button>
</template>

<script>
export default {
    name: 'AppButtonIcon',
    data () {
        return {}
    },
    props: {
        label: String,
        classname: String,
        iconclassname: String,
        iconclassprename: String,
        nextlineclassname: String,
        iconDownArrowclassname: String,
        appLinkDownArrow: {
            type: Boolean,
            default: false
        }, 
        nextLine: {
            type: Boolean,
            default: false
        },
        path: {
            type: String,
            default: "javascript:void(0);"
        },
        isNewWindow: {
            type: Boolean,
            default: false
        },
        btnscndclassname: {
            type: String,
            default: ""
        }
    }
}
</script>