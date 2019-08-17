
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";

export class DomainSection extends LitElement {

	private color: string = "";

	// properties getter
	static get properties() {
		return { 
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
			:host { display: block; }
			:host([hidden]) { display: none; }

			.domain-section {
				margin: 1em 7em;
			}
			
			.domain-section-header {
				margin: 1em 0 0 0;
				padding: 0 0;

				background-color: ${this.color}55; 

				text-align: center;
				border: 1px solid ${this.color}55;
				border-top-left-radius: 17px; 
				border-top-right-radius: 17px;
			
				height: auto;
				position: relative;
			}

			.container {
				padding: 0 2em;

				border: 1px solid ${this.color}55;
				border-bottom-left-radius: 17px;
				border-bottom-right-radius: 17px;
				border-top-width: 0;
			}

			.header-section {
				padding: 1em 2em 0 0;
			}

			.tab-section {
				position: relative;
				padding: 10px;
			}

			.tab-container {
				display: flex;
			}

			body {
				font: 16px/1.25 'Open Sans', sans-serif;
				height: 100vh;
			}

			h1 {
				padding: 35px 1em;
				margin: 0;
				font-weight: 700;
				text-align: left;
				color: var(--color-blue);
				font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
				font-size: 75pt;
			}
			
			h2 {
				color: black;
				display: block;
				font-family: Arial;
				font-weight: 700;
				font-size: 35px;
				text-align: left;
			
				padding-left: 2.8em;
				padding-bottom: 25px;
			
				margin: 0;
			}
			
			h3 {
				font: 14px/1 'Open Sans', sans-serif;
				font-weight: bold;
				font-size: 26px;
				height: 1em;
				margin: 0;
			
				height: auto;
				position: relative;
			}
			
			h4 {
				font-size: 18px;
				padding-bottom: 10px;
			}
			
			hr {
				width: 40%;
				text-align: left;
				position: absolute;
				border-top: 1px solid;
			}
			
			p {
				font: 16px/1.25 'Open Sans', sans-serif;
				margin: 0 0 0.75em 0;
			}
			
			td {
				vertical-align: top;
			}
			
			li {
				padding: 0 0 0.5em 0;
			}
			
			ul {
				margin: 1em 2em;
			}
			
			ul ol {
				margin: 0 0 0 3em;
			}
			
			ol {
				margin: 0 0 0 3em;
			}
			
			.block {
				margin: 1em 2em;
			}

		</style>

		<div class="domain-section">
			<div class="domain-section-header">
				<h3><slot name="header"></slot></h3>
			</div>
			<div class="container">
				<div class="header-section">
					<slot name="overview"></slot>

					<br>

					<div class="tab-section">
						<div class="tab-container">
							<div class="inner">
								<div class="tab-header tab-selected" onclick="expandTab('tab1-1', 'indicator1', '1-1')"
								id="Domain1-1">
									School Team
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="tab1-1"; style="display:block" ; class="indicator1">
					<div class="tab-content">
						<div class="header-subsection-text">
							<slot name="text"></slot>
						</div>
					</div>
				</div>
			</div>
		</div>
		`;
	}
}
// Register the element with the browser
customElements.define("domain-section", DomainSection);
