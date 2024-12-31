<script>
export default {
	props: {
		tech: String
	}
}
</script>

<template>
	<article class="tech-card">
		<img
			:src="`/techs/${tech}.webp`"
			:alt="tech + ' Logo'"
			class="tech-card__logo"
		/>
		<h4 class="tech-card__title">{{ tech }}</h4>
	</article>
</template>

<style scoped lang="scss">
.tech-card {
	width: 200px;
	background-color: var(--main);
	border-radius: 10px;
	padding: 10px;
	position: relative;

	&__logo {
		width: 100%;
		margin-bottom: 15px;
	}

	&__title {
		font-family: var(--jost);
		font-size: 1.35rem;
		font-weight: 600;
		text-align: center;
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		width: 103%;
		height: 103%;
		background: conic-gradient(
			from var(--angle),
			var(--blue) 0%,
			transparent 10%,
			var(--green) 40%,
			transparent 60%,
			var(--blue) 90%
		);
		border-radius: 10px;
		z-index: -1;
		animation: spin 3s linear infinite;
	}

	&::before {
		filter: blur(10px);
		opacity: 0.5;
	}
}

@property --angle {
	syntax: "<angle>";
	initial-value: 0deg;
	inherits: false;
}

@keyframes spin {
	from {
		--angle: 0deg;
	}

	to {
		--angle: 360deg;
	}
}
</style>
