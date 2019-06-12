import * as styles from "./styles.scss";

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
        <div>${heading}</div>
        <div>${text}</div>
    `;
};
