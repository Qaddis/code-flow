<script>
import Landing from "../components/pages/MainPage/Landing.vue"
import TechCard from "../components/pages/MainPage/TechCard.vue"

export default {
	components: { Landing, TechCard },
	data() {
		return {
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
		</div>
	</div>
</template>

<style scoped lang="scss">
.main-page {
	padding: 50px 25px;
	background-color: var(--main);
	background: radial-gradient(circle at 96vw 8vh, #1b998b65, transparent 40%),
		radial-gradient(circle at 4vw 92vh, #7494ea65, transparent 40%);
	background-attachment: fixed;
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
	margin: 100px 0 0;

	.container {
		margin-top: 25px;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(4, 200px);
		gap: 25px;
	}
}
</style>
