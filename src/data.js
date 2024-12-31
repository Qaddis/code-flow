export const techs = [
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

export const projects = [
	{
		title: "DL Guard",
		description: "Сайт для системы электронных пропусков.",
		image: "DL_Guard.webp",
		techs: ["TypeScript", "SCSS", "Next", "Redux", "Three.js", "Framer Motion"],
		type: "website"
	},
	{
		title: "Kick Culture",
		description: "Онлайн магазин кроссовок.",
		image: "Kick_Culture.webp",
		techs: [
			"TypeScript",
			"SCSS",
			"Vue (Compositions API)",
			"Vue Router",
			"Pinia"
		],
		type: "website"
	},
	{
		title: "Suggestion bot",
		description:
			"Бот для предложений. Проверяет сообщение на наличие матов/плохих слов, проверяет длину сообщения, тип приложенного файлы, и, если всё подходит, пересылает сообщение указанному человеку или в указанную группу",
		image: "Suggestion_bot.webp",
		techs: ["Python3", "Aiogram"],
		type: "bot"
	},
	{
		title: "Moderation bot",
		description:
			"Бот для модерации комментариев под постами в Telegram канале. Проверяет каждое сообщение на наличие матов/плохих слов (поддерживает русский и английский языки), и, если находит, то удаляет сообщение и отправляет предупреждение. После определённого количества предупреждений банит нарушителя на определенное время (максимальное кол-во предупреждений и время блокировки указывается в конфиге). Банит в обсуждении человека, чьё сообщение администратор перешлёт боту.С помощью команды администратор может разбанить человека.",
		image: "Moderation_bot.webp",
		techs: ["Python3", "Aiogram"],
		type: "bot"
	}
]
