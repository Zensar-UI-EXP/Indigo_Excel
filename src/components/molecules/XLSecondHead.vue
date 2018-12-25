<template>
    <div class="xlheader__second">
        <nav class="xlheader__scndnav">
            <ul class="xlheader__scndlftlistcont">
                <li v-for="item in content.leftcontent" class="xlheader__scndlftlist">
                    <AppNewLink classname="xlheader__scndlftlink xlheader--linkactive" v-if="item.isactive" :label=item.appLink  />
                    <AppNewLink classname="xlheader__scndlftlink" v-else :label=item.appLink  />
                </li>
            </ul>
        </nav>
        <ul class="xlheader__scndrtlistcont">
            <li v-for="item in content.rightcontent" class="xlheader__scndrtlist">
                <AppNewLink v-if="item.appLink" classname="xlheader__scndrtlink user--profile" :title=item.title :label=item.appLink  />
                <AppLinkIcon v-if="item.appLinkIcon" classname="xlheader__scndrtlink" iconclassprename="xlheader__scndrticon icon--" :iconclassname=item.appLinkIcon.toLowerCase() :label=item.appLinkIcon />
                <AppButtonIcon v-if="item.appButtonIcon" classname="btn xlheader__scndrtbtn" iconclassprename="xlheader__btnicon icon--" :iconclassname=item.appButtonIcon.toLowerCase() :label=item.appButtonIcon />
            </li>
        </ul>
    </div>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppButton from '../atoms/AppButton'
import AppLabel from '../atoms/AppLabel'
import AppLinkIcon from '../atoms/AppLinkIcon'
import AppNewLink from '../atoms/AppNewLink'
import AppButtonIcon from '../atoms/AppButtonIcon'
export default {
    name: 'XLSecondHead',
    components: {
        AppLink,
        AppButton,
        AppLabel,
        AppLinkIcon,
        AppNewLink,
        AppButtonIcon
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