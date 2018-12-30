<template>
    <ul class="xlbody__rtlistcont">
        <li class="xlbody__rtlist" v-for="item in content.bodyrightcontent.list">
            <a class="xlbody__rtlstlink" href="javascript:void(0);" :title="item.imageheading">
                <AppImage classname="xlbody__rtlstimg" :src="item.imagepath" :alternativetext="item.imageheading" />
            </a>
        </li>
        <Tooltip modclassname="aln--slctchart" v-show="state.state.xlnavigation == 'showxlideasdetail'" :content="content.takeatour.showxlideasdetail.title" :link="true" :linkLabel="content.takeatour.showxlideasdetail.link" :arrow="'top'" :setStateNav="fn" :fnVal="'selectxlimage'"/>
    </ul>
</template>

<script>
import AppImage from '../atoms/AppImage'
import Tooltip from './Tooltip'
export default {
    name: 'XLBodyRightList',
    components: {
        AppImage,
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
    },
    render(){
        console.log(content);
    }
}
</script>