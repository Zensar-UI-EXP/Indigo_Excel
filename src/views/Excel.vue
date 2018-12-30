<template>
    <div class="excel">
        <XLHeader :content="AppData" :fn="changeXLStateVal" />
        <XLBody :content="TableContent" :fn="changeXLStateVal" />
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
        this.AppData = jsonData;
        this.TableContent = jsonData;
    },
    components:{
        XLHeader,
        XLBody
    },
    methods:{
        changeXLStateVal(newVal){
            console.log(newVal);
            this.$store.dispatch("updateXLStateVal", newVal);
        }
    }
}
</script>