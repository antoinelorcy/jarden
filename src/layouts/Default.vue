<template>
  <div class="layout">
    <Header />
    <slot/>
  </div>
</template>

<script>
import Header from '~/components/Header';

export default {
  components: {
    Header
  },

  mounted () {
    window.addEventListener('resize', this.onResize, false);
  },

  methods: {
    onResize () {
      this.$store.commit('detectSmallWindow', window.innerWidth < 1024);
    }
  }
}
</script>
