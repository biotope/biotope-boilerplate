import Component from '@biotope/element';
import * as styles from './styles.scss';

interface ThemeWrapperProps {

}

interface ThemeWrapperState {

}

class ThemeWrapper extends Component< ThemeWrapperProps, ThemeWrapperState > {
    static componentName = 'theme-wrapper';

    constructor() {
        super(false);
        this.appendChild(this.createStyle(styles))
    }
}

export default ThemeWrapper;
