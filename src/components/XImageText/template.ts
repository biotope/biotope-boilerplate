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

export default (render: Function, { image, text }: XImageTextTemplateData) => {
	return render`
        <style>${styles.toString()}</style>
        <img src="${image.url}" alt="${image.alt}" />
		<p>${renderRichtext(text)}
    `;
};
