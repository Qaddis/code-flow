<script>
export default {
	props: {
		disabled: Boolean
	},
	emits: ["click"]
}
</script>

<template>
	<button @click="$emit('click')" class="button" :disabled>
		<slot />
	</button>
</template>

<style scoped lang="scss">
.button {
	font-size: 1.35rem;
	font-weight: bold;
	color: var(--light);
	background: var(--gradient);
	border-radius: 5px;
	padding: 10px 25px;
	position: relative;
	transition-property: opacity, translate;
	transition-duration: 0.15s, 0.15s;

	&::before {
		content: "";
		width: 100%;
		height: 100%;
		background: var(--gradient);
		opacity: 0;
		filter: blur(10px);

		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		z-index: -1;
		transition: opacity 0.25s;
	}

	&:hover::before {
		opacity: 0.75;
	}

	&:active {
		opacity: 0.75;
		translate: 0 3px;

		&::before {
			opacity: 0;
		}
	}

	&:disabled {
		translate: 0;
		filter: grayscale(50%);
		opacity: 0.75;

		&::before {
			opacity: 0;
		}
	}
}
</style>
