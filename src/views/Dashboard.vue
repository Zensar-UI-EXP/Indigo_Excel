<template>
    <div class="dashboard">
        <DashboardBanner />
        <div class="dashcontent">
            <DashboardContent :content="DashboardContentData"/>
        </div>
        <div class="dashbottom">
            <div class="dashbottom__greybg"></div>
            <div class="dashbottom__lightwhitebg"></div>
        </div>
    </div>
</template>

<script>
import jsonData from '../data.json'
import DashboardBanner from "@/components/organisms/DashboardBanner"
import DashboardContent from "@/components/organisms/DashboardContent"
export default {
    data(){
        return {
            AppData: Object
        }
    },
    beforeMount(){
        this.DashboardBannerData = jsonData.dashboard.bannerAlternative;
        this.DashboardContentData = jsonData.dashboard.content;
    },
    components:{
        DashboardBanner,
        DashboardContent
    }
}
</script>