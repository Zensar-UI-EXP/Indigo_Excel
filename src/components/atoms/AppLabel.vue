<script>
export default {
    name: 'AppLabel',
    props:{
        label: String,
        classname:{
            type: String,
            default: 'label'
        }
    },
    render(){
        return  <label class={this.classname} aria-labelledby={this.label}>
                    {this.label}
                </label>
    }
}
</script>

