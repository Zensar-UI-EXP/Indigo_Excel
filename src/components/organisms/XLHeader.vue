<script>
    import XLPrimaryHead from '../molecules/XLPrimaryHead'
    import XLSecondHead from '../molecules/XLSecondHead'
    import XLHomeMenu from '../molecules/XLHomeMenu'
    import XLDataMenu from '../molecules/XLDataMenu'
    export default {
        name: 'XLHeader',
        props:{
            content: Object,
            fn: Function
        },
        render (createElement) {
            return <div class="xlheader">
                <XLPrimaryHead content={this.content.xlheader.primary} />
                <XLSecondHead content={this.content} fn={this.fn}/>
                <XLHomeMenu content={this.content} fn={this.fn}/>
                <XLDataMenu content={this.content} fn={this.fn}/>
            </div>
        },
    }
</script>