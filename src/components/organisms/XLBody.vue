<template>
<div class="xlbody">
    <div class="xlbody__selectboxcont">
        <div class="xlbody__selectinnercont">
            <select class="xlbody__select wdh-per--7">
                <option> D8 </option>
            </select>
            <span class="xlbody__seperator"> </span>
            <div class="xlbody__iconcont">
                <i class="xlbody__icon icon--cancel"></i>
                <i class="xlbody__icon icon--ok"></i>
                <i class="xlbody__icon icon--formula mar-rt--none"></i>
            </div>
            <select class="xlbody__select wdh-per--85">
                <option> Gumbar Gummibarchen </option>
            </select>
        </div>
    </div>
    <div class="xlbody__left" v-bind:class="[ state.state.xlnavigation == 'showxlideasdetail' || state.state.xlnavigation == 'selectxlimage' ? 'wdh-per--70' : '' ]">
        <table class="xlbody__table">
            <XLBodyHead :content="content.tablecontent.heading" />
            <XLBodyContent :content="content.tablecontent.listdata" />
        </table>
    </div>
    <div class="xlbody__right" v-show="state.state.xlnavigation == 'showxlideasdetail' || state.state.xlnavigation == 'selectxlimage'">
        <div class="xlbody__rtinner">
            <XLBodyRightHead :content="content" />
            <XLBodyRightList :content="content" :fn="fn" />
        </div>
    </div>
</div>
</template>
<script>
    import XLBodyHead from '../molecules/XLBodyHead'
    import XLBodyContent from '../molecules/XLBodyContent'
    import AppImage from '../atoms/AppImage'
    import XLBodyRightHead from '../molecules/XLBodyRightHead'
    import XLBodyRightList from '../molecules/XLBodyRightList'
    export default {
        name: 'XLBody',
        components: {
            XLBodyHead,
            XLBodyContent,
            AppImage,
            XLBodyRightHead,
            XLBodyRightList
        },
        data(){
            return{
                state: this.$store
            }
        },
        props:{
            content: Object,
            fn: Function
        }
    }
</script>