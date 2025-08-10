import "./style.css";
import Prism from "prismjs";

function render(data) {
	document.title = data.name;

	let ICON = document.createElement("link");
	ICON.rel = "icon";
	ICON.type = "image/png";
	ICON.href = data.avatar_url;
	document.head.appendChild(ICON);

	let PROFILE_IMAGE = document.getElementById("PROFILE_IMAGE");
	let PROFILE_NAME = document.getElementById("PROFILE_NAME");
	let PROFILE_BIO = document.getElementById("PROFILE_BIO");
	let PROFILE_LOCATION_TEXT = document.getElementById("PROFILE_LOCATION_TEXT");
	let PROFILE_FOLLOWERS = document.getElementById("PROFILE_FOLLOWERS");
	let PROFILE_FOLLOWING = document.getElementById("PROFILE_FOLLOWING");

	let profile_link = document.createElement("a");
	profile_link.href = data.html_url;
	profile_link.innerHTML = data.name;
	PROFILE_NAME.append(profile_link);

	PROFILE_BIO.innerHTML = data.bio;
	PROFILE_LOCATION_TEXT.innerHTML = data.location;
	PROFILE_FOLLOWERS.innerHTML = `${data.followers} follower${data.followers > 0 ? "s" : ""}`;
	PROFILE_FOLLOWING.innerHTML = `${data.following} following`;

	let img = document.createElement("img");
	img.src = data.avatar_url;
	img.alt = `${data.name} Profile Image`;
	PROFILE_IMAGE.append(img);
}

document.addEventListener("DOMContentLoaded", async () => {
	Prism.highlightAll();
	const fb = {
		followers: 0,
		following: 0,
		avatar_url:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAFUlEQVR4XmNgGAWjITAaAqMhAAkBAAQQAAED5c7kAAAAAElFTkSuQmCC",
	};
	let data;

	try {
		const api = await fetch("https://api.github.com/users/hyperz111");
		if (!api.ok) {
			data = fb;
		} else {
			data = await api.json();
		}
	} catch (e) {
		data = fb;
	} finally {
		render(data);
	}
});
