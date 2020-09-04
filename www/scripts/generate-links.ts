
import { linksObj } from "./links";

async function generate() {
	//Load the library and specify options
	const replace = require("replace-in-file");

	for (const link of linksObj) {
		const regex = new RegExp(`%${link.key}%`, "g");
		const options = {
			files: "../src/**/*.js",
			from: regex,
			to: link.href,
		};
		try {
			const results = await replace(options);
			console.log('Replacement results:', results);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
}

generate();
