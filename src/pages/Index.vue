<template>
  <Layout>
    <Hero show-intro />
    <TwoCols class="inner-width">
      <Filters :mobile-modal-visible="mobilFiltersModalVisible" @close="mobilFiltersModalVisible = false" slot="left" />
      <template slot="right">
        <div class="display-flex">
          <Input v-model="search" placeholder="Rechercher par mots clés" icon="search" class="fluid-width flex-fluid" />
          <Button
            v-if="$store.state.isSmallWindow"
            icon="filter"
            fill="raw"
            class="m--l-2"
            @click="mobilFiltersModalVisible = true"
          />
        </div>
        <GrowerList :growers="$page.growers.edges" />
      </template>
    </TwoCols>
  </Layout>
</template>

<page-query>
query {
  growers: allGrowers {
    edges {
      node {
        id
        image
        name
        slug
        city
        canShip
        canSell
      }
    }
  }
}
</page-query>


<script>
import Hero from '~/components/Hero';
import GrowerList from '~/components/GrowerList';
import GrowerItem from '~/components/GrowerItem';
import Filters from '~/components/Filters';

export default {
  metaInfo: {
    title: 'Jarden.fr - Le marché à ma porte'
  },

  components: {
    Hero,
    GrowerList,
    GrowerItem,
    Filters
  },

  data () {
    return {
      mobilFiltersModalVisible: false,
      search: '',
      growers: [
        {id: '123', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQuOL9qT6YmzF7uGhhx8OUTcc_iDFgvzLa4SU0Y7D5jEY4qBAs&usqp=CAU', name: 'La ferme des 3 rivières', city: 'Muzillac', canShip: true, canSell: true},
        {id: '456', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQuOL9qT6YmzF7uGhhx8OUTcc_iDFgvzLa4SU0Y7D5jEY4qBAs&usqp=CAU', name: 'La ferme des 3 rivières', city: 'Muzillac', canShip: true, canSell: true},
        {id: '789', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQuOL9qT6YmzF7uGhhx8OUTcc_iDFgvzLa4SU0Y7D5jEY4qBAs&usqp=CAU', name: 'La ferme des 3 rivières', city: 'Muzillac', canShip: true, canSell: true},
        {id: '789', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQuOL9qT6YmzF7uGhhx8OUTcc_iDFgvzLa4SU0Y7D5jEY4qBAs&usqp=CAU', name: 'La ferme des 3 rivières', city: 'Muzillac', canShip: false, canSell: true},
        {id: '789', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQuOL9qT6YmzF7uGhhx8OUTcc_iDFgvzLa4SU0Y7D5jEY4qBAs&usqp=CAU', name: 'La ferme des 3 rivières', city: 'Muzillac', canShip: false, canSell: false},
        {id: '789', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQuOL9qT6YmzF7uGhhx8OUTcc_iDFgvzLa4SU0Y7D5jEY4qBAs&usqp=CAU', name: 'La ferme des 3 rivières', city: 'Muzillac', canShip: true, canSell: true},
        {id: '789', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQuOL9qT6YmzF7uGhhx8OUTcc_iDFgvzLa4SU0Y7D5jEY4qBAs&usqp=CAU', name: 'La ferme des 3 rivières', city: 'Muzillac', canShip: true, canSell: true}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: space(5);
}
</style>