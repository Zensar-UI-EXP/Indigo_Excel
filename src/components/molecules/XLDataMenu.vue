<template>
    <div class="xlheader__datamenu">
        <div class="xlheader__thdcont wdh-per--115">
            <h2 class="xlheader__thdheading">{{content.xlheader.homemenu.clipboard.title}}</h2>
            <ul class="xlheader__thdlistcont">
                <li v-for="item in content.xlheader.homemenu.clipboard.list" v-bind:class="[ item.alignleft ? 'pull--lft' : '' ]" class="xlheader__thdlist">
                    <AppButtonIcon classname="btn xlheader__thdbtn btn--" iconclassprename="xlheader__thdbtnicon icon--" :iconclassname=item.iconclassname :nextLine=item.nextLine :label=item.buttonIconLabel nextlineclassname="xlheader__nxtln" :btnscndclassname=item.buttonIconLabel.toLowerCase() />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppLabel from '../atoms/AppLabel'
import AppLinkIcon from '../atoms/AppLinkIcon'
import AppNewLink from '../atoms/AppNewLink'
import AppButtonIcon from '../atoms/AppButtonIcon'
import AppSelect from '../atoms/AppSelect'
import Tooltip from './Tooltip'
export default {
    name: 'XLDataMenu',
    components: {
        AppLink,
        AppLabel,
        AppLinkIcon,
        AppNewLink,
        AppButtonIcon,
        AppSelect,
        Tooltip
    },
    data(){
        return{
            state: this.$store
        }
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
        },
        showSubMenu: {
            type: Boolean,
            default: false
        },
        fn: Function
    },
    computed: {
        style() {
            return 'background: url("./src/assets/sprite.png")';
        }
    }
}
</script>