<template>
  <div class="store__page2">
    <h1>{{ title }}</h1>
    <app-sidebar></app-sidebar>
    <app-item v-for="(item, index) in saleProducts" v-bind:key="item.id" :item="item" :index="index"/>
  </div>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue'
import AppItem from './../components/AppItem.vue'

export default {
  title: 'Sale | Store',
  components: {
    AppSidebar,
    AppItem
  },
  data () {
    return {
      title: 'sale',
      highprice: 500
    }
  },
  computed: {
    saleProducts () {
      return this.$store.getters.sale.filter(el => el.price < this.highprice)
    }
  }
}
</script>
