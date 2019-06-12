import * as styles from "./styles.scss";
import { wire } from "hyperhtml";

interface XImageTextTemplateData {
	image: {
		url: string;
		alt: string;
	};
	text: string;
}

const renderRichtext = text => {
	var htmlObject = document.createElement("div");
	htmlObject.innerHTML = text;
	return htmlObject;
};

export default (
	render: Function,
	{ image, text }: XImageTextTemplateData,
	createStyle: Function
) => {
	return render`
        ${createStyle(styles)}
        <img src="${image.url}" alt="${image.alt}" />
		<p>${renderRichtext(text)}
    `;
};
