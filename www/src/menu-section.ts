
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";
import { sharedStyles } from "./style/shared-styles";
import { Item } from "./types";

export class MenuSection extends LitElement {

	private list: Item[] = [
		{
			id: "anchor_section1",
			name: "Section I",
			selected: true,
			// not using
			content: html``,
		},
		{
			id: "anchor_section2",
			name: "Section II",
			selected: false,
			// not using
			content: html``,
		},
		{
			id: "anchor_section3",
			name: "Section III",
			selected: false,
			// not using
			content: html``,
		},
		{
			id: "anchor_section4",
			name: "Section IV",
			selected: false,
			// not using
			content: html``,
		},
	];

	// properties getter
	static get properties() {
		return { 
			list: { type: Array },
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
				position: fixed;

				top: 0;

				z-index: 10;

				display: flex;
				flex-direction: row;

				width: 100%;
    			justify-content: center;
			    align-items: center;
			}

			.nav-section {
				padding: 0.5em 0 0 0;
				display: flex;
				flex-direction: row;
			}

			.nav-item {
				cursor: pointer;
				padding: 12px;
				color: var(--menu-color-text);
				background-color: var(--menu-bg);
			}

			.nav-item-selected, .nav-item:hover {
				background-color: var(--menu-bg-selected);
				color: var(--menu-color-selected);
			}

		</style>

		<div class="container">
			<div class="nav-section">
				${this.list.map((tab) => {
					return html`<div class="nav-item ${ tab.selected ? "nav-item-selected" : ""}"
							@click=${(e: Event) => this.selectItem(tab.id) }>
						${tab.name}
					</div>`})}
			</div>
		</div>
		`;
	}

	private selectItem(hash: string) {
		// 1. move to location
		window.location.hash = hash;

		// 2. update the menu item selected
		// unselect all
		this.list = this.list.map((t) => {
			t.selected = false;
			return t;
		});

		// find selected tab
		const selectedTab = this.list.find((t) => {
			return t.id === hash;
		});
		if (!selectedTab) {
			throw new Error("No match tab id found in tab items");
		}
		selectedTab.selected = true;
	}
}
// Register the element with the browser
customElements.define("menu-section", MenuSection);