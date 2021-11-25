<template>
  <aside>
    <strong>{{ msg }}</strong>
    <app-display/>
  </aside>
</template>

<script>
import AppDisplay from './../components/AppDisplay.vue'

export default {
  components: {
    AppDisplay
  },
  data () {
    return {
      msg: 'sidebar'
    }
  }
}
</script>
