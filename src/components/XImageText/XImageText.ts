import Component from "@biotope/element";
import template from "./template";

interface XImageTextProps {
	image: {
		url: string;
		alt: string;
	};
	text: string;
}

interface XImageTextState {}

class XImageText extends Component<XImageTextProps, XImageTextState> {
	static componentName = "x-image-text";

	static attributes = [
		"text",
		{ name: "image", converter: (s: string) => JSON.parse(s) }
	];

	protected get defaultProps() {
		return {
			image: {
				url: "../../_assets/puffu.jpg",
				alt: "static alt text"
			},
			text: "Static Image Text"
		};
	}

	render() {
		return template(this.html, this.props);
	}
}

export default XImageText;
