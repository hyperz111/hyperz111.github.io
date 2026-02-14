import { bundledLanguagesInfo, hastToHtml, codeToHast } from "shiki";

export default async function highlighter(code, lang) {
	const name = bundledLanguagesInfo.find((info) => info.id === lang || info.aliases?.includes?.(lang))?.name ?? "Text";
	const hast = await codeToHast(code, { lang, theme: "tokyo-night" });
	hast.children[0].properties.class += " p-2";

	return `<div class="code-highlight"><span class="badge">${name}</span>{@html \`${hastToHtml(hast)}\`}</div>`;
}
