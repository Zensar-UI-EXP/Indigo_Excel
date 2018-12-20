<template>
    <div class="xlheader__second">
        <nav class="xlheader__scndnav">
            <ul class="xlheader__scndlftlistcont">
                <li v-for="item in content.leftcontent" class="xlheader__scndlftlist">
                    <AppNewLink classname="xlheader__scndlftlink" :label=item.appLink  />
                </li>
            </ul>
        </nav>
        <ul class="xlheader__scndrtlistcont">
            <li v-for="item in content.rightcontent" class="xlheader__scndrtlist">
                <AppNewLink classname="xlheader__scndrtlink" :label=item.appLink  />
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
export default {
    name: 'XLSecondHead',
    components: {
        AppLink,
        AppButton,
        AppLabel,
        AppLinkIcon,
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