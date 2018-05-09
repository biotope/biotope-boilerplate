import {hyper} from 'hyperhtml/esm';
import {
	biotopeStateClassDecorator,
	biotopeStateMethodDecorator,
	biotopeStatePropertyDecorator
} from "../../core/biotopeDecorators";

// @biotopeStateClassDecorator({
// 	store: 'class decorator'
// })
export class CustomComponent extends HTMLElement {
	private html: any;
	private counter: number;

	// @biotopeStatePropertyDecorator({
	// 	store: 'property decorator'
	// })
	// private state: any;

	constructor() {
		super();
		this.html = hyper.bind(this);
		this.counter = 666;

		this.onStateChange("World", "Hello")
	}

	@biotopeStateMethodDecorator({
		store: 'method decorator'
	})
	onStateChange(...args: any[]) {
		console.log('onStateChange', args);
	}

	connectedCallback() {
		this.render();

		document.addEventListener('state', (e: any) => {
			this.counter = e.detail.counter;
			this.render();
		});

		document.dispatchEvent(new CustomEvent('trigger.state'));
	}

	countUp() {
		console.log('COUNT_UP');
		document.dispatchEvent(new CustomEvent('action', { detail: { type: 'COUNT_UP' }}));
	}

	render() {
		return this.html`
<button onclick=${this.countUp}>Count Up</button>
<span>${this.counter}</span>
`;
	}
}

if (!customElements.get('custom-component')) {
	customElements.define('custom-component', CustomComponent);
}
