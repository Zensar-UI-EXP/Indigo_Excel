<template>
    <div class="excel">
        <XLHeader :content="AppData" />
    </div>
</template>

<script>
import jsonData from '../data.json'
import XLHeader from "@/components/organisms/XLHeader.vue";

export default {
    data(){
        return {
            AppData: Object
        }
    },
    beforeMount(){
        this.AppData = jsonData.xlheader;
        console.log(this.AppData);
    },
    components:{
        XLHeader
    }
}
</script>