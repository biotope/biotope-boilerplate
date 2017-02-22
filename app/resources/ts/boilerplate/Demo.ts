import {JQueryModuleBase} from "jquery-base";

export default class Demo extends JQueryModuleBase {
	constructor() {
		super();
		console.log('Demo constructor()');
	}

	init(): void {
	}

	destroy(): void {
	}

	test($element: JQuery): void {
		$element
			.html('TypeScript Plugin loaded')
			.css('backgroundColor', 'lightcoral')
			.on('click', () => {
				console.log('clicked element');
				$element.css('backgroundColor', 'green');
			});
	}

	add(x: number, y: number): number {
		return x + y;
	}
}
