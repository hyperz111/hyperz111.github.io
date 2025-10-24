import hljs from "highlight.js";

export default function highlighter(code, language) {
	const htmlClass = language ? `language-${language}` : "nohighlight";
	const { value } = hljs.highlight(code, { language });
	return `<pre class="code-highlight"><code class="hljs ${htmlClass}">{@html \`${value}\`}</code></pre>`;
}
