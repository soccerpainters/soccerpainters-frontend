export const createThumbnail = (url, width = 300, height) => {
	const thumbUrl = url.split("upload/");
	return `${thumbUrl[0]}upload/c_scale,w_${width},${height ? "h_" + height : ""}/${thumbUrl[1]}`;
}