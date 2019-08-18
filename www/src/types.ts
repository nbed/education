
import { TemplateResult } from "lit-html";

export interface TabItem {
	id: string;
	name: string;
	selected: boolean;
	content: TemplateResult;
}