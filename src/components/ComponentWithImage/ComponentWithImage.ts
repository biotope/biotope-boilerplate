import Component from '@biotope/element';
import template from './template';

interface ComponentWithImageProps {

}

interface ComponentWithImageState {

}

class ComponentWithImage extends Component< ComponentWithImageProps, ComponentWithImageState > {
    static componentName = 'component-with-image';

    render() {
        return template(this.html, {}, this.createStyle);
    }
}

export default ComponentWithImage;
