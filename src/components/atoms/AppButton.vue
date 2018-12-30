
<script>
export default {
    name: 'AppButton',
    props:{
        label: String,
        shape:{
            type: String,
            default: 'square'
        },
        fn: Function,
        fnVal: String
    },
    render(){
        return  <button class={this.shape} aria-labelledby={this.label} on-click={this.fn.bind(this,this.fnVal)}>
                    {this.label}
                </button>
    }
}
</script>

