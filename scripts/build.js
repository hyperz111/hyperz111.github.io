import fs from "node:fs/promises";
import path from "node:path";
import Mustache from "mustache";
import matter from "gray-matter";

const build = async () => {
	const top = path.join(import.meta.dirname, "..");

	const contents = path.join(top, "contents");
	const entries = await fs.readdir(contents, { withFileTypes: true, recursive: true });

	const destination = path.join(top, "dist");
	await fs.rm(destination, { recursive: true, force: true });

	const statics = path.join(top, "static");
	await fs.cp(statics, destination, { recursive: true });

	const template = await fs.readFile(path.join(import.meta.dirname, "template.html"), "utf8");

	for (const entry of entries) {
		const full = path.join(entry.parentPath, entry.name);
		const route = full.slice(contents.length);
		const end = path.join(destination, route);

		if (entry.isFile()) {
			if (end.endsWith(".md")) {
				const parsed = matter(await fs.readFile(full, "utf8"));

				const rendered = Mustache.render(template, {
					data: parsed.data,
					view: {
						pwd: path.parse(route).dir,
						ls: (await fs.readdir(path.join(full, ".."))).join(" "),
						cat: parsed.content.trim(),
					},
				});

				await fs.writeFile(end.replace(".md", ".html"), rendered);
			} else {
				await fs.cp(full, end);
			}
		} else if (entry.isDirectory()) {
			await fs.mkdir(end, { recursive: true });
		}
	}
};

build();
