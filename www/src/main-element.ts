
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";

import "./accordian-section";
import "./domain-section";

import { overviewList } from "./docs/overview";
import { section1 } from "./docs/section1";
import { section2 } from "./docs/section2";
import { section3 } from "./docs/section3";
import { section4 } from "./docs/section4";

import { sharedStyles } from "./style/shared-styles";

export class MainElement extends LitElement {

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

			<domain-section color="var(--s1-color)" colorFaded="var(--s1-color-faded)" .tabList="${section1}">
				<a id="anchor_section1" slot="ref"></a>
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

			<domain-section color="var(--s2-color)" colorFaded="var(--s2-color-faded)"  .tabList="${section2}">
				<a id="anchor_section2" slot="ref"></a>
				<span slot="header">Section II: Cycles</span>

				<div slot="overview">
					<h4>Cycles</h4>
					<p>Section II identifies the short- and long-term planning and monitoring cycles, including some content and diagrams suggesting content and processes to support effective planning, implementation, and monitoring (PDCA).</p>
				</div>
			</domain-section>

			<domain-section color="var(--s3-color)" colorFaded="var(--s3-color-faded)"  .tabList="${section3}">
				<a id="anchor_section3" slot="ref"></a>
				<span slot="header">Section III: Self-Assessment Instrument</span>

				<div slot="overview">
					<h4>Self-Assessment Instrument</h4>
					<p>Section III identifies the process for self-assessment, including the overview and purpose, and the self-evaluation process in brief, including a discussion around the self-assessment instruments and associated documents (Indicator Document, Explanatory Notes Document, Inclusion Look-fors).  This section also provides a link to the online tiered document which combines all self-assessment documents into a user-friendly drop-down document.  
					This section also includes suggestions for the effective use of data/evidence, including information on the triangulation of data (conversations, observations and products).  An explanation of the intent and utility of the Annual School Progress Report is provided at the end of this section. 
					</p>
				</div>
			</domain-section>

			<domain-section color="var(--s4-color)" colorFaded="var(--s4-color-faded)"  .tabList="${section4}">
				<a id="anchor_section4" slot="ref"></a>
				<span slot="header">Section IV: Appendices and Templates</span>

				<div slot="overview">
					<h4>Appendices and Templates</h4>
					<p>Section IV provides a list of appendices and templates, which can be used in whole or in part to support schools to self-assess, plan, and monitor.  This section also includes an outline of the policies associated with improvement planning and a list of acronyms for user reference.</p>
				</div>
			</domain-section>
		</body>
		`;
	}
}
customElements.define("main-element", MainElement);
