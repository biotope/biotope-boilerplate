import * as styles from './styles.scss';

interface SimpleComponentTemplateData {

}

export default (render: Function, data: SimpleComponentTemplateData, createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <div>I am very simple</div>
    `;
}
