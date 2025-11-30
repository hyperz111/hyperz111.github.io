import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export default function remarkReadingTime() {
	return function (tree, file) {
		const textContent = toString(tree);
		const readingTime = getReadingTime(textContent);

		file.data.fm = {
			...(file.data.fm ?? {}),
			readingTime: `${Math.ceil(readingTime.minutes.toFixed(2))} menit`,
		};
	};
}
