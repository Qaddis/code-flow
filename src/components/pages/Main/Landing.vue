<script>
export default {
	data() {
		return {
			value: "",
			isTyping: false,
			isImageHidden: true,
			values: ["Веб-сайты", "Telegram боты"],
			colors: ["var(--blue)", "var(--green)"],
			images: ["/Banner_Web.webp", "/Banner_Bots.webp"],
			colorsIndex: 0,
			valueIndex: 0,
			charIndex: 0
		}
	},
	methods: {
		typeText() {
			if (this.charIndex < this.values[this.valueIndex].length) {
				if (!this.isTyping) this.isTyping = true
				if (this.isImageHidden) this.isImageHidden = false

				this.value += this.values[this.valueIndex].charAt(this.charIndex)
				this.charIndex++

				setTimeout(this.typeText, 150)
			} else {
				this.isTyping = false
				setTimeout(this.eraseText, 3000)
			}
		},
		eraseText() {
			if (this.charIndex > 0) {
				if (!this.isTyping) this.isTyping = true
				if (this.charIndex === 2) this.isImageHidden = true

				this.value = this.values[this.valueIndex].substring(
					0,
					this.charIndex - 1
				)
				this.charIndex--

				setTimeout(this.eraseText, 100)
			} else {
				if (!this.isImageHidden) this.isImageHidden = true

				this.valueIndex++
				if (this.valueIndex >= this.values.length) this.valueIndex = 0

				this.colorsIndex++
				if (this.colorsIndex >= this.colors.length) this.colorsIndex = 0

				setTimeout(this.typeText, 1150)
			}
		}
	},
	mounted() {
		setTimeout(this.typeText, 2150)
	}
}
</script>

<template>
	<section class="landing">
		<div class="text-info">
			<h2 class="logo">Code Flow</h2>

			<h3 class="lure">
				<span class="typed-text" :style="{ color: colors[colorsIndex] }">
					{{ value }}
				</span>
				<span class="cursor" :class="{ typing: isTyping }">&nbsp;</span>
				<br />
				любой сложности.
			</h3>
		</div>

		<div class="image" :class="{ hidden: isImageHidden }">
			<img :src="images[valueIndex]" alt="Banner" />
		</div>
	</section>
</template>

<style scoped lang="scss">
.landing {
	width: 100%;
	height: calc(100vh - 176px);

	display: flex;
	align-items: center;
	justify-content: space-between;
}

.text-info {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 15px;
}

.typed-text {
	font-weight: 700;
}

.logo {
	font-family: var(--bangers);
	font-size: 4.5rem;
	padding-right: 0.25em;
	background: var(--gradient);
	background-clip: text;
	color: transparent;
	position: relative;

	&::before {
		content: "";
		width: 110%;
		height: 100%;

		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;

		background: var(--gradient);
		opacity: 0.45;
		filter: blur(20px);
	}
}

.lure {
	font-weight: 600;
	font-size: 2.35rem;
	line-height: 1.1;
}

.cursor {
	display: inline-block;
	width: 0.2rem;
	height: 100%;
	border-radius: 0.2rem;
	margin-left: 0.15rem;
	background-color: var(--text);
	animation: cursor 1s step-start infinite;

	&.typing {
		animation: none;
	}
}

.image {
	width: 40%;
	aspect-ratio: 1/1;
	border: 3px solid var(--add);
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 3.5px 3.5px 10px rgba($color: #000, $alpha: 0.45);
	transition-property: opacity, translate;
	transition-duration: 0.25s;

	&.hidden {
		translate: 0 10%;
		opacity: 0;
	}
}

@keyframes cursor {
	0%,
	100% {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}
}
</style>
