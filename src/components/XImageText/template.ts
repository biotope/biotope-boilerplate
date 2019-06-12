import * as styles from "./styles.scss";
import { create } from "domain";

interface XImageTextTemplateData {
	image: {
		url: string;
		alt: string;
	};
	text: string;
}

export default (
	render: Function,
	{ image, text }: XImageTextTemplateData,
	createStyle: Function
) => {
	return render`
        ${createStyle(styles)}
        <img src="${image.url}" alt="${image.alt}" />
        <p>${text}
    `;
};
