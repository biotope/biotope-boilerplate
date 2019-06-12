import Component from "@biotope/element";
import template from "./template";

interface XLeadTextProps {
	heading: string;
	text: string;
}

interface XLeadTextState {}

class XLeadText extends Component<XLeadTextProps, XLeadTextState> {
	static componentName = "x-lead-text";

	static attributes = ["heading", "text"];

	protected get defaultProps() {
		return {
			heading: "Static TeaserRow Headline",
			text: "Static TeaserRow Text"
		};
	}

	render() {
		return template(this.html, this.props, this.createStyle);
	}
}

export default XLeadText;
