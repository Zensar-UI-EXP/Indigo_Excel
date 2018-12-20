<template>
  <div class="home">
    <Header :links= "AppData" />
  </div>
</template>


<script>
import jsonData from '../data.json'
import Header from "@/components/organisms/Header.vue";
export default {
   data(){
    return {
      AppData: Object
    }
  },
   beforeMount(){
     debugger
       console.log(jsonData);
       this.AppData = jsonData.displayHead;
       console.log(this.AppData)
    },
  components:{
    Header
  }
}
</script>
