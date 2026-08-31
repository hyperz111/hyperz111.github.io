export function slugFromPath(path) {
	return path.match(/([\w-]+)\.(md)/i)?.[1] ?? null;
}

export function formatDate(date) {
	date = new Date(date);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
