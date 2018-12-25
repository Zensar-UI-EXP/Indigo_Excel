<template>
    <div class="excel">
        <XLHeader :content="AppData" />
        <XLBody :content="TableContent" />
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