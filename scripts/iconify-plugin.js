import data from "@iconify-json/simple-icons/icons.json" with { type: "json" };

const ID = "virtual:iconify-simple-icons";

/**
 * Vite plugin to make iconify simple icons data is tree-shakeable
 * @param {Array<string>} icons Icons you want to include.
 */
export function iconify(icons) {
	return /** @type {import("vite").Plugin} */ ({
		name: "iconify",
		resolveId(id) {
			if (id === ID) {
				return ID;
			}
		},
		load(id) {
			if (id === ID) {
				let code = "export default {\n";

				for (const icon of icons) {
					if (!(icon in data.icons)) {
						this.info(`Icon \`${icon}\` is not available.`);
						continue;
					}
					code += `"${icon}": ${JSON.stringify(data.icons[icon].body)},\n`;
				}

				code += "}\n";
				return code;
			}
		},
	});
}
