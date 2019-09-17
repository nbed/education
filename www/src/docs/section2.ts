
import { Item } from "../types";
import { html } from "lit-html";

import { section2Cycles } from "./section2-cyclesItem";

export const section2: Item[] = [
    {
        id: "item1",
        name: "Cycles",
        selected: true,
        content: html`<p>There are two cycles schools should consider when planning: the Plan, Do, Check, Act (PDCA) and annual/multi-year cycles.</p>
            <p>Long-term cycles can include annual and/or multi-year goals.</p>`,
        children: section2Cycles,
    },
]
