import Component from "@biotope/element";
import template from "./template";

interface XButtonProps {
	primary: boolean;
	secondary: boolean;
	tertiary: boolean;
	text: boolean;
	disabled: boolean;
	conversion: boolean;
	btnText: string;
	btnHref?: string;
	type: "btn" | "link";
	target?: string;
}

interface XButtonState {}

class XButton extends Component<XButtonProps, XButtonState> {
	protected get defaultProps(): XButtonProps {
		return {
			primary: false,
			secondary: false,
			tertiary: false,
			text: false,
			disabled: false,
			conversion: false,
			btnText: "Button Text",
			type: "btn",
			target: ""
		};
	}

	private get button(): HTMLElement {
		return this.shadowRoot.querySelector(".x-button__btn");
	}
	public static componentName = "x-button";

	protected static attributes = [
		{ name: "primary", converter: value => value != null },
		{ name: "secondary", converter: value => value != null },
		{ name: "tertiary", converter: value => value != null },
		{ name: "text", converter: value => value != null },
		{ name: "disabled", converter: value => value != null },
		{ name: "conversion", converter: value => value != null },
		"type",
		"target",
		"btn-href",
		"btn-text"
	];

	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}

	public connectedCallback() {
		this.button.addEventListener("click", this.onClick);
	}

	public disconnectedCallback() {
		this.button.removeEventListener("click", this.onClick);
	}

	public render() {
		return template(
			this.html,
			{
				primary: this.props.primary,
				secondary: this.props.secondary,
				tertiary: this.props.tertiary,
				text: this.props.text,
				disabled: this.props.disabled,
				conversion: this.props.conversion,
				btnText: this.props.btnText,
				btnHref: this.props.btnHref,
				type: this.props.type,
				target: this.props.target
			},
			this.createStyle
		);
	}

	private onClick() {
		this.emit("click", null, true);
	}
}

export default XButton;
