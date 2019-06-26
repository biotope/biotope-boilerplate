import * as styles from './styles.scss';

interface ComponentInSubfolderTemplateData {

}

export default (render: Function, data: ComponentInSubfolderTemplateData, createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <div>Fill me</div>
    `;
}
