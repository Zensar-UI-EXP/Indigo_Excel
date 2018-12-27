<template>
    <img :class="classname" v-bind:src="getPic(src)" :alt="alternativetext"/>
</template>

<script>
export default {
  name: 'AppImage',
  data () {
    return {}
  },
  props: {
    src: String,
    alternativetext: String,
    classname: String
  },
  methods: {
    getPic(srcpath) {
      var images = require.context('../../assets/', false, /\.png$/)
      return images('./' + srcpath + ".png")
    }
  }
}
</script>

<style scoped>

</style>
