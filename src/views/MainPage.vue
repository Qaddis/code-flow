<script>
import Landing from "../components/pages/Main/Landing.vue"
import TechCard from "../components/pages/Main/TechCard.vue"
import AppHeading from "../components/ui/AppHeading.vue"
import GradientButton from "../components/ui/GradientButton.vue"
import { techs } from "../data"

export default {
	components: { Landing, AppHeading, TechCard, GradientButton },
	data() {
		return {
			techs,
			showHint: false,
			hintIndex: 0,
			hintTexts: [
				"Мы очень быстро выполняем заказы.<br />Бот за 2-3 дня? Сайт меньше чем за неделю? Для нас - это реально",
				"Мы используем только актуальные и поддерживаемые технологии и хорошо оптимизируем каждый проект",
				"Мы тщательно тестируем каждый проект и своевременно исправляем баги, что гарантирует бесперебойную работу вашего сайта/бота"
			],
			hintProcessed: false
		}
	},
	methods: {
		changeHintState(index) {
			if (!this.hintProcessed) {
				if (this.showHint && this.hintIndex !== index) {
					this.hintProcessed = true
					this.showHint = !this.showHint

					return setTimeout(() => {
						this.hintIndex = index
						this.showHint = !this.showHint
						this.hintProcessed = false
					}, 600)
				}

				this.showHint = !this.showHint
				this.hintIndex = index
			}
		}
	},
	mounted() {
		document.title = "Главная | Code Flow"
	}
}
</script>

<template>
	<div class="main-page">
		<div class="wrapper">
			<landing />

			<section class="technologies">
				<app-heading type="section">Технологии</app-heading>

				<div class="container">
					<tech-card v-for="(tech, index) in techs" :key="index" :tech />
				</div>
			</section>

			<section class="why-us">
				<app-heading type="section">Почему именно мы?</app-heading>

				<ul class="advantages">
					<li
						@click="changeHintState(0)"
						class="advantage"
						:class="{ active: showHint && hintIndex == 0 }"
					>
						<h4>Скорость</h4>
					</li>
					<li
						@click="changeHintState(1)"
						class="advantage"
						:class="{ active: showHint && hintIndex == 1 }"
					>
						<h4>Качество</h4>
					</li>
					<li
						@click="changeHintState(2)"
						class="advantage"
						:class="{ active: showHint && hintIndex == 2 }"
					>
						<h4>Надёжность</h4>
					</li>

					<hr />
				</ul>

				<div :class="{ show: showHint }" class="hint">
					<p v-html="hintTexts[hintIndex]"></p>
				</div>
			</section>

			<section class="links">
				<app-heading type="section">Решайтесь!</app-heading>

				<div class="buttons">
					<gradient-button @click="$router.push('/projects')">
						Наши проекты
					</gradient-button>
					<span>или</span>
					<gradient-button @click="$router.push('/new-order')">
						Сделать заказ
					</gradient-button>
				</div>

				<p class="afterwords">Надеемся на плодотворное сотрудничество!</p>
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

.technologies {
	margin: 100px 0 100px;

	.container {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(4, 200px);
		gap: 25px;
	}
}

.advantages {
	width: 80%;
	margin: 0 auto;

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
		font-size: 1.3rem;
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

	&.active {
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
		font-size: 1.05rem;
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

.links {
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.buttons {
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 15px;

	span {
		color: #4c525e;
	}
}

.afterwords {
	margin-top: 15px;
	font-size: 1.15rem;
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
