import * as styles from './styles.scss';
import logo from './logo.jpeg';

interface ComponentWithImageTemplateData {

}

export default (render: Function, data: ComponentWithImageTemplateData, createStyle: Function) => {
    return render`
        ${createStyle(styles)}
        <div>Fill me</div>
        ${logo}
    `;
}
