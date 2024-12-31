<script>
import ProjectCard from "../components/pages/Projects/ProjectCard.vue"
import AppHeading from "../components/ui/AppHeading.vue"
import { projects } from "../data"

export default {
	components: { AppHeading, ProjectCard },
	data() {
		return {
			websites: projects.filter(item => item.type === "website"),
			bots: projects.filter(item => item.type === "bot")
		}
	},
	mounted() {
		document.title = "Проекты | Code Flow"
	}
}
</script>

<template>
	<div class="projects-page">
		<div class="wrapper">
			<app-heading type="page">Наши проекты</app-heading>

			<app-heading type="section">Веб-сайты</app-heading>
			<div style="margin-bottom: 35px" class="container">
				<project-card
					v-for="site in websites"
					:key="site.title"
					:title="site.title"
					:description="site.description"
					:image="'/projects/' + site.image"
				/>
			</div>

			<app-heading type="section">Боты</app-heading>
			<div class="container">
				<project-card
					v-for="bot in bots"
					:key="bot.title"
					:title="bot.title"
					:description="bot.description"
					:image="'/projects/' + bot.image"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.projects-page {
	min-height: calc(100vh - 76px);
	background-color: var(--main);
	background: radial-gradient(circle at 96vw 92vh, #1b998b65, transparent 40%),
		radial-gradient(circle at 4vw 8vh, #7494ea65, transparent 40%);
	background-attachment: fixed;
	padding: 50px 25px;
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 20px;
}
</style>
