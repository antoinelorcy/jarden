<template>
	<g-link :to="grower.path" class="grower-item">
		<div class="gi__image">
			<g-image :src="(grower.thumbnail && grower.thumbnail.url) || ''" width="200" />
		</div>
		<h4>{{ grower.name }}</h4>
		<div class="gi__footer display-flex">
			<Tooltip v-if="grower.canDeliver" content="Livraison à domicile" class="gi__footer-item">
				<Icon name="ship" :size="15" />
			</Tooltip>
			<Tooltip v-if="grower.canSell" content="Vente en directe sur place" class="gi__footer-item">
				<Icon  name="cart" :size="15" />
			</Tooltip>
			<span class="gi__footer-item display-flex align-center">
				<Icon name="pin" :size="15" /> <small>{{ grower.city.name }}</small>
			</span>
		</div>
	</g-link>
</template>

<script>
export default {
	props: {
		grower: Object
	}
}
</script>

<style lang="scss" scoped>
.grower-item {
	overflow: hidden;
	text-decoration: none;
	color: $body-font-color;
	outline: none;

	&:hover,
	&:focus {
		h4 {
			color: color(primary);
		}

		.gi__image {
			box-shadow: 4px 4px 0 rgba(0, 0, 0, .1);
		}

		.gi__image img {
			transform: scale(1.1);
		}
	}

	h4 {
		transition: color 0.3s ease;
	}

	> .gi__image {
		border-radius: 5px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: space(2);
		width: 100%;
		height: 140px;
		background-color: color(grey-lighter);
		transition: box-shadow 0.3s ease;

		> img {
			object-fit: cover;
			width: 100%;
			height: 100%;
			transition: transform 0.3s ease;
		}
	}

	.gi__footer-item {
		margin-right: space(3);

		> .icon {
			margin-right: space(1);
		}
	}
}
</style>