<template>
    <ul>
      <li v-for="(link, index) in links">
          <AppLink v-if="isAnchor" :label="link.label"/>
          <AppButton v-if="isAction" :label="link.label"/>
      </li>
    </ul>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppButton from '../atoms/AppButton'
export default {
  name: 'HorizontalLinkList',
  components: {
    AppLink,
    AppButton
  },
  data () {
    return {}
  },
  props: {
    links: Array,
    isAnchor:{
        type: Boolean,
        default: false
    },
    isAction:{
        type: Boolean,
        default: false
    }
  }
}
</script>