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
			<Link label="Réinitialiser les filtres" color="danger" />
		</div>

		<div class="f__section">
			<h4>Localisation</h4>
			<Radio label="Toute la France" />
			<Radio label="Bretagne" />
			<Radio label="Pays de la Loire" />
			<Radio label="Normandie" />
		</div>

		<div class="f__section">
			<h4>Par produits</h4>
			<Checkbox label="Fruits" />
			<Checkbox label="Legumes" />
			<Checkbox label="Viandes" />
			<Checkbox label="Pains et vienoiseries" />
			<Checkbox label="Boissons" />
			<Checkbox label="Plantes et fleurs" />
		</div>

		<div class="f__section">
			<h4>Filtrer par</h4>
			<Checkbox label="Vente directe sur place" />
			<Checkbox label="Livraison à domicile" />
			<Checkbox label="Panier JARDEN*" />
		</div>
		
		<div class="text-align--right">
			<Button v-if="$store.state.isSmallWindow" label="Filtrer" @click="$emit('close')" />
		</div>
	</component>
</template>

<script>
export default {
	props: {
		mobileModalVisible: Boolean
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