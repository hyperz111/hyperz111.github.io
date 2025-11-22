import hljs from "highlight.js";

export default function highlighter(code, language) {
	const htmlClass = language ? `language-${language}` : "nohighlight";
	const { value } = hljs.highlight(code, { language });
	const { name } = hljs.getLanguage(language);
	return `<div class="code-highlight"><span class="badge">${name}</span><pre tabindex="-1"><code class="hljs ${htmlClass}">{@html \`${value}\`}</code></pre></div>`;
}
