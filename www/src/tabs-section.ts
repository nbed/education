
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";
import { sharedStyles } from "./style/shared-styles";
import { Item } from "./types";

export class TabsSection extends LitElement {

	private list: Item[] = [];
	private currentTab: Item = { id: "", name: "", content: html``, selected: false, };
	private color: string = "";

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
				display: flex;
				flex-direction: column;
			}

			.nav-section {
				padding: 1em 0 0 0;
				display: flex;
				flex-direction: row;
			}

			.tab {
				position: relative;
				z-index: 5;

				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				border: 1px solid #ddd;

				margin: 0 5px 0 0;
				padding: 10pt 25pt;

				background-color: var(--tab-color);
			}

			.tab:hover {
				cursor: pointer;
				padding: 9pt 25pt;
				border-top: 2px solid;
				border-bottom: none;
			}

			.tab-selected {
				border-bottom: 1px solid var(--tab-color);
				border-top-width: 2px;
				border-top-style: solid;
				padding: 9pt 25pt;
			}

			.tab-selected, .tab:hover {
				border-top-color: ${this.color};
			}

			.tab-content {
				position: relative;
				padding: 10px;

				/* hide top of border under tabs */
				margin-top: -1px;

				border: 1px solid #ddd;
				border-top-right-radius: 10px;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
			}

			@media only screen and (max-width: 900px) {
				.nav-section {
					padding: 0;
				}

				.tab {
					padding: 10px;
				}
				
				.tab:hover {
					padding: 10px;
				}

				.tab-selected {
					padding: 10px;
				}
			}
		</style>

		<div class="container">
			<div class="nav-section">
				${this.list.map((tab) => {
					if (tab.selected) {
						this.currentTab = tab;
					}
					return html`<div class="tab ${ tab.selected ? "tab-selected" : ""}"
							data-tab=${tab.id} @click=${(e: Event) => this.showTab(tab.id) }>
						${tab.name}
					</div>`})}
			</div>
			<div class="tab-content">
				<div class="content">${this.currentTab.content}</div>
				${ this.currentTab.children ? html`
					<accordian-section .color="${this.color}" .list="${this.currentTab.children}"></accordian-section>
				` : html``}
			</div>
		</div>
		`;
	}

	private selectTab(id: string) {
		// find selected tab
		const selectedTab = this.list.find((t) => {
			return t.id === id;
		});
		if (!selectedTab) {
			throw new Error("No match tab id found in tab items");
		}
		selectedTab.selected = true;
		this.currentTab = selectedTab;
	}

	private showTab(id: string) {
		// unselect all
		this.list = this.list.map((t) => {
			t.selected = false;
			return t;
		});
		this.selectTab(id);
	}
}
// Register the element with the browser
customElements.define("tabs-section", TabsSection);
