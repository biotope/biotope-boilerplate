import * as styles from "./styles.scss";
import { wire } from "hyperhtml";

interface XLeadTextTemplateData {
	heading: string;
	text: string;
}

export default (render: Function, { heading, text }: XLeadTextTemplateData) => {
	return render`
        <style>${styles.toString()}</style>
        ${
			heading
				? wire()`<h1 class= "lead-text__headline">${heading}</h1>`
				: null
		}
        <p class="lead-text__content">${text}</p>
        `;
};
