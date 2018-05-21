import {SimpleComponent} from './SimpleComponent';
import {AttributeToState} from '../../core/AttributeToState';

class SimpleComponentFromAttributes extends SimpleComponent {
    constructor() {
        super();
        AttributeToState.init({
            component: this,
            componentId: 'unknown at this point :(',
            store: window['biotope'].store
        });
    }
}