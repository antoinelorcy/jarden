<template>
  <Layout>
    <Hero v-if="!$store.state.isSmallWindow" :custom-image="grower.image" />
    <TwoCols class="inner-width">
      <!-- <Filters slot="left" /> -->
	    <GrowerSidebar v-bind="sidebarProps" slot="left" />
      <template slot="right">
        <div class="p--4">
        {{ $context }}
      	{{ $page.grower }}
        </div>
      </template>
    </TwoCols>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  grower: growers(id: $id) {
    name
    slug
	  image
    address
    city
    canShip
    canSell
  }
}
</page-query>

<script>
import Hero from '~/components/Hero';
import GrowerSidebar from '~/components/GrowerSidebar';

export default {
	components: {
    Hero,
		GrowerSidebar
  },
  
  computed: {
    grower () {
      return this.$page.grower;
    },

    sidebarProps () {
      return {
        image: this.grower.image,
        title: this.grower.name,
        description: 'Lorem ispum',
        canSell: this.grower.canSell,
        canShip: this.grower.canShip,
        email: 'toto@totot.com',
        phone: '0292929922'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  filter: grayscale(1);
}

.two-cols ::v-deep .tc__left {
  margin-top: space(4);
  z-index: 1;

  @include breakpoint(medium-up) {
    margin-top: -50px;
  }
}
</style>