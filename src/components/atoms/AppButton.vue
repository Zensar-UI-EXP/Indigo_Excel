
<script>
export default {
    name: 'AppButton',
    props:{
        label: String,
        shape:{
            type: String,
            default: 'square'
        }
    },
    render(){
        return  <button class={this.shape} aria-labelledby={this.label}>
                    {this.label}
                </button>
    }
}
</script>

