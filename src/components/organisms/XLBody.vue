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
                <div class="xlbody__left">
                    <table class="xlbody__table">
                        <XLBodyHead content={this.content.heading} />
                        <XLBodyContent content={this.content.listdata} />
                    </table>
                </div>
                <div class="xlbody__right">
                    <h4>Ideas (Preview)</h4>
                    <ul>
                        <li>
                            <a href="javascript:void(0);" title="Insert Pivot chart">
                                <img scr="" alt="Insert Pivot chart" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        },
    }
</script>