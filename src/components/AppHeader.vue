<script>
import NavLink from "./ui/NavLink.vue"

export default {
	components: { NavLink },
	methods: {
		goHome() {
			this.$router.push("/")
		}
	}
}
</script>

<template>
	<header class="header">
		<div class="wrapper">
			<h1 @click="goHome" class="logo">Code Flow</h1>

			<nav class="nav">
				<nav-link href="/">Главная</nav-link>
				<nav-link href="/projects">Проекты</nav-link>
				<nav-link href="/new-order">Сделать заказ</nav-link>
			</nav>
		</div>
	</header>
</template>

<style scoped lang="scss">
.header {
	width: 100%;
	padding: 0 25px;
	background-color: var(--main);
	border-bottom: 3px solid var(--add);
	position: sticky;
	top: 0;
	left: 0;
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
	padding: 15px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo {
	font-size: 2.5rem;
	font-family: var(--bangers);
	background: linear-gradient(45deg, var(--blue), var(--green));
	background-clip: text;
	color: transparent;
	padding-right: 0.2rem;
	user-select: none;
	cursor: pointer;
	position: relative;

	&::before {
		content: "";
		width: 100%;
		height: 100%;

		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;

		background: linear-gradient(45deg, var(--blue), var(--green));
		opacity: 0.35;
		filter: blur(15px);

		transition-property: scale, opacity;
		transition-duration: 0.25s, 0.2s;
	}

	&:hover::before {
		scale: 0;
		opacity: 0;
	}
}

.nav {
	display: flex;
	align-items: center;
	column-gap: 15px;
}
</style>
