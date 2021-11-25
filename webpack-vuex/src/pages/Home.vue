<template>
  <div class="store__home">
    <h1>{{ title }}</h1>
    <app-display/>
    <div class="items">
      <app-item v-for="(item, index) in products" v-bind:key="item.id" :item="item" :index="index"/>
    </div>
  </div>
</template>

<script>
import AppItem from './../components/AppItem.vue'
import AppDisplay from './../components/AppDisplay.vue'

export default {
  title: 'Store',
  components: {
    AppItem,
    AppDisplay
  },
  data () {
    return {
      title: 'home',
      highprice: 500
    }
  },
  computed: {
    products () {
      return this.$store.state.products.filter(el =>
        this.$store.state.sale
          ? el.price < this.highprice && el.sale
          : el.price < this.highprice
      )
    }
  }
}
</script>

<style scoped>
.store__main {
  background-color: red;
}
</style>
