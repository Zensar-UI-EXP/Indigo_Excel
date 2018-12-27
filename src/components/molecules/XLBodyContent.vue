<template>
    <tbody class="xlbody__tblbody">
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
import AppButton from '../atoms/AppButton'
import AppLabel from '../atoms/AppLabel'
import AppLinkIcon from '../atoms/AppLinkIcon'
export default {
    name: 'XLBodyContent',
    components: {
        AppLink,
        AppButton,
        AppLabel,
        AppLinkIcon
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
    computed: {
        style() {
            return 'background: url("./src/assets/sprite.png")';
        }
    }
}
</script>