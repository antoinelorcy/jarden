<template>
	<Modal
		title="Menu"
		:visible="visible"
		class="burger-menu"
		@close="$emit('close')"
	>
		<div class="bm__menu">
			<Link to="/" label="Les producteurs" />
			<Link to="/about/" label="Le concept" />
		</div>
		<GrowerIntro />
		<Button @click="modalGrowerVisible = true" icon="plus" label="Ajouter un producteur" />


		<GrowerAddModal :visible="modalGrowerVisible" @close="modalGrowerVisible = false" />
	</Modal>
</template>

<script>
import GrowerIntro from './GrowerIntro';
import GrowerAddModal from './GrowerAddModal';

export default {
	props: {
		visible: Boolean
	},

	components: {
		GrowerIntro,
		GrowerAddModal
	},

	data () {
		return {
			modalGrowerVisible: false
		}
	}
}
</script>

<style lang="scss" scoped>
.bm__menu {
	display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 50px;
    padding-bottom: 20px;
    border-bottom: 1px solid color(grey-lighter);

	> .link {
		font-size: 25px;
		margin-left: -#{space(3)};
	}
}
</style>