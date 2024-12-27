<script>
import Landing from "../components/pages/MainPage/Landing.vue"
import TechCard from "../components/pages/MainPage/TechCard.vue"

export default {
	components: { Landing, TechCard },
	data() {
		return {
			showHint: false,
			hintIndex: 0,
			hintTexts: [
				"Мы очень быстро выполняем заказы.<br />Бот за 2-3 дня? Сайт меньше чем за неделю? Для нас - это реально",
				"Мы тщательно тестируем каждый проект и своевременно исправляем баги, что гарантирует бесперебойную работу вашего сайта/бота",
				"Мы очень качественно выполняем свою работу.<br />Используем только актуальные и поддерживаемые технологии и хорошо оптимизируем каждый проект"
			],
			techs: [
				"HTML",
				"CSS",
				"SCSS",
				"Tailwind",
				"JavaScript",
				"TypeScript",
				"Python",
				"Golang",
				"React",
				"Vue",
				"Next",
				"Nuxt"
			]
		}
	},
	methods: {
		setHintState(state, index) {
			if (state) this.hintIndex = index
			this.showHint = state
		}
	}
}
</script>

<template>
	<div class="main-page">
		<div class="wrapper">
			<landing />

			<section class="technologies">
				<h3 class="heading">Технологии</h3>

				<div class="container">
					<tech-card v-for="(tech, index) in techs" :key="index" :tech />
				</div>
			</section>

			<section class="why-us">
				<h3 class="heading">Почему именно мы?</h3>

				<ul class="advantages">
					<li
						@mouseover="setHintState(true, 0)"
						@mouseout="setHintState(false)"
						class="advantage"
					>
						<h4>Скорость</h4>
					</li>
					<li
						@mouseover="setHintState(true, 1)"
						@mouseout="setHintState(false)"
						class="advantage"
					>
						<h4>Качество</h4>
					</li>
					<li
						@mouseover="setHintState(true, 2)"
						@mouseout="setHintState(false)"
						class="advantage"
					>
						<h4>Надёжность</h4>
					</li>

					<hr />
				</ul>

				<div :class="{ show: showHint }" class="hint">
					<p v-html="hintTexts[hintIndex]"></p>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped lang="scss">
.main-page {
	padding: 50px 25px;
	background-color: var(--main);
	background: radial-gradient(circle at 96vw 8vh, #1b998b65, transparent 40%),
		radial-gradient(circle at 4vw 92vh, #7494ea65, transparent 40%);
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
}

.heading {
	font-family: var(--jost);
	font-weight: bold;
	font-size: 2rem;
	text-align: center;
}

.technologies {
	margin: 100px 0 100px;

	.container {
		margin-top: 25px;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(4, 200px);
		gap: 25px;
	}
}

.advantages {
	width: 80%;
	margin: 25px auto 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	hr {
		width: 100%;
		border: none;
		border-bottom: 3px dashed var(--add);
		position: absolute;
		top: 50%;
		left: 0;
		z-index: 1;
	}
}

.advantage {
	background-color: var(--dark);
	border: 3px dashed var(--add);
	border-radius: 10px;
	padding: 20px 35px;
	user-select: none;
	cursor: pointer;
	z-index: 2;
	transition: scale 0.25s ease-out;

	h4 {
		background: var(--gradient);
		background-clip: text;
		font-size: 1.5rem;
		font-weight: bold;
		transition: color 0.25s;
	}

	&:nth-child(1) h4 {
		animation: blinking 3.5s ease-in-out infinite;
	}

	&:nth-child(2) h4 {
		animation: blinking 3.5s ease-in-out 1.25s infinite;
	}

	&:nth-child(3) h4 {
		animation: blinking 3.5s ease-in-out 2.5s infinite;
	}

	&:hover {
		scale: 1.2;

		h4 {
			color: transparent;
			text-shadow: none !important;
		}
	}
}

.hint {
	width: 60%;
	margin: 25px auto 0;
	border: 1px solid var(--add);
	border-radius: 5px;
	overflow: hidden;
	display: grid;
	grid-template-rows: 0fr;
	opacity: 0;

	transition-property: grid-template-rows, padding, opacity;
	transition-duration: 0.25s, 0.25s, 0.2s;
	transition-delay: 0.35s, 0.35s, 0.6s;

	p {
		min-height: 0;
		font-size: 1.15rem;
		text-align: center;
		text-wrap: wrap;
		opacity: 0;
		transition: opacity 0.35s;
	}

	&.show {
		grid-template-rows: 1fr;
		padding: 15px;
		opacity: 1;
		transition-delay: 0.2s, 0.2s, 0s;

		p {
			opacity: 1;
			transition-delay: 0.45s;
		}
	}
}

@keyframes blinking {
	0%,
	100% {
		text-shadow: none;
	}

	50% {
		text-shadow: 0 0 10px var(--light);
	}
}
</style>
