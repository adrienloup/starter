<template>
  <div class="store__home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Website'
    }
  }
}
</script>

<style scoped>
.store__main {
  background-color: red;
}
</style>
