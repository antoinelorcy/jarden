<script>
import Intro from './Intro';
import GrowerIntro from './GrowerIntro';

export default {
	components: {
		Intro,
		GrowerIntro
	},

	props: {
		showIntro: Boolean,
		customImage: String
	}
}
</script>

<template>
	<section class="hero" :style="customImage && { backgroundImage: `url(${customImage})`}">
		<div class="inner-width display-flex justify-between">
			<div>
				<Intro v-if="showIntro" />
			</div>
			<GrowerIntro v-if="!$store.state.isSmallWindow" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.hero {
	background: url('../assets/images/hero-bg.png') center center no-repeat;
	background-size: cover;
	min-height: 270px;

	.intro {
		background-color: color(white);
		width: 360px;
		margin-top: 120px;
		display: inline-block;
		padding: space(6) space(6) 0 space(6);
	}

	.grower {
		background-color: color(white);
		width: 390px;
		margin-top: 0;
		margin-bottom: auto;
		display: inline-block;
		padding: space(3) space(6) space(3) space(6);
	}
}
</style>