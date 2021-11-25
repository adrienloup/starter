<template>
  <div class="store__page1">
    <h1>{{ title }}</h1>
    <app-sidebar></app-sidebar>
    <app-item v-for="(item, index) in womenProducts" v-bind:key="item.id" :item="item" :index="index"/>
  </div>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue'
import AppItem from './../components/AppItem.vue'

export default {
  title: 'Women | Store',
  components: {
    AppSidebar,
    AppItem
  },
  data () {
    return {
      title: 'women',
      highprice: 500
    }
  },
  computed: {
    womenProducts () {
      return this.$store.getters.women.filter(el =>
        this.$store.state.sale
          ? el.price < this.highprice && el.sale
          : el.price < this.highprice
      )
    }
  }
}
</script>

<style scoped>
.store__main div {
  background-color: green;
}
</style>
