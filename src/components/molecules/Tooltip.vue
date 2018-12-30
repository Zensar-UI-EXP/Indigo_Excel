
<script>
import AppButton from '../atoms/AppButton'
export default {
    name: 'Tooltip',
    props:{
        content: String,
        link:Boolean,
        linkLabel: String,
        arrow: String,
        setStateNav:Function,
        fnVal: String,
        modclassname: {
            type: String,
            default: ""
        }
    },
    render(){
        console.log(this.link);
        return  <div class={'tooltip ' + this.modclassname}>
                    <span class="tooltip__indicator"></span>
                    <div class="tooltip__content">
                        <span class={this.arrow+ ' arrow'}></span>  
                        <p domPropsInnerHTML={this.content}>{this.content}</p>
                        <AppButton v-show={this.link} label={this.linkLabel} fn={this.setStateNav} fnVal={this.fnVal}/>
                    </div>
                </div>
    }
}
</script>

