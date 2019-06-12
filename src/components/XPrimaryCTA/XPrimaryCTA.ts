import Component from "@biotope/element";
import XButton from "../XButton/index";
import { PrimaryCTAOptions } from "./interfaces/PrimaryCTAOptions";
import template from "./template";

class XPrimaryCTA extends Component<PrimaryCTAOptions, {}> {
	public static componentName = "x-primary-cta";
	public static dependencies = [XButton as typeof Component];

	protected static attributes = [
		"link",
		"link-label",
		"link-target",
		"text",
		"icon"
	];

	get defaultProps(): PrimaryCTAOptions {
		return {
			link: "",
			linkLabel: "",
			text: ""
		};
	}
	public render() {
		return template(this.html, this.props, this.createStyle);
	}
}

XPrimaryCTA.register();
export default XPrimaryCTA;
