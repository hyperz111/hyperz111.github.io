import { slugFromPath } from "$lib/utils.js";

export const load = async () => {
	const modules = import.meta.glob(`/src/blogs/*.md`);

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then((post) => ({
			slug: slugFromPath(path),
			...post.metadata,
			date: new Date(post.metadata.date),
		})),
	);

	const blogs = (await Promise.all(postPromises)).sort((a, b) => (a.date > b.date ? -1 : 1));

	return { blogs };
};
