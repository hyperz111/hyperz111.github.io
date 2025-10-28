export function defineTheme({ light, dark }) {
	return {
		light,
		dark,
		get auto() {
			const beDark = dark
				.trim()
				.split(/\s+/g)
				.map((cls) => `dark:${cls}`)
				.join(" ");
			return `${light} ${beDark}`.trim();
		},
	};
}

export const themes = ["auto", "light", "dark"];
