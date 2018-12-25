<script>
    import XLBodyHead from '../molecules/XLBodyHead'
    import XLBodyContent from '../molecules/XLBodyContent'
    export default {
        name: 'XLBody',
        props:{
            content: Object
        },
        render (createElement) {
            return <div class="xlbody">
                <table class="xlbody__table">
                    <XLBodyHead content={this.content.heading} />
                    <XLBodyContent content={this.content.listdata} />
                </table>
            </div>
        },
    }
</script>