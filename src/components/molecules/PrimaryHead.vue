<template>
    <nav>
      <ul class="left">
        <li><AppLink :style="style" :aria-labelledby="links[0].menu[0].label"/></li>
        <li v-for="link in links[0].leftNav">
          <AppLink :style="style" :label="link.label" :aria-labelledby="link.label"/>
        </li>
      </ul>
      <ul class="center">
          <li  v-for="link in links[0].center"> 
            {{link.label}}
          </li>
      </ul>
       <ul class="right">
          <li  v-for="link in links[0].right"> 
            {{link.label}}
          </li>
      </ul>
    </nav>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppButton from '../atoms/AppButton'
export default {
  name: 'PrimaryHead',
  components: {
    AppLink,
    AppButton
  },
  props: {
    links: Array,
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