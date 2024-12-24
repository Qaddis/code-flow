<script>
import { RouterView } from "vue-router"
import AppHeader from "./components/AppHeader.vue"

export default {
	components: { RouterView, AppHeader }
}
</script>

<template>
	<app-header />

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
