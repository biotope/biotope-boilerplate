import Component from '@biotope/element';
import template from './template';

interface XButtonProps {
	title: string;
}

interface XButtonState {}

class XButton extends Component<XButtonProps, XButtonState> {
	static componentName = 'x-button';

	render() {
		return template(this.html, { title: 'Hi DEV Days 2019!' });
	}
}

export default XButton;
