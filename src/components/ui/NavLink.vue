<script>
import { RouterLink } from "vue-router"

export default {
	components: { RouterLink },
	props: {
		href: String
	}
}
</script>

<template>
	<router-link :to="href" class="link" active-class="--active">
		<slot />
	</router-link>
</template>

<style scoped lang="scss">
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
