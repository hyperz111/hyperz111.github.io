import { error } from "@sveltejs/kit";
import { slugFromPath } from "$lib/utils.js";

export const load = async ({ params }) => {
	const modules = import.meta.glob(`/src/blogs/*.md`);

	let match = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post) {
		throw error(404); // Couldn't resolve the post
	}

	return {
		component: post.default,
		frontmatter: post.metadata,
	};
};
