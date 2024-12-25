<script>
import Landing from "../components/pages/MainPage/Landing.vue"

export default {
	components: { Landing }
}
</script>

<template>
	<div class="main-page">
		<div class="wrapper">
			<landing />
		</div>
	</div>
</template>

<style scoped lang="scss">
.main-page {
	padding: 50px 25px;
	background-color: var(--main);
	background: radial-gradient(circle at 96vw 8vh, #1b998b65, transparent 40%),
		radial-gradient(circle at 4vw 92vh, #7494ea65, transparent 40%);
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
}
</style>
