<script>
import NavLink from "./ui/NavLink.vue"

export default {
	components: { NavLink }
}
</script>

<template>
	<footer class="footer">
		<div class="wrapper">
			<nav class="socials">
				<a
					class="link"
					href="https://vk.com/qaddis"
					target="_blank"
					title="Страница разработчика в VK"
				>
					<svg>
						<use xlink:href="#vk-logo"></use>
					</svg>
				</a>
				<a
					class="link"
					href="https://t.me/qaddis"
					target="_blank"
					title="Профиль разработчика в Telegram"
				>
					<svg>
						<use xlink:href="#tg-logo"></use>
					</svg>
				</a>
				<a
					class="link"
					href="https://github.com/Qaddis/code-flow"
					target="_blank"
					title="Репозиторий проекта на Github"
				>
					<svg>
						<use xlink:href="#github-logo"></use>
					</svg>
				</a>
			</nav>

			<p class="copyright">© Святослав "Qaddis" Барсуков 2024</p>
		</div>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	width: 100%;
	padding: 0 25px;
	border-top: 3px solid var(--add);
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
	padding: 60px 0 15px;
}

.socials {
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 30px;
}

.link {
	display: contents;

	svg {
		width: 85px;
		height: 85px;
		fill: var(--light);

		transition-property: fill, opacity, translate;
		transition-duration: 0.25s, 0.15s, 0.15s;
	}

	&:hover svg {
		fill: var(--blue);
	}

	&:active svg {
		opacity: 0.75;
		translate: 0 2px;
	}
}

.copyright {
	font-size: 1.2rem;
	font-weight: 500;
	text-align: center;
	margin-top: 15px;
}
</style>
