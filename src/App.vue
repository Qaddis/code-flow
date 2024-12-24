<script>
import { RouterView } from "vue-router"

export default {
	components: { RouterView }
}
</script>

<template>
	<main class="main">
		<div class="wrapper">
			<router-view />
		</div>
	</main>
</template>

<style scoped lang="scss">
.main {
}

.wrapper {
}
</style>
