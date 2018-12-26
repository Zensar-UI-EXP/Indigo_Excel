<template>
    <div class="dashboard">
        <div class="dashbanner">
            <div class="dashbanner__top"></div>
            <div class="dashbanner__cont">
                <img class="dashbanner__img" src="../assets/banner.png" alt="dashboard"/>
            </div>
        </div>
        <div class="dashcontent">
            <div class="dashcontent__cont">
                <h1 class="dashcontent__heading">Take a tour of the modern desktop</h1>
                <p class="dashcontent__desc">Use this incentive experience to take a drive of the latest and greatest from Office 365 and Windows 10.</p>
                <div class="dashcontent__list">
                    <div class="dashcontent__listcontent">
                        <img class="dashcontent__listimg" src="../assets/list__image1.png" alt="List Image" />
                        <h2 class="dashcontent__listheading">Get help with slide design</h2>
                        <p class="dashcontent__listdesc">
                            Let AI do the heavy listing with text recognition, image suggestions, slide design layout options, and built-in editing tools.
                            <a class="dashcontent__listlink" href="javascript:void(0);" title="Start The Tour >>">Start The Tour >></a>
                        </p>
                        <div class="dashcontent__rtbtcorner"></div>
                    </div>
                    <div class="dashcontent__listcontent">
                        <img class="dashcontent__listimg" src="../assets/list__image1.png" alt="List Image" />
                        <h2 class="dashcontent__listheading">Get help with slide design</h2>
                        <p class="dashcontent__listdesc">
                            Let AI do the heavy listing with text recognition, image suggestions, slide design layout options, and built-in editing tools.
                            <a class="dashcontent__listlink" href="javascript:void(0);" title="Start The Tour >>">Start The Tour >></a>
                        </p>
                        <div class="dashcontent__rtbtcorner"></div>
                    </div>
                    <div class="dashcontent__listcontent">
                        <img class="dashcontent__listimg" src="../assets/list__image1.png" alt="List Image" />
                        <h2 class="dashcontent__listheading">Get help with slide design</h2>
                        <p class="dashcontent__listdesc">
                            Let AI do the heavy listing with text recognition, image suggestions, slide design layout options, and built-in editing tools.
                            <a class="dashcontent__listlink" href="javascript:void(0);" title="Start The Tour >>">Start The Tour >></a>
                        </p>
                        <div class="dashcontent__rtbtcorner"></div>
                    </div>
                    <div class="dashcontent__listcontent">
                        <img class="dashcontent__listimg" src="../assets/list__image1.png" alt="List Image" />
                        <h2 class="dashcontent__listheading">Get help with slide design</h2>
                        <p class="dashcontent__listdesc">
                            Let AI do the heavy listing with text recognition, image suggestions, slide design layout options, and built-in editing tools.
                            <a class="dashcontent__listlink" href="javascript:void(0);" title="Start The Tour >>">Start The Tour >></a>
                        </p>
                        <div class="dashcontent__rtbtcorner"></div>
                    </div>
                    <div class="dashcontent__listcontent">
                        <img class="dashcontent__listimg" src="../assets/list__image1.png" alt="List Image" />
                        <h2 class="dashcontent__listheading">Get help with slide design</h2>
                        <p class="dashcontent__listdesc">
                            Let AI do the heavy listing with text recognition, image suggestions, slide design layout options, and built-in editing tools.
                            <a class="dashcontent__listlink" href="javascript:void(0);" title="Start The Tour >>">Start The Tour >></a>
                        </p>
                        <div class="dashcontent__rtbtcorner"></div>
                    </div>
                    <div class="dashcontent__listcontent">
                        <img class="dashcontent__listimg" src="../assets/list__image1.png" alt="List Image" />
                        <h2 class="dashcontent__listheading">Get help with slide design</h2>
                        <p class="dashcontent__listdesc">
                            Let AI do the heavy listing with text recognition, image suggestions, slide design layout options, and built-in editing tools.
                            <a class="dashcontent__listlink" href="javascript:void(0);" title="Start The Tour >>">Start The Tour >></a>
                        </p>
                        <div class="dashcontent__rtbtcorner"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dashbottom">
            <div class="dashbottom__greybg"></div>
            <div class="dashbottom__lightwhitebg"></div>
        </div>
    </div>
</template>

<script>
import jsonData from '../data.json'
import XLHeader from "@/components/organisms/XLHeader.vue";
import XLBody from '@/components/organisms/XLBody'

export default {
    data(){
        return {
            AppData: Object
        }
    },
    beforeMount(){
        this.AppData = jsonData.xlheader;
        this.TableContent = jsonData.tablecontent;
    },
    components:{
        XLHeader,
        XLBody
    }
}
</script>