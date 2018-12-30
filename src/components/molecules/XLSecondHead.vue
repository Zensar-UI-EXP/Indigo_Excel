<template>
    <div class="xlheader__second">
        <nav class="xlheader__scndnav">
            <ul class="xlheader__scndlftlistcont">
                <li v-for="item in content.xlheader.second.leftcontent" class="xlheader__scndlftlist">
                    <AppNewLink classname="xlheader__scndlftlink xlheader--linkactive" v-if="state.state.xlnavigation == 'showxlideas' && item.isactive" :label=item.appLink  />
                    <AppNewLink classname="xlheader__scndlftlink" v-else :label=item.appLink  />
                    <Tooltip modclassname="aln--tltipctr" v-if="item.appLink === 'zHome'" v-show="state.state.xlnavigation == 'homemenu'" :content="content.takeatour.home.title" :link="true" :linkLabel="content.takeatour.home.link" :arrow="'top'" :setStateNav="fn" :fnVal="'showxlideas'"/>
                    <Tooltip modclassname="aln--tltipctr" v-if="item.appLink === 'Data'" v-show="state.state.xlnavigation == 'selectxlimage'" :content="content.takeatour.data.title" :link="true" :linkLabel="content.takeatour.data.link" :arrow="'top'" :setStateNav="fn" :fnVal="'selectdata'"/>
                </li>
            </ul>
        </nav>
        <ul class="xlheader__scndrtlistcont">
            <li v-for="item in content.xlheader.second.rightcontent" class="xlheader__scndrtlist">
                <AppNewLink v-if="item.appLink" classname="xlheader__scndrtlink user--profile" :title=item.title :label=item.appLink  />
                <AppLinkIcon v-if="item.appLinkIcon" classname="xlheader__scndrtlink" iconclassprename="xlheader__scndrticon icon--" :iconclassname=item.appLinkIcon.toLowerCase() :label=item.appLinkIcon />
                <AppButtonIcon v-if="item.appButtonIcon" classname="btn xlheader__scndrtbtn" iconclassprename="xlheader__btnicon icon--" :iconclassname=item.appButtonIcon.toLowerCase() :label=item.appButtonIcon />
            </li>
        </ul>
    </div>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppLabel from '../atoms/AppLabel'
import AppLinkIcon from '../atoms/AppLinkIcon'
import AppNewLink from '../atoms/AppNewLink'
import AppButtonIcon from '../atoms/AppButtonIcon'
import Tooltip from './Tooltip'
export default {
    name: 'XLSecondHead',
    components: {
        AppLink,
        AppLabel,
        AppLinkIcon,
        AppNewLink,
        AppButtonIcon,
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
        fn: Function
    },
    computed: {
        style() {
            return 'background: url("./src/assets/sprite.png")';
        }
    }
}
</script>