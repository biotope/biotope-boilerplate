import * as styles from "./styles.scss";

interface XImageTextTemplateData {
	image: {
		url: string;
		alt: string;
	};
	text: string;
}

export default (render: Function, { image, text }: XImageTextTemplateData) => {
	return render`
        <style>${styles.toString()}</style>
        <img src="${image.url}" alt="${image.alt}" />
        <p>${text}
    `;
};
