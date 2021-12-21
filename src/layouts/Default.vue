<template>
  <div class="layout">
    <Header />
    <slot/>
  </div>
</template>

<script>
import { debounce } from 'lodash-es';
import Header from '~/components/Header';

export default {
  components: {
    Header
  },

  mounted () {
    this.detectSmallWindow();
    window.addEventListener('resize', this.debounceResize);
  },

  methods: {
    debounceResize: debounce(function () {
			this.detectSmallWindow();
    }, 50),
  
    detectSmallWindow () {
      this.$store.commit('detectSmallWindow', window.innerWidth < 1024);
    }
  }
}
</script>
