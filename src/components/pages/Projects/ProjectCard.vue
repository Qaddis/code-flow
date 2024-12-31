<script>
import getSlug from "../../../functions/getSlug"
import GradientButton from "../../ui/GradientButton.vue"

export default {
	components: { GradientButton },
	props: {
		title: String,
		description: String,
		image: String
	},
	methods: {
		goToProject() {
			this.$router.push(`/projects/${getSlug(this.title)}`)
		}
	}
}
</script>

<template>
	<article class="project-card">
		<img class="image" :src="image" :alt="`${title} Banner`" />

		<div class="info">
			<h4 class="title">{{ title }}</h4>

			<p class="description">{{ description.split(".")[0] }}</p>

			<gradient-button @click="goToProject">Подробнее...</gradient-button>
		</div>
	</article>
</template>

<style scoped lang="scss">
.project-card {
	max-width: 75%;
	background-color: var(--main);
	border-radius: 20px;
	position: relative;

	&::before,
	&::after {
		content: "";
		width: 100%;
		height: 100%;
		padding: 3px;
		box-sizing: content-box;

		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		z-index: -1;

		background: conic-gradient(
			from var(--angle),
			var(--blue) 0%,
			transparent 3%,
			var(--green) 50%,
			transparent 56%,
			var(--blue) 98%
		);
		border-radius: 20px;
		animation: rotation 4s linear infinite;
	}

	&::before {
		opacity: 0.75;
		filter: blur(15px);
	}
}

.image {
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-bottom: 1px solid var(--add);
}

.info {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;

	button {
		width: 45%;
		margin-top: 15px;
		align-self: center;
	}
}

.title {
	font-size: 1.2rem;
	font-family: var(--jost);
	font-weight: bold;
}

@property --angle {
	syntax: "<angle>";
	initial-value: 0deg;
	inherits: false;
}

@keyframes rotation {
	from {
		--angle: 0deg;
	}

	to {
		--angle: 360deg;
	}
}
</style>
