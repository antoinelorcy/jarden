<template>
  <Layout>
    <Hero v-if="!$store.state.isSmallWindow" />
    <div class="inner-width">
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    </div>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero';

export default {
  metaInfo: {
    title: 'About us'
  },

  components: {
    Hero
  }
}
</script>
