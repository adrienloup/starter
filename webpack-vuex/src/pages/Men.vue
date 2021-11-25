<template>
  <div class="store__page2">
    <h1>{{ title }}</h1>
    <app-sidebar></app-sidebar>
    <app-item v-for="(item, index) in menProducts" v-bind:key="item.id" :item="item" :index="index"/>
  </div>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue'
import AppItem from './../components/AppItem.vue'

export default {
  title: 'Men | Store',
  components: {
    AppSidebar,
    AppItem
  },
  data () {
    return {
      title: 'men',
      highprice: 500
    }
  },
  computed: {
    menProducts () {
      return this.$store.getters.men.filter(el =>
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
  background-color: blue;
}
</style>
