
<template>
  <a
    v-if="isNewWindow"
    class="app-link"
    :href="path"
    target="_blank"
  >
    {{ label }}
  </a>
  <a
    v-else
    class="app-link"
  >
    {{ label }}
  </a>
</template>

<script>
export default {
  name: 'AppLink',
  data () {
    return {}
  },
  props: {
    label: String,
    path: String,
    isNewWindow: {
      type: Boolean,
      default: false
    }
  }
}
</script>