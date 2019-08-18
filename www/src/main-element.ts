
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";

import "./accordian-section";
import "./domain-section";

import { overviewList } from "./docs/overview";
import { section1 } from "./docs/section1";

import { sharedStyles } from "./style/shared-styles";
import { TabItem } from "./types";

export class MainElement extends LitElement {

	private tabList: TabItem[] = [
		{ id: "id-1", selected: true, name: "tab-1", content: html`tab 111 content goes here` },
		{ id: "id-2", selected: false, name: "tab-2", content: html`tab 222 content goes here` },
		{ id: "id-3", selected: false,  name: "tab-3", content: html`tab 333 content goes here` },
	];

	/**
	 * In the element constructor, assign default property values.
	 */
	constructor() {
		// Must call superconstructor first.
		super();
	}
	
	public scrollToMe(id: string) {
		const targetElement = this.shadowRoot!.getElementById(id.substr(1))
		if(targetElement) {
			targetElement.scrollIntoView();
		}
	}

	/**
	 * Define a template for the new element by implementing LitElement's
	 * `render` function. `render` must return a lit-html TemplateResult.
	 */
	public render() {
		return html`
		<head>
			<title>NB School Improvement Indicators</title>
			<meta name="viewport" http-equiv="Content-Type" content="text/html; charset=UTF-8 width=device-width,initial-scale=1.0"/>
			<link rel="shortcut icon" type="image/x-icon" href="favicon.png">
		</head>

		<style>
			${sharedStyles}
		
			.overview {
				padding: 8px;
			}
		</style>

		<a href="#anchortest">Anchor test text</a>

		<a href="#anchortest2">II test text</a>

		<body>

			<domain-section color="#f79646" .tabList="${section1}">
				<a id="anchortest" slot="ref"></a>
				<span slot="header">Section I: Framework Overview</span>

				<div slot="overview">
					<h4>Framework Overview</h4>
					<p>Section I provides a framework overview including an overview of the improvement planning process. This section also includes information identifying the legislated roles and responsibilities of each individual and group stakeholder. These include: School Principal/School Administrative Team, School Improvement Committee, School Personnel, Stakeholders and Partners, District School Liaisons, Critical Friends, the Superintendent, and the District Education Council (DEC). </p>
				
					<div class="overview">
						<em>Overview</em>
						<accordian-section color="#dddddd" .list="${overviewList}"></accordian-section>
					</div>
				</div>
			</domain-section>

			<domain-section color="#800080" .tabList="${this.tabList}">
				<a id="anchortest2" slot="ref"></a>
				<span slot="header">Section II: Another Overview</span>

				<div slot="overview">
					<h4>Another Overview</h4>
					<p>blah blah blah</p>
				</div>
			</domain-section>
		</body>
		`;
	}
}
customElements.define("main-element", MainElement);
