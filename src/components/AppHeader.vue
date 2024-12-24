<script>
import { RouterLink } from "vue-router"

export default {
	components: { RouterLink },
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
				<router-link to="/" class="link" active-class="--active">
					Главная
				</router-link>
				<router-link to="/projects" class="link" active-class="--active">
					Проекты
				</router-link>
				<router-link to="/new-order" class="link" active-class="--active">
					Сделать заказ
				</router-link>
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
	padding: 0 0.35rem;
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

.link {
	font-size: 1.15rem;
	color: var(--text);
	font-weight: 500;
	position: relative;
	transition-property: color, opacity, translate;
	transition-duration: 0.25s, 0.15s, 0.15s;

	&:hover {
		color: var(--blue);
	}

	&:active {
		opacity: 0.85;
		translate: 0 1.5px;
	}

	&::after {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;

		width: 0;
		height: 2px;
		background-color: var(--green);
		border-radius: 2px;

		transition: width 0.25s;
	}

	&.--active {
		color: var(--text);
		opacity: 1;
		translate: 0;

		&::after {
			width: 100%;
		}
	}
}
</style>
