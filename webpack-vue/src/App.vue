<template>
  <div id="app" class="store">
    <header class="store__header">
      <ul>
        <li><router-link :to="{name: 'home'}" exact>home</router-link></li>
        <li><router-link :to="{name: 'page1'}">page1</router-link></li>
        <li><router-link :to="{name: 'page2'}">page2</router-link></li>
      </ul>
    </header>
    <main class="store__main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "@/scss/store.scss";
</style>
