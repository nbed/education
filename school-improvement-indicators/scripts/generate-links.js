"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const links_1 = require("./links");
async function generate() {
    //Load the library and specify options
    const replace = require("replace-in-file");
    for (const link of links_1.linksObj) {
        const regex = new RegExp(`%${link.key}%`, "g");
        const options = {
            files: "../school-improvement-indicators.html",
            from: regex,
            to: link.href,
        };
        try {
            const results = await replace(options);
            for (const result of results) {
                if (!result.hasChanged) {
                    console.info("Problem:");
                    console.info(link);
                    console.info(result);
                    console.info("Note: this means the link id was not found in the document");
                    console.info("----------");
                }
            }
        }
        catch (error) {
            console.error('Error occurred:', error);
        }
    }
}
generate();
