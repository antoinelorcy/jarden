<template>
	<div class="two-cols grid">
		<div class="col-lg-3 tc__left">
			<slot name="left" />
		</div>
		<div class="col-lg-9 tc__right">
			<slot name="right" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.tc__right {
	padding: 0 space(4);
}
</style>