<template>
	<component
		:is="$store.state.isSmallWindow ? 'Modal' : 'div'"
		title="Filtres"
		:visible="mobileModalVisible"
		class="filters"
		@close="$emit('close')"
	>
		<div class="f__head display-flex align-center justify-between">
			<h3 :style="$store.state.isSmallWindow && {opacity: 0}">Filtres</h3>
			<Link label="Réinitialiser les filtres" color="danger" @click="$emit('reset')" />
		</div>

		<div class="f__section">
			<h4>Localisation</h4>
			<Checkbox v-for="region in regions" :key="region.id" :label="region.name" v-model="region.checked"  />
		</div>

		<div class="f__section">
			<h4>Par catégories</h4>
			<Checkbox v-for="category in categories" :key="category.id" :label="category.name" v-model="category.checked"  />
		</div>

		<div class="f__section">
			<h4>Filtrer par</h4>
			<Checkbox v-for="filter in otherFilters" :key="filter.key" :label="filter.name" v-model="filter.checked"  />
		</div>
		
		<div class="text-align--right">
			<Button v-if="$store.state.isSmallWindow" label="Filtrer" @click="$emit('close')" />
		</div>
	</component>
</template>

<script>
export default {
	props: {
		mobileModalVisible: Boolean,
		categories: Array,
		regions: Array,
		otherFilters: Array
	}
}
</script>

<style lang="scss" scoped>
.f__head {
	margin-bottom: space(5);

	> h3 {
		margin: 0;
	}
}

.f__section {
	margin-bottom: space(5);

	> h4 {
		margin: 0 0 space(2);
	}
}
</style>