<template>
    <div class="dashcontent__cont">
        <h1 class="dashcontent__heading">{{this.content.heading}}</h1>
        <p class="dashcontent__desc">{{this.content.description}}</p>
        <div class="dashcontent__list">
            <div class="dashcontent__listcontent" v-for="(listdata, index) in this.content.list">
                <div class="dashcontent__listimgcont">
                    <AppImage :classname="listdata.classname" :src="listdata.imagericon" :alternativetext="listdata.alternatext" />
                </div>
                <h2 class="dashcontent__listheading">{{listdata.heading}}</h2>
                <p class="dashcontent__listdesc">
                    {{listdata.description}}
                    <AppNewLink classname="dashcontent__listlink" :label="content.StartTour"/>
                </p>
                <div class="dashcontent__rtbtcorner"></div>
            </div>
        </div>
    </div>
</template>

<script>
import AppImage from '../atoms/AppImage'
import AppNewLink from '../atoms/AppNewLink'
export default {
    name: 'XLSecondHead',
    components: {
        AppImage,
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