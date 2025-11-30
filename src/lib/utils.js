export function slugFromPath(path) {
	return path.match(/([\w-]+)\.(md)/i)?.[1] ?? null;
}

export function formatDate(date) {
	date = new Date(date);
	return date.toLocaleDateString("id-ID", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
