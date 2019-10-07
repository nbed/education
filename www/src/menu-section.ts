
// Import LitElement base class and html helper function
import { html, LitElement, css } from "lit-element";
import { isLightTheme, sharedStyles } from "./style/shared-styles";
import { Item } from "./types";

export class MenuSection extends LitElement {

	private list: Item[] = [
		{
			id: "anchor_section0",
			name: "Top",
			selected: false,
			// not using
			content: html``,
		},
		{
			id: "anchor_section1",
			name: "Framework Overview",
			selected: false,
			// not using
			content: html``,
		},
		{
			id: "anchor_section2",
			name: "Cycles",
			selected: false,
			// not using
			content: html``,
		},
		{
			id: "anchor_section3",
			name: "Self-Assessment Instrument",
			selected: false,
			// not using
			content: html``,
		},
		{
			id: "anchor_section4",
			name: "Appendices and Templates",
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

	static get styles() {
		return [
		sharedStyles,
		css`
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

			background-color: var(--menu-nav-bg);
		}

		.nav-section {
			padding: 0.5em 0 0 0;
			display: flex;
			flex-direction: row;
		}

		.nav-item {
			cursor: pointer;
			padding: 8px;
			color: var(--menu-color-text);
			background-color: var(--menu-bg);

			border-radius: 3px;
		}

		.right-area {
			margin-right: 4px;
		}

		.nav-item-selected, .nav-item:hover {
			background-color: var(--menu-bg-selected);
			color: var(--menu-color-selected);
		}
		
		.theme {
			position: absolute;
			display: relative;
			cursor: pointer;
			right: 0;
			padding: 0.5em;
			width: 32px;
			height: 32px;
		}

		@media all and (-ms-high-contrast:none) {
			.theme {
				right: 32px;
			}
		}

		.theme:hover {
			background-color: var(--menu-bg-selected);
			border-radius: 50%;
		}
		`];
	} 
	  
	/**
	* Define a template for the new element by implementing LitElement's
	* `render` function. `render` must return a lit-html TemplateResult.
	*/
	public render() {
		return html`
		<div class="container">
			<div class="nav-section">
				${this.list.map((tab, index) => {
					return html`<div class="nav-item 
						${ index !== (this.list.length - 1) ? "right-area" : ""} 
						${ tab.selected ? "nav-item-selected" : ""}"
							@click=${(e: Event) => this.selectItem(tab.id) }>
						${tab.name}
					</div>`})}
			</div>
			<div class="theme" @click="${(e: Event) => this.toggleTheme()}">
				<img src="./manifest/${isLightTheme ? "moon-solid.svg" : "sun-solid.svg" }">
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

	private toggleTheme() {
		this.dispatchEvent(new CustomEvent("change-theme"));
	}
}
// Register the element with the browser
customElements.define("menu-section", MenuSection);