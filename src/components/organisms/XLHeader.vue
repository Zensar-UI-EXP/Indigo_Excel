<script>
    import XLPrimaryHead from '../molecules/XLPrimaryHead'
    import XLSecondHead from '../molecules/XLSecondHead'

    export default {
        name: 'XLHeader',
        props:{
            content: Object
        },
        render (createElement) {
            return <div class="xlheader">
                <XLPrimaryHead content={this.content.primary} />
                <XLSecondHead content={this.content.second}/>
            </div>
        },
    }
</script>