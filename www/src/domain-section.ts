
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";
import "./tabs-section";
import { sharedStyles } from "./style/shared-styles";
import { Item } from "./types";

export class DomainSection extends LitElement {

	private color: string = "";
	private colorFaded: string = "lightcyan"; // IE11
	private tabList: Item[] = [];

	// properties getter
	static get properties() {
		return { 
			color: { type: String },
			colorFaded: { type: String },
			tabList: { type: Array },
		};
	}

	/**
	* Define a template for the new element by implementing LitElement's
	* `render` function. `render` must return a lit-html TemplateResult.
	*/
	public render() {
		return html`

		<style>
			${sharedStyles}

			:host { 
				display: block;
				font-family: sans-serif;
			}
			:host([hidden]) { display: none; }

			.domain {
				margin: 1em 7em;
			}
			
			.domain-header {
				margin: 1em 0 0 0;
				padding: 0 0;

				background-color: ${this.colorFaded}; 

				text-align: center;
				border: 1px solid ${this.colorFaded};
				border-top-left-radius: 16px; 
				border-top-right-radius: 16px;

				font-weight: bold;
				font-size: 26px;
			
				height: auto;
				position: relative;
			}

			.container {
				padding: 1em 2em;

				border: 1px solid ${this.colorFaded};
				border-bottom-left-radius: 16px;
				border-bottom-right-radius: 16px;
				border-top-width: 0;
			}

			.header {
				padding: 0 2em 0 0;
			}

			.tab {
				position: relative;
				padding: 10px;
			}

			.tab-container {
				display: flex;
			}

			@media only screen and (max-width: 900px) {
				.domain {
					margin: 1em 1em;
				}
			}

			@media only screen and (max-width: 600px) {
				.domain {
					margin: 1em 0;
				}

				.container {
					padding: 1em;
				}

				.header {
					padding: 0;
				}
			}

		</style>

		<div class="domain">
			<div class="domain-header">
				<slot name="header"></slot>
			</div>
			<div class="container">
				<div class="header">
					<slot name="overview"></slot>
				</div>
				${ this.tabList.length > 0 ?
					html`<tabs-section .color="${this.color}" .list="${this.tabList}"></tabs-section>`
					: html``}
			</div>

		</div>
		`;
	}
}
// Register the element with the browser
customElements.define("domain-section", DomainSection);
