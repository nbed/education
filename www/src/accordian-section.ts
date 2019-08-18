
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";
import { sharedStyles } from "./style/shared-styles";
import { TabItem } from "./types";

export class AccordianSection extends LitElement {

	private color: string = "";
	private list: TabItem[] = [];

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
			}

			.tab-selected, .tab:hover {
				background-color: ${this.color}55;
				border-top: 2px solid ${this.color};

				padding: 9px 10px;

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
							data-tab=${tab.id} @click=${(e: Event) => this.show(tab.id) }>
						${tab.name}
					</div>
					${ tab.selected ? html`<div class="tab-content fadeIn">${tab.content}</div>`: ""}
				`})}
		</div>
		`;
	}

	private show(id: string) {
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
