<template>
  <div id="app" class="store">
    <header role="banner" class="store__header">
      <nav role="navigation" class="store__nav">
        <ul>
          <li><router-link :to="{name: 'home'}" exact>home</router-link></li>
          <li><router-link :to="{name: 'women'}">women</router-link></li>
          <li><router-link :to="{name: 'men'}">men</router-link></li>
          <li><router-link :to="{name: 'sale'}">sale</router-link></li>
        </ul>
      </nav>
      <app-display/>
    </header>
    <main role="main" class="store__main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <footer role="contentinfo" class="store__footer">
      <app-display/>
    </footer>
    <app-form/>
  </div>
</template>

<script>
import AppForm from './components/AppForm.vue'
import AppDisplay from './components/AppDisplay.vue'

export default {
  components: {
    AppForm,
    AppDisplay
  }
}
</script>

<style lang="scss">
  @import "@/scss/store.scss";
</style>
