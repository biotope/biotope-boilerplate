import Component from '@biotope/element';
import template from './template';

interface SimpleComponentProps {

}

interface SimpleComponentState {

}

class SimpleComponent extends Component< SimpleComponentProps, SimpleComponentState > {
    static componentName = 'simple-component';

    render() {
        return template(this.html, {}, this.createStyle);
    }
}

export default SimpleComponent;
