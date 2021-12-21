<template>
  <Layout>
    <Hero show-intro />
    <TwoCols class="inner-width">
      <Filters
        :mobile-modal-visible="mobileFiltersModalVisible"
        :categories="categories"
        :regions="regions"
        :other-filters="otherFilters"
        @close="mobileFiltersModalVisible = false"
        @reset="resetFilters"
        slot="left"
      />
      <template slot="right">
        <div class="display-flex">
          <Input v-model="search" placeholder="Rechercher par mots clés" icon="search" class="fluid-width flex-fluid" />
          <Button
            v-if="$store.state.isSmallWindow"
            icon="filter"
            fill="raw"
            class="m--l-2"
            @click="mobileFiltersModalVisible = true"
          />
        </div>
        <GrowerList :growers="growers" />
      </template>
    </TwoCols>
  </Layout>
</template>

<page-query>
query allGrowersFilters {
  growers: allStrapiGrowers {
    edges {
      node {
        id
        name
        path
        city {
          name
          region
        }
        thumbnail {
          url
        }
        canSell
        canDeliver
        categories {
          id
        }
      }
    }
  }
}
</page-query>

<static-query>
query allStrapiCategory {
  categories: allStrapiCategory (sortBy: "name", order: ASC) {
    edges {
      node {
        id
        name
      }
    }
  }
  
  regions: allStrapiRegion (sortBy: "name" order: ASC) {
    edges {
      node {
        id
        name
      }
    }
  }
}
</static-query>


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
      mobileFiltersModalVisible: false,
      search: '',
      categories: [],
      regions: [],
      otherFilters: []
    }
  },

  mounted () {
    this.categories = this.$static.categories.edges.map((e) => {
      return {
        ...e.node,
        checked: false
      }
    });

    this.regions = this.$static.regions.edges.map((e) => {
      return {
        ...e.node,
        checked: false
      }
    });

    this.otherFilters = [
      {
        name: 'Vente directe sur place',
        key: 'canSell',
        checked: false
      },
      {
        name: 'Livraison à domicile',
        key: 'canDeliver',
        checked: false
      },
      {
        name: 'Panier Jarden*',
        key: 'soon',
        checked: false
      }
    ]
  },

  computed: {
    growers () {
      return this.$page.growers.edges.map((e) => e.node).filter((g) => {
        let r = true;

        if (this.checkedCategories.length) {
          if (!g.categories.length) return;
          r = (g.categories.map((c) => ''+c.id).filter(categoryId => this.checkedCategories.includes(categoryId))).length;
        }

        if (this.checkedRegions.length && r) {
          if (!g.city) return;
          r = this.checkedRegions.includes(''+g.city.region);
        }

        if (this.checkedOtherFilters.length && r) {
          r = this.checkedOtherFilters.find((o) => {
            return !!g[o];
          });
        }

        if (this.search !== '' && r) {
          r = g.name.toLowerCase().indexOf(this.search) > -1
        }

        return r;
      });
    },

    checkedCategories () {
      return this.categories.filter((c) => c.checked).map((c) => c.id);
    },

    checkedRegions () {
      return this.regions.filter((r) => r.checked).map((r) => r.id);
    },

    checkedOtherFilters () {
      return this.otherFilters.filter((o) => o.checked).map((o) => o.key);
    }
  },

  methods: {
    resetFilters () {
      this.categories = this.categories.map((c) => {
        return {
          ...c,
          checked: false
        }
      })

      this.regions = this.regions.map((r) => {
        return {
          ...r,
          checked: false
        }
      })

      this.otherFilters = this.otherFilters.map((o) => {
        return {
          ...o,
          checked: false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: space(5);
}
</style>