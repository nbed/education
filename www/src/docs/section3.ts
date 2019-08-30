
import { Item } from "../types";
import { html } from "lit-html";

import { section3DocItem } from "./section3-indDoc";
import { section3EvidenceItem } from "./section3-dataEvidence";

export const section3: Item[] = [
    {
        id: "item1",
        name: "The Self-Assessment Instrument: Indicator Document with Explanatory Notes",
        selected: true,
        content: html`<p>The self-assessment instrument to be used at the school level is the <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Improvement%20Indicators%20with%20Explanatory%20Notes%20March%2021%2C%202019.docx?Web=1">New Brunswick Indicator Document with Explanatory Notes</a>, supplemented by the <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/Inclusion%20Look-fors%20June%2011%2C%202019.docx?Web=1">Inclusion Look-For</a> document.</p>`,
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
        name: "Annual School Performance Report",
        selected: false,
        content: html`<p>Although it has already been mentioned several times throughout this document, the importance of the Annual School Performance Report must be highlighted.&nbsp;</p>
        <ul>
        <li>The Annual School Performance Report is a high-level document that schools would submit to the district in January of each year (See <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Performance%20Report%20July%2031%2C%202019.docx?Web=1">Appendix F</a>).</li>
        <li>This report will identify overarching school goals and indicate progress toward these goals.</li>
        <li>District will collate this data and author a similar high-level report to be shared with provincial representatives.</li>
        <li>This is a mechanism by which schools and districts will be able to measure progress.</li>
        <li>Most importantly the Annual School Performance Report will allow for the transfer of information from schools, to districts and then to the province. This information will be used to:
        <ul>
        <li>set ongoing provincial priorities,</li>
        <li>inform resource allocation, and inform PL planning.</li>
        </ul>
        </li>
        </ul>`,
    },
]
