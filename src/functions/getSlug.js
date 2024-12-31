export default function getSlug(text) {
	return text.trim().toLowerCase().replaceAll(" ", "-").replaceAll('"', "")
}
