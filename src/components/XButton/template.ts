import * as styles from "./styles.scss";

interface XButtonTemplateData {}

export default (
	render: Function,
	data: XButtonTemplateData,
	createStyle: Function
) => {
	return render`
        ${createStyle(styles)}
        <div>Fill me</div>
    `;
};
