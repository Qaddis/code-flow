<script>
import { RouterView } from "vue-router"
import AppFooter from "./components/AppFooter.vue"
import AppHeader from "./components/AppHeader.vue"

export default {
	components: { RouterView, AppHeader, AppFooter }
}
</script>

<template>
	<app-header />

	<main class="main">
		<router-view v-slot="{ Component }">
			<transition name="router" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</main>

	<app-footer />
</template>

<style scoped lang="scss">
.main {
	min-height: calc(100vh - 75px);
}

/* Page Transitions */
.router-enter-from {
	opacity: 0;
}

.router-enter-active {
	transition: opacity 0.25s ease-in;
}

.router-leave-to {
	opacity: 0;
}

.router-leave-active {
	transition: opacity 0.25s ease-out;
}
</style>
