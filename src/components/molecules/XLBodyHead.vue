<template>
    <thead class="xlbody__tblhead">
        <tr class="xlbody__headrow">
            <th class="xlbody__headcol wdh--30"> &nbsp; </th>
            <th :class="defaultclassname + ' '  +item.classname" v-for="item in content"> 
                {{item.title}}
            </th>
        </tr>
    </thead>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppButton from '../atoms/AppButton'
import AppLabel from '../atoms/AppLabel'
import AppLinkIcon from '../atoms/AppLinkIcon'
export default {
    name: 'XLBodyHead',
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
            default: "xlbody__headcol"
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