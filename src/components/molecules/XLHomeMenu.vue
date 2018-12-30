<template>
    <div class="xlheader__homemenu" v-show="state.state.xlnavigation == 'showxlideas'">
        <div class="xlheader__thdcont wdh-per--115">
            <h2 class="xlheader__thdheading">{{content.xlheader.homemenu.clipboard.title}}</h2>
            <ul class="xlheader__thdlistcont">
                <li v-for="item in content.xlheader.homemenu.clipboard.list" v-bind:class="[ item.alignleft ? 'pull--lft' : '' ]" class="xlheader__thdlist">
                    <AppButtonIcon classname="btn xlheader__thdbtn btn--" iconclassprename="xlheader__thdbtnicon icon--" :iconclassname=item.iconclassname :nextLine=item.nextLine :label=item.buttonIconLabel nextlineclassname="xlheader__nxtln" :btnscndclassname=item.buttonIconLabel.toLowerCase() />
                </li>
            </ul>
        </div>
        <div class="xlheader__thdcont wdh-per--175">
            <h2 class="xlheader__thdheading">{{content.xlheader.homemenu.font.title}}</h2>
            <ul class="xlheader__thdlistcont">
                <li v-for="item in content.xlheader.homemenu.font.list" v-bind:class="[ item.alignleft ? 'pull--lft' : '', item.borderRight ? 'bor-rt--1 pad-rt--10' : '', item.listwidthclassname ]" class="xlheader__thdlist">
                    <AppSelect v-if="item.selectLabel" classname="xlheader__select wdh-per--100" :label=item.selectLabel />
                    <AppLinkIcon v-if="item.appLink" :classname="'xlheader__thdlink ' + item.linkclassname" iconclassprename="xlheader__thdicon icon--" :iconclassname=item.iconclassname :label=item.appLink />
                    <AppLinkIcon v-if="item.appLinkDownArrow" classname="xlheader__thdlink mar-ltbt--105" iconclassprename="xlheader__thdicon pull--lft icon--" iconclassname="downarrow" label="More" />
                </li>
            </ul>
        </div>
        <div class="xlheader__thdcont wdh-per--19">
            <h2 class="xlheader__thdheading">{{content.xlheader.homemenu.alignment.title}}</h2>
            <ul class="xlheader__thdlistcont xlheader--insamecolumn">
                <li v-for="item in content.xlheader.homemenu.alignment.list" v-bind:class="[ item.alignleft ? 'pull--lft' : '', item.borderRight ? 'bor-rt--1 pad-rt--10' : '', item.listwidthclassname ]" class="xlheader__thdlist">
                    <AppLinkIcon v-if="item.appLink" classname="xlheader__thdlink" iconclassprename="xlheader__thdicon icon-" :iconclassname=item.iconclassname :label=item.appLink />
                    <AppLinkIcon v-if="item.appLinkDownArrow" classname="xlheader__thdlink mar-ltbt--105" iconclassprename="xlheader__thdicon pull--lft icon--" iconclassname="downarrow" label="More" />
                </li>
            </ul>
            <ul class="xlheader__thdlistcont">
                <li v-for="item in content.xlheader.homemenu.alignment.secondlist" v-bind:class="[ item.alignleft ? 'pull--lft' : '' ]" class="xlheader__thdlist">
                    <AppButtonIcon classname="btn xlheader__thdbtn btn--" iconclassprename="xlheader__thdbtnicon icon--" :iconclassname=item.iconclassname :label=item.buttonIconLabel :nextLine=item.nextLine nextlineclassname="xlheader__nxtln" />
                </li>
            </ul>
        </div>
        <div class="xlheader__thdcont wdh-per--11">
            <h2 class="xlheader__thdheading">{{content.xlheader.homemenu.number.title}}</h2>
            <ul class="xlheader__thdlistcont">
                <li v-for="item in content.xlheader.homemenu.number.list" v-bind:class="[ item.alignleft ? 'pull--lft' : '', item.borderRight ? 'bor-rt--1 pad-rt--10' : '', item.listwidthclassname ]" class="xlheader__thdlist">
                    <AppSelect v-if="item.selectLabel" classname="xlheader__select wdh-per--100" :label=item.selectLabel />
                    <AppLinkIcon v-if="item.appLink" classname="xlheader__thdlink" iconclassprename="xlheader__thdicon icon--" :iconclassname=item.iconclassname :label=item.appLink />
                    <AppLinkIcon v-if="item.appLinkDownArrow" classname="xlheader__thdlink mar-all--0" iconclassprename="xlheader__thdicon pull--lft icon--" iconclassname="downarrow" label="More" />
                </li>
            </ul>
        </div>
        <div class="xlheader__thdcont wdh-per--12">
            <h2 class="xlheader__thdheading">{{content.xlheader.homemenu.styles.title}}</h2>
            <ul class="xlheader__thdlistcont">
                <li v-for="item in content.xlheader.homemenu.styles.list" v-bind:class="[ item.alignleft ? 'pull--lft' : '' ]" class="xlheader__thdlist">
                    <AppButtonIcon :nextLine=item.nextLine iconDownArrowclassname="xlheader__thdbtnicon icon--downarrow mar--30auto" :appLinkDownArrow=item.appLinkDownArrow classname="btn xlheader__thdbtn txt--center wdh--50" iconclassprename="xlheader__thdbtnicon icon--" :iconclassname=item.iconclassname :label=item.buttonIconLabel nextlineclassname="xlheader__nxtln pull--lft mar-top--5" />
                </li>
            </ul>
        </div>
        <div class="xlheader__thdcont wdh-per--9">
            <h2 class="xlheader__thdheading">{{content.xlheader.homemenu.cells.title}}</h2>
            <ul class="xlheader__thdlistcont">
                <li v-for="item in content.xlheader.homemenu.cells.list" v-bind:class="[ item.alignleft ? 'pull--lft' : '' ]" class="xlheader__thdlist">
                    <AppButtonIcon :nextLine=item.nextLine iconDownArrowclassname="xlheader__thdbtnicon icon--downarrow mar--20auto" :appLinkDownArrow=item.appLinkDownArrow classname="btn xlheader__thdbtn txt--center wdh--35" iconclassprename="xlheader__thdbtnicon icon-" :iconclassname=item.iconclassname :label=item.buttonIconLabel nextlineclassname="xlheader__nxtln pull--lft mar-top--5" />
                </li>
            </ul>
        </div>
        <div class="xlheader__thdcont bor-rt--none wdh-per--17">
            <h2 class="xlheader__thdheading">{{content.xlheader.homemenu.editing.title}}</h2>
            <ul class="xlheader__thdlistcont xlheader--editingcolumn">
                <li v-for="(item, index) in content.xlheader.homemenu.editing.list" v-bind:class="[ item.alignleft ? 'pull--lft' : '' ]" class="xlheader__thdlist">
                    <AppButtonIcon :nextLine=item.nextLine iconDownArrowclassname="xlheader__thdbtnicon mar-ltp--3 icon--downarrow" :appLinkDownArrow=item.appLinkDownArrow classname="btn xlheader__thdbtn" iconclassprename="xlheader__thdbtnicon icon--" :iconclassname=item.iconclassname :label=item.buttonIconLabel nextlineclassname="xlheader__nxtln pull--lft" />
                </li>
            </ul>
            <ul class="xlheader__thdlistcont">
                <li v-for="(item, index) in content.xlheader.homemenu.editing.secondlist" v-bind:class="[ item.alignleft ? 'pull--lft' : '' ]" class="xlheader__thdlist">
                    <AppButtonIcon :nextLine=item.nextLine iconDownArrowclassname="xlheader__thdbtnicon icon--downarrow mar--29auto" :appLinkDownArrow=item.appLinkDownArrow classname="btn xlheader__thdbtn" iconclassprename="xlheader__thdbtnicon icon--" :iconclassname=item.iconclassname :label=item.buttonIconLabel nextlineclassname="xlheader__nxtln pull--lft txt--center wdh-per--100 mar-top--9" />
                </li>
            </ul>
        </div>
        <div class="xlheader__thdcont wdh-per--3">
            <h2 class="xlheader__thdheading wdh-per--85">{{content.xlheader.homemenu.ideas.title}}</h2>
            <ul class="xlheader__thdlistcont">
                <li v-for="(item, index) in content.xlheader.homemenu.ideas.list" v-bind:class="[ item.alignleft ? 'pull--lft' : '' ]" class="xlheader__thdlist">
                    <AppButtonIcon :nextLine=item.nextLine classname="btn xlheader__thdbtn" iconclassprename="xlheader__thdbtnicon icon--" :iconclassname=item.iconclassname :label=item.buttonIconLabel />
                </li>
            </ul>
            <Tooltip modclassname="tooltip--alnrt" v-show="state.state.xlnavigation == 'showxlideas'" :content="content.takeatour.xlideas.title" :link="true" :linkLabel="content.takeatour.xlideas.link" :arrow="'top'" :setStateNav="fn" :fnVal="'showxlideasdetail'"/>
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
    name: 'XLHomeMenu',
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