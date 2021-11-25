<template>
  <div id="msg">
    <label for="msg">msg</label>
    <input @input="changed" name="msg">
  </div>
</template>

<script>
export default {
  methods: {
    changed: function (event) {
      console.log(event.target.value)
      this.$store.commit('change', event.target.value)
    }
  }
}
</script>

<style scoped>
#msg {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: 20px;
  border: 5px dashed red;
}
</style>
