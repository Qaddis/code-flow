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
		<div class="wrapper">
			<router-view v-slot="{ Component }">
				<transition name="router" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</main>

	<app-footer />
</template>

<style scoped lang="scss">
.main {
	min-height: calc(100vh - 75px);
	padding: 50px 25px;
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
}

/* Page Transitions */
.router-enter-from {
	opacity: 0;
	translate: 0 50px;
}

.router-enter-active {
	transition: all 0.25s ease-in;
}

.router-leave-to {
	opacity: 0;
	translate: 0 50px;
}

.router-leave-active {
	transition: all 0.25s ease-out;
}
</style>
