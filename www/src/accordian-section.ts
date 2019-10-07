
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";
import { sharedStyles } from "./style/shared-styles";
import { Item } from "./types";

export class AccordianSection extends LitElement {

	private color: string = "";
	private list: Item[] = [];

	private lastSelectedId = "";

	// properties getter
	static get properties() {
		return { 
			list: { type: Array },
			color: { type: String },
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

			.container {
				padding: 1em;
			}

			.nav-section {
				padding: 1em 0;
			}

			.tab {
				cursor: pointer;
				position: relative;
				padding: 10px;

				display: flex;

				border-top: 1px solid ${this.color};
			}

			.tab-selected, .tab:hover {
				background-color: ${this.color};
				border-top: 2px solid ${this.color};

				padding-top: 9px;

				border-top-right-radius: 5px;
				border-top-left-radius: 5px;
			}

			.tab-content {
				position: relative;
				padding: 10px;

				border-right: 1px solid ${this.color};
				border-bottom: 1px solid ${this.color};
				border-left: 1px solid ${this.color};
				border-bottom-right-radius: 5px;
				border-bottom-left-radius: 5px;
			}

		</style>

		<div class="container">
			${this.list.map((tab) => {
				if (tab.selected) {
					this.lastSelectedId = tab.id;
				}
				return html`
					<div class="tab ${ tab.selected ? "tab-selected" : ""}"
							data-tab=${tab.id} @click=${(e: Event) => this.toggle(tab.id) }>
						<div style="flex: 1;">${tab.name}</div>
						<div style="flex: 0;">${ tab.selected ? html`-`: html`+`}</div>
					</div>
					${ tab.selected ? html`<div class="tab-content fadeIn">${tab.content}</div>`: ""}
				`})}
		</div>
		`;
	}

	private toggle(id: string) {
		// unselect all
		this.list = this.list.map((t) => {
			t.selected = false;
			return t;
		});
		if (this.lastSelectedId === id) {
			// leave the tab closed
			this.lastSelectedId = "";
			return;
		}
		// find selected
		const selectedItem = this.list.find((t) => {
			return t.id === id;
		});
		if (!selectedItem) {
			throw new Error("No match tab id found in tab items");
		}
		selectedItem.selected = true;
		this.lastSelectedId = selectedItem.id;
	}
}
// Register the element with the browser
customElements.define("accordian-section", AccordianSection);
