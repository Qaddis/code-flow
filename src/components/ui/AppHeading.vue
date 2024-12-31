<script>
export default {
	props: {
		type: String
	}
}
</script>

<template>
	<component class="heading" :class="type" :is="type === 'page' ? 'h2' : 'h3'">
		<slot />
	</component>
</template>

<style scoped lang="scss">
.heading {
	font-family: var(--jost);
	font-weight: bold;
	text-align: center;
	margin-bottom: 25px;

	&.page {
		font-size: 1.8rem;
	}

	&.section {
		font-size: 1.6rem;
	}
}
</style>
