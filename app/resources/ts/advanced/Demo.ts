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
			.append('Done!')
			.css('backgroundColor', 'lightblue')
			.on('click', () => {
				console.log('clicked element');
				$element.css('backgroundColor', 'green');
			});
	}

	add(x: number, y: number): number {
		return x + y;
	}
}
