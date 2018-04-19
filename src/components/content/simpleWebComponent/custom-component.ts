import {hyper} from 'hyperhtml/esm';

export class CustomComponent extends HTMLElement {
	private html: any;
	private counter: number;

	constructor() {
		super();
		this.html = hyper.bind(this.attachShadow({mode: 'closed'}));
		this.counter = 666;
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
