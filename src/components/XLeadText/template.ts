import * as styles from "./styles.scss";
import { wire } from "hyperhtml";

interface XLeadTextTemplateData {
	heading: string;
	text: string;
}

export default (
	render: Function,
	{ heading, text }: XLeadTextTemplateData,
	createStyle: Function
) => {
	return render`
        ${createStyle(styles)}
        ${
			heading
				? wire()`<h1 class= "lead-text__headline">${heading}</h1>`
				: null
		}
        <p class="lead-text__content">${text}</p>
        `;
};
