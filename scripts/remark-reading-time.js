import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export default function remarkReadingTime() {
	return function (tree, file) {
		const textContent = toString(tree);
		const readingTime = getReadingTime(textContent);

		file.data.fm = {
			...(file.data.fm ?? {}),
			readingTime: readingTime.text,
			wordCount: `${readingTime.words} word${readingTime.words > 1 ? "s" : ""}`,
		};
	};
}
