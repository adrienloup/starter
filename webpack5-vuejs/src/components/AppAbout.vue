<template>
  <div>
    <h1>Adrien Loup</h1>
    <h3>Developer Front-End</h3>
    <img width="225" :src="getImgUrl(source.image)" :alt="source.alt" />
    <video playsinline autoplay muted loop>
       <source :src="`${source.video}`" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'AppAbout',
  data() {
    return {
      source: {
        image: 'adrienloup.jpg',
        alt: 'Adrien Loup',
        video: 'video.mp4'
      }
    }
  },
  methods: {
    getImgUrl(img) {
      const image = require.context('../images/', false);
      return image('./' + img);
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #42b983;
}
</style>
