import Component from '@biotope/element';
import template from './template';


interface DemoComponentProps {

}

interface DemoComponentState {

}

class DemoComponent extends Component<DemoComponentProps, DemoComponentState> {
    static componentName = 'demo-component';
    render() {
        return template(this.html, {});
    }
}

export default DemoComponent;

DemoComponent.register();
