import * as styles from './styles.scss';

interface XButtonTemplateData {
	title: string;
}

export default (render: Function, { title }: XButtonTemplateData) => {
	return render`
        <style>${styles.toString()}</style>
        ${title}
    `;
};
