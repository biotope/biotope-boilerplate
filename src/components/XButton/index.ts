import Component from '@biotope/element';
import template from './template';


interface XButtonProps {

}

interface XButtonState {

}

class XButton extends Component<XButtonProps, XButtonState> {
    static componentName = 'x-button';

    render() {
        return template(this.html, {});
    }
}

export default XButton;

XButton.register();
