
import { Item } from "../types";
import { html } from "lit-html";

const relativePath = "./manifest/";

export const section4: Item[] = [
    {
        id: "item1",
        name: "Appendices and Templates",
        selected: true,
        content: html`<p>Several Templates are provided to assist schools in monitoring progress. Schools can choose to use these verbatim, modify them, or discard them if they feel they have a more efficient and effective template. The following is a list of the policy content and templates provided in the appendices:</p>
        <p><a href="${relativePath}Appendix-A.pdf" target="_blank"><strong>Appendix A</strong>: 10-year Plan Cluster of Objectives</a></p>
        <p><a href="${relativePath}Appendix-B.pdf" target="_blank"><strong>Appendix B</strong>: Combined SIP/PLWEP, Relevant Legislation</a></p>
        <p><a href="${relativePath}Appendix-C.pdf" target="_blank"><strong>Appendix C</strong>: Sample Improvement Planning Template</a></p>
        <p><a href="${relativePath}Appendix-D.pdf" target="_blank"><strong>Appendix D</strong>: PDCA Template</a></p>
        <p><a href="${relativePath}Appendix-E.pdf" target="_blank"><strong>Appendix E</strong>: Meeting Minute Template</a></p>
        <p><a href="${relativePath}Appendix-F.pdf" target="_blank"><strong>Appendix F</strong>: Annual School Progress Report Template</a></p>
        <p><a href="${relativePath}Appendix-G.pdf" target="_blank"><strong>Appendix G</strong>: Policy associated with improvement planning</a></p>
        <p><a href="${relativePath}Appendix-H.pdf" target="_blank"><strong>Appendix H</strong>: Consultations</a></p>
        <p><a href="${relativePath}Appendix-I.pdf" target="_blank"><strong>Appendix I</strong>:  Acronyms</a></p>`,
    },
]
