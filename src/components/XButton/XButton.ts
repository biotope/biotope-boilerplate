import classNames from "classnames";
import { wire } from "hyperhtml";
import * as styles from "./styles.scss";

interface XButtonTemplateData {
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

export default (
	render: Function,
	{
		primary,
		secondary,
		tertiary,
		text,
		disabled,
		conversion,
		btnText,
		btnHref,
		type,
		target
	}: XButtonTemplateData,
	createStyles: Function
) => {
	const btnClass = classNames("x-button__btn", {
		["x-button__btn--primary"]: primary,
		["x-button__btn--secondary"]: secondary,
		["x-button__btn--tertiary"]: tertiary,
		["x-button__btn--text"]: text,
		["x-button__btn--conversion"]: conversion
	});

	const renderButton = () =>
		type === "link"
			? wire()`<a href="${btnHref}" class="${btnClass}" target=${target}>${btnText}</a>`
			: wire()`<button class="${btnClass}" disabled="${disabled}">${btnText}</button>`;

	return render`
    ${createStyles(styles)}
    ${renderButton()}
  `;
};
