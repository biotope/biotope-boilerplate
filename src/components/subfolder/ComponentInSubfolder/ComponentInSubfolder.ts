import Component from '@biotope/element';
import template from './template';

interface ComponentInSubfolderProps {

}

interface ComponentInSubfolderState {

}

class ComponentInSubfolder extends Component< ComponentInSubfolderProps, ComponentInSubfolderState > {
    static componentName = 'component-in-subfolder';

    render() {
        return template(this.html, {}, this.createStyle);
    }
}

export default ComponentInSubfolder;
