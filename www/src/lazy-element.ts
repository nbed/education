
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";

export class LazyElement extends LitElement {

	private color: string = "white";

	// properties getter
	static get properties() {
		return { 
			color: { type: String }
		};
  	}

	/**
	* Define a template for the new element by implementing LitElement's
	* `render` function. `render` must return a lit-html TemplateResult.
	*/
	public render() {
		return html`
		<style>
			:host { display: block; }
			:host([hidden]) { display: none; }

			.container {
				background-color: ${this.color};
			}

		</style>
		<div class="container">
			Hello, your color is ${this.color}!
			<slot></slot>
		</div>
		`;
	}
}
// Register the element with the browser
customElements.define("lazy-element", LazyElement);
