<template>
  <div class="item" :class="{sale: item.sale}">
    <div class="img">
      <img :src="`/${item.img}`" :alt="`Image of ${item.name}`">
    </div>
    <div class="caption">
      <span class="title">{{ item.name }}</span>
      <span class="category">{{ item.category }}</span>
      <span class="sale" v-if="item.sale">Sale</span>
      <span class="price">{{ item.price | usdollar }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  filters: {
    usdollar: function (value) {
      return `$${value}`
    }
  }
}
</script>
