import * as styles from './styles.scss';

interface CssVarsTemplateData {

}

export default (render: Function, data: CssVarsTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div>Fill me</div>
    `;
}
