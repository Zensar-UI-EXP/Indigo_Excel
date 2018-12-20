<template>
    <div class="xlheader__primary">
        <ul class="xlheader__leftlistcont">
            <li class="xlheader__leftlist" v-for="item in content.leftcontent">
                <AppLabel v-if="item.appLabel" classname="xlheader__label" :label=item.appLabel />
                <AppButton v-if="item.appButton" shape="xlheader__onoffbtn" :label=item.appButton />
                <AppLinkIcon v-if="item.appLink" classname="xlheader__leftlink" iconclassprename="xlheader__lefticon icon--" :iconclassname=item.appLink.toLowerCase() :label=item.appLink />
            </li>
        </ul>
        <div class="xlheader__center">
            {{content.title}}
        </div>
        <div class="xlheader__tbl">
            <AppButton class="btn btn--tbltls" :label=content.tableTools />
        </div>
        <ul class="xlheader__rightlistcont">
            <li class="xlheader__rightlist" v-for="item in content.rightcontent">
                <AppLabel v-if="item.appLabel" classname="xlheader__rightlabel" :label=item.appLabel />
                <AppLinkIcon v-if="item.appLink" classname="xlheader__rightlink" iconclassprename="xlheader__righticon icon--" :iconclassname=item.appLink.toLowerCase() :label=item.appLink />
            </li>
        </ul>
    </div>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppButton from '../atoms/AppButton'
import AppLabel from '../atoms/AppLabel'
import AppLinkIcon from '../atoms/AppLinkIcon'
export default {
    name: 'XLPrimaryHead',
    components: {
        AppLink,
        AppButton,
        AppLabel,
        AppLinkIcon
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