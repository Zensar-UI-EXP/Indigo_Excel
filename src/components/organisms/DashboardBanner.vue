<script>
    import XLPrimaryHead from '../molecules/XLPrimaryHead'
    import XLSecondHead from '../molecules/XLSecondHead'
    import XLThirdHead from '../molecules/XLThirdHead'
    export default {
        name: 'DashboardBanner',
        props:{
            content: Object
        },
        render (createElement) {
            return <div class="dashbanner">
                        <div class="dashbanner__top"></div>
                        <div class="dashbanner__cont">
                            <img class="dashbanner__img" src="../assets/banner.png" alt="dashboard"/>
                        </div>
                    </div>
        },
    }
</script>