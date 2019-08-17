
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";

import "./lazy-element";
import "./domain-section";

export class MainElement extends LitElement {

	private name = "";

	/**
	 * In the element constructor, assign default property values.
	 */
	constructor() {
		// Must call superconstructor first.
		super();

		this.name = "Brent";
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
				<link rel="stylesheet" href="./style/main.css">
				<link rel="stylesheet" href="./style/dark.css" media="none" id="dark">
				<script src="./scripts/script.js"></script>
			</head>

			<p>Hello ${this.name}!</p>

			<body>
				<domain-section color="#f79646">
					<span slot="header">Section I: Framework Overview 4444</span>

					<div slot="overview">
						<h4>Framework Overview</h4>
						<p>Section I provides a framework overview including an overview of the improvement planning process. This section also includes information identifying the legislated roles and responsibilities of each individual and group stakeholder. These include: School Principal/School Administrative Team, School Improvement Committee, School Personnel, Stakeholders and Partners, District School Liaisons, Critical Friends, the Superintendent, and the District Education Council (DEC). </p>
					</div>

					<div slot="text">
						<p>Each school will have a team focused on continuous improvement. This could be a team dedicated solely to school improvement, a combined school improvement and positive learning environment team, or a different configuration depending on school and district preference. Ultimately, in consultation with staff, the school principal will determine the configuration of the team based on their individual needs.</p>
						<p>Fullan (2000) notes that one of the core components of the school improvement process is &ldquo;(a) professional learning community in which staff work collaboratively to set clear goals for student learning, assess how well students are doing, develop action plans to increase student achievement, all the while being engaged in inquiry and problem-solving&rdquo;( p. 1).<a href="#_ftn1" name="_ftnref1">[1]</a> The improvement team will facilitate the annual self-assessment process and the ongoing monitoring of strategies and actions within the school year to promote continued growth.</p>
						<p>Improvement team options include the following:&nbsp;</p>
						<ol type="A">
						<li>Core Leadership Team (CLT) and/or Distributive Leadership Team (Kilgore and Reynold, 2011<a href="#_ftn2" name="_ftnref2">[2]</a>)</li>
						<li>Dedicated School Improvement Planning (SIP) Team</li>
						<li>Combined Educational Support Services Team (ESST)/School Improvement Team</li>
						<li>Combined SIP/Positive Learning and Working Environment (PLWEP) Team</li>
						<li>Whole School Team</li>
						</ol>
						<p>Both makeup and number of members on a school team will be at the discretion of the school. Each potential structure is described as follows:</p>
						<ol type="A">
							<li>The &ldquo;School Review Indicator Document with Explanatory Notes&rdquo; defines the Core Leadership Team (CLT) as being:
							<p class="block">&ldquo;Composed of the Principal, Vice-Principal and a selection of key teacher leaders. Like all learning teams in the school, this team should be organized in a very structured manner. Team time should be regularly scheduled; norms should be established; agendas should be created; minutes should be kept and goals and follow-up actions should be developed and monitored. Since the key objective of the CLT is to help facilitate continuous improvement, change and growth, ensuring effective reciprocal communication, reporting to the entire staff, soliciting feedback, monitoring school-based teams and monitoring the Improvement Plan on a routine basis are critical responsibilities of this team. (p. 22).</p>
							<p>It is noted that a fundamental purpose of the CLT is to help facilitate continuous improvement and monitor the improvement plan on a regular basis. If a school has a number of initiatives and feels the CLT is better served focusing solely on advancing leadership capacity and informing decisions which have school-wide implications, they may choose to have a separate, dedicated, School Improvement Planning (SIP) Team.&nbsp;</p>
							</li>
							<li>If a school determines that there should be a dedicated School Improvement Planning Team, separate from the Core Leadership Team, this team should be focused solely on the goals and strategies outlined in the improvement plan. The SIP team would be dedicated to ensuring the consistent implementation of initiatives designed to support the goals established in the improvement plan, monitoring progress, identifying necessary resources and professional learning needs associated with the plan, communicating with stakeholders, and providing an Annual School Progress Report on progress each January. Please see pg. 28 for further information on the Annual School Progress Report.&nbsp;</li>
							
							<p class="block">It is important to note that the SIP Team could include membership from the CLT and representation from other groups as appropriate.</p>
							
							<li>Combined Educational Support Services Team (ESST) and Improvement Planning Team: It may be beneficial to combine the Education Support Services Team (ESST) and the Leadership Team/Improvement Planning Team, if it is identified that many of the goals are overlapping. This decision should be made in the best interest of the school community in consultation with district personnel.</li>
							<li>Recognizing that each school is different, the decision to adopt a combined SIP/PLWEP team is entirely the choice of the school in consultation with the district. Recognizing this, when a school chooses to combine the SIP and PLWEP plans, there are key variables to consider:</li>
							<ul>
								<li>The plan must align with policy requirements including ensuring adherence to the language established within the <em>Education Act</em> as well as policies 322 and 703 (see <a href="#_Appendix_B:_Combined">Appendix B</a> for an elaboration).</li>
								<li>All combined plans will have a dedicated PLWEP component which is identified specifically by that PLWEP designation.</li>
								<li>The dedicated PLWEP component of the plan must be able to stand alone in a fully comprehensible manner if removed from the remainder of the combined document.</li>
								<li>The PLWEP component must be removable in order to comply with Policy 703 and allow for timely replies to Right to Information and Protection of Privacy Act (RTIPPA) requests.</li>
								<li>In a tiered plan, the PLWEP component should be the first (highest priority) component in the plan if the evidence supports it.</li>
							</ul>
							<p>Please note: a wholly combined improvement planning document with no delineation between SIP and PLWEP contravenes the language outlined in Policy 322 and Policy 703.</p>
							<p>This combined approach can be used to strike a balance between administrative efficiency (combining the documents) and adherence to existing policy while also maintaining a necessary priority on PLWEP planning.&nbsp;</p>
							<li>Whole School Team &ndash; in a situation where there is the equivalent of eight or fewer full-time teaching staff, schools may choose to adopt a whole school approach to improvement planning teaming. They may also choose to combine other teams which may be focused on similar content, if deemed appropriate.</li>
						</ol>
						<p>Schools may choose an atypical configuration if their needs are deemed distinct. Regardless of the preferred structure, the improvement team should be focused on continuous improvement and advancing student outcomes.</p>
						<p>The following process suggests ways to determine the team configuration and membership:</p>
						<ol>
							<li><strong>School size and configuration</strong> &ndash; the size of the team is often dependent on the size and configuration of the school. A small school with a K-5 student population has different needs than a large 6-12 school; consequently, schools need to assess their own distinct needs when determining the size and makeup of the team. In general, those developing an improvement team should consider the following criteria:
								<ul>
									<li>Eight to ten members total is suggested, with a recommended minimum of five (depending on school size).</li>
									<li>Administrative representation.</li>
									<li>Teacher representation considering grades, levels and overall configuration.</li>
									<li>Support-staff representation.</li>
									<li>Representation from school-based teams with a specific focus on having Education Support Teacher-Guidance (EST-G) and Education Support Teacher-Resource (EST-R) representation.</li>
									<li>A mix of early-career and more experienced teachers.</li>
									<li>Identification of mechanisms to ensure access to student and parent voice. This could include direct participation on the committee or establishing avenues for formal (student and/or parent) communication with committee representatives to share ideas and/or concerns.</li>
								</ul>
								<p>Note: Student feedback could include ongoing consultation depending on the age and maturity of the student population. In the absence of direct attendance at committee meetings, schools could decide to use any of the following feedback mechanisms: through class and/or Student Representative Council (SRC) representatives, assemblies, Principal forums, focus groups, surveys, or any other viable means deemed appropriate and effective by the improvement team.</p>
							</li>
							<li>
								The <strong>guidelines for improvement team members</strong> should include the length of appointment, and an elaboration of the roles and responsibilities associated with membership. For example, the consultative nature of the parent role should be delineated. Meeting norms should be established. Robert&rsquo;s Rules of Order could be applied for this purpose. Norms should include the appointment of a chair and secretary as well as the <strong>generation of agendas and minutes for each meeting</strong>. Schools may also wish to identify individuals with specific expertise to lead and/or support specific initiatives, i.e., Literacy, Math, Data or Resource Support.
								<p>See: <a href="http://www.robertsrules.org/">http://www.robertsrules.org/</a> for a quick reference to Robert&rsquo;s.</p>
							</li>
							<li><strong>Training for improvement team members</strong> - In order for staff, students, families and other stakeholders to understand the process of school improvement, school leaders, with district support where needed, should provide an information session which includes:
								<ul>
									<li>An overview of the process.</li>
									<li>Roles and responsibilities of individual members.</li>
								</ul>
								<p>A PowerPoint with notes to support the dialogue will be developed by each district leadership team with all districts represented. School leaders can use this as a guide when administering training sessions.&nbsp;</p>
								<p>Note: Team structures should be established to ensure effective two-way communication occurs between improvement teams and stakeholders.</p>
							</li>
						</ol>
						
						<p><a href="#_ftnref1" name="_ftn1">[1]</a> Fullan, M. (2000). <em>The role of the head in school improvement</em>. London, England: National College of School Leadership.&nbsp;</p>
						<p><a href="#_ftnref2" name="_ftn2">[2]</a> Kilgore, S., &amp; Reynolds, K. J. (2011). From silos to systems: Reframing schools for success. Thousand Oaks, Calif: Corwin.</p>
					</div>
				</domain-section>
		`;
	}
}

// Register the element with the browser
customElements.define("main-element", MainElement);
