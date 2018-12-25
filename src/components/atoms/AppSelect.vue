
<script>
export default {
    name: 'AppSelect',
    props:{
        label: String,
        classname: String,
        shape:{
            type: String,
            default: 'square'
        }
    },
    render(){
        return   <select class={this.classname}>
                    <option> {this.label} </option>
                </select>
    }
}
</script>

