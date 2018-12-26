
<style lang="scss">
@import "./styles/main";
@import "./styles/excel";
@import "./styles/dashboard";
</style>

<script>
export default {
    render(){
        return <div id="app">
                  <router-view/>
                </div>
    }
 }
</script>
