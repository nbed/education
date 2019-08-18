
import { TemplateResult } from "lit-html";

export interface Item {
	id: string;
	name: string;
	selected: boolean;
	content: TemplateResult;
	children?: Item[];
}