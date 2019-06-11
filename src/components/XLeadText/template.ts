import * as styles from "./styles.scss";

interface XLeadTextTemplateData {
	heading: string;
	text: string;
}

export default (render: Function, { heading, text }: XLeadTextTemplateData) => {
	return render`
        <style>${styles.toString()}</style>
        <div>${heading}</div>
        <div>${text}</div>
    `;
};
