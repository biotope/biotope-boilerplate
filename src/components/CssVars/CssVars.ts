import Component from '@biotope/element';
import template from './template';

interface CssVarsProps {

}

interface CssVarsState {

}

class CssVars extends Component< CssVarsProps, CssVarsState > {
    static componentName = 'css-vars';

    render() {
        return template(this.html, {});
    }
}

export default CssVars;
