<template>
	<div class="grower-sidebar">
		<Link class="gs__back" icon="arrow-left" is-icon-prefix label="Retour à la liste" @click="$router.back()" />
		<g-image :src="image" class="gs__image m--b-4" width="300" />
		<h1>{{ title }}</h1>
		<p class="m--b-6">
			{{ description  }}
		</p>
		
		<div v-if="canSell" class="display-flex m--b-2">
			<Icon name="cart" class="m--r-2" /> Vente en directe sur place
		</div>
		
		<div v-if="canShip" class="display-flex m--b-2">
			<Icon name="ship" class="m--r-2" /> Livraison à domicile
		</div>

		<div class="m--t-6">
			<div v-if="email">
				<Button icon="email" label="Envoyer un message" class="m--b-2" />
			</div>
			<div v-if="phone">
				<Button icon="phone" fill="hollow" label="Voir le numéro" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: String,
		title: String,
		description: String,
		canSell: Boolean,
		canShip: Boolean,
		email: String,
		phone: String
	}
}
</script>

<style lang="scss" scoped>
.gs__back {
	@include breakpoint(medium-up) {
		background-color: rgba(color(black), 0.5);
		color: color(white);
		border-radius: 5px 5px 0 0;
	}
}

.gs__image {
	width: 100%;
	border-radius: 10px;
	box-shadow: 4px 4px 0 rgba(0, 0, 0, .1);

	@include breakpoint(medium-up) {
		border-radius: 0 10px 10px 10px;
	}
}
</style>