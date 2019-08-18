
import { Item } from "../types";
import { html } from "lit-html";

import { section3DocItem } from "./section3-indDoc";
import { section3EvidenceItem } from "./section3-dataEvidence";

export const section3: Item[] = [
    {
        id: "item1",
        name: "The Self-Assessment Instrument: Indicator Document with Explanatory Notes",
        selected: true,
        content: html`<p>The self-assessment instrument to be used at the school level is the <a href="https://collabe.nbed.nb.ca/admin/sis/_layouts/15/WopiFrame.aspx?sourcedoc=/admin/sis/SISDocuments/School%20Review%20Indicators%20with%20Explanatory%20Notes%202017-18%20FINAL.docx&amp;action=default">New Brunswick Indicator Document with Explanatory Notes</a> (2017-18 version), supplemented by the Inclusion Look-For document.</p>`,
        children: section3DocItem,
    },
    {
        id: "item2",
        name: "Data/Evidence",
        selected: false,
        content: html`<p>Different schools&rsquo; teams have different levels of proficiency when gathering and analyzing data. If a school leader is new to a school or position, or there is a large change in the makeup of the improvement team, schools should re-examine their proficiency with data and evidence. In it&rsquo;s simplest, data is anything that is quantifiable. Evidence can be considered more subjective, for example, conversations and observations. Once evidence is quantified, it can often be considered data.</p>
        <p>Blink suggests the following guiding questions be used when a school chooses to examine data:</p>
        <ol>
        <li>How and when should data be gathered?</li>
        <li>What data should be included?</li>
        <li>How does using data to drive instructional decisions affect programming?</li>
        <li>How does using data to drive instructional decisions affect staffing?</li>
        <li>How do we find time (school or District provided) for teachers and administrators to evaluate and analyze the data that they have?</li>
        <li>How does using data to drive instructional decisions affect professional learning?</li>
        <li>How does using data to drive instructional decisions affect goal setting? (Blink, 2016, p.1)</li>
        </ol>`,
        children: section3EvidenceItem,
    },
    {
        id: "item3",
        name: "Annual School Progress Report",
        selected: false,
        content: html`<p>Although it has already been mentioned several times throughout this document, the importance of the Annual School Progress Report must be highlighted.&nbsp;</p>
        <ul>
        <li>The Annual School Progress Report is a high-level document that schools would submit to the district in January of each year (See <a href="#_Appendix_F:_Annual">Appendix F</a>).</li>
        <li>This report will identify overarching school goals and indicate progress toward these goals.</li>
        <li>District will collate this data and author a similar high-level report to be shared with provincial representatives.</li>
        <li>This is a mechanism by which schools and districts will be able to measure progress.</li>
        <li>Most importantly the Annual School Progress Report will allow for the transfer of information from schools, to districts and then to the province. This information will be used to:
        <ul>
        <li>set ongoing provincial priorities,</li>
        <li>inform resource allocation, and inform PL planning.</li>
        </ul>
        </li>
        </ul>`,
    },
]
