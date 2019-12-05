
import { linksObj } from "./links";

async function find() {
	const map = new Map();
	try {
		// match group one will contain the link text
		const regex = new RegExp(/href=(["'])(.*?)\1/g);

		for (const link of linksObj) {
			const href = link.href.match(regex);
			if (!href) {
				continue;
			}
			const desc = href[0].substring(6, href[0].length - 1);
			if (map.has(desc)) {
				map.set(desc, +map.get(desc) + 1);
			} else {
				map.set(desc, 1);
			}
		}
		console.info(map);
	} catch(err){
		console.error("Error occurred:", err);
	};
}

find();
