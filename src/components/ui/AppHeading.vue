<script>
export default {
	props: {
		type: String
	}
}
</script>

<template>
	<h2 class="heading" :class="type">
		<slot />
	</h2>
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
