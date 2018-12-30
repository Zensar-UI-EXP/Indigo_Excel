<template>
    <tbody class="xlbody__tblbody">
        <div class="xlbody__selectedimagecont" v-show="state.state.xlnavigation == 'selectxlimage'">
            <AppImage classname="xlbody__selectedimage" src="xl_list__image2" :alternativetext="Chart" />
        </div>
        <tr class="xlbody__bodyrow" v-for="(items, index) in content">
            <td class="xlbody__bodycol wdh--60"> {{index + 1}} </td>
            <td :class="defaultclassname + ' '  +item.classname" v-for="item in items"> 
                {{item.value}}
            </td>
        </tr>
    </tbody>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppLabel from '../atoms/AppLabel'
import AppLinkIcon from '../atoms/AppLinkIcon'
import AppImage from '../atoms/AppImage'
export default {
    name: 'XLBodyContent',
    components: {
        AppLink,
        AppLabel,
        AppLinkIcon,
        AppImage
    },
    props: {
        content: Array,
        defaultclassname: {
            type: String,
            default: "xlbody__bodycol"
        },
        isAnchor:{
            type: Boolean,
            default: true
        },
        isAction:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            state: this.$store
        }
    },
    computed: {
        style() {
            return 'background: url("./src/assets/sprite.png")';
        }
    }
}
</script>