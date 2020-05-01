<template>
	<div class="grower-list grid">
		<div class="col-lg-4" v-for="grower in growers" :key="grower.id">
			<GrowerItem
				v-bind="{
					imageSrc: grower.node.image,
					name: grower.node.name,
					location: grower.node.city,
					canShip: grower.node.canShip,
					canSell: grower.node.canSell,
					slug: grower.node.slug
				}"
			/>
		</div>
	</div>
</template>

<script>
import GrowerItem from '~/components/GrowerItem';

export default {
  components: {
    GrowerItem
  },
  props: {
	  growers: Array
  }
}
</script>

<style lang="scss" scoped>
.grower-list {
	margin: space(4) -#{space(3)};

	> div {
		padding: 0 space(3);
		overflow: hidden;
		margin-bottom: space(6);
	}
}
</style>