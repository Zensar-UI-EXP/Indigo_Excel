<script>
    import AppImage from '../atoms/AppImage'
    export default {
        name: 'DashboardBanner',
        props:{
            content: Object
        },
        render (createElement) {
            return <div class="dashbanner">
                        <div class="dashbanner__top"></div>
                        <div class="dashbanner__cont">
                            <AppImage classname="dashbanner__img" src="banner" alternativetext="Dashboard Banner"/>
                        </div>
                    </div>
        },
    }
</script>