
import styles from './index.scss';


interface XButtonTemplateData {

}

export default (render: Function, data: XButtonTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <button>Fill me!</button>
    `;
}
