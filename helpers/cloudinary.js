

const url = "https://res.cloudinary.com/soccerpainters/image/upload/v1539332899/SoccerPainters/PICT0009.jpg";

//https://res.cloudinary.com/soccerpainters/image/upload/c_scale,w_1136/v1539332899/SoccerPainters/PICT0009.jpg

export const createThumbnail = (url, width = 300, height) => {

	const thumbUrl = url.split("upload/");
	return `${thumbUrl[0]}upload/c_scale,w_${width},${height ? "h_" + height : ""}/${thumbUrl[1]}`;
}