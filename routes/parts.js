const express = require("express");
const router = express.Router();
const queryContent = require("../utils/query-content");
const storeParts = require("../mock-data/parts");
const partsPerType = require("../mock-data/parts-per-type");
const partTypes = require("../mock-data/part-types");

router.get("/parts", (req, res) => {
	const params = { ...req.query };
	const delay = Math.random() * 6 * 1000;
	let content = null;
	if (params.type) {
		setTimeout(() => {
			content = partsPerType[params.type.toLowerCase()];
			const response = queryContent(content, params.query);
			res.send(response || []);
		}, delay);
		return;
	}
	setTimeout(() => {
		content = storeParts;
		res.send(queryContent(content, params.query));
	}, delay);
});

router.get("/parts/:id", (req, res) => {
	const { id } = req.params;
	const delay = Math.random() * 6 * 1000;

	const part = storeParts.find((p) => p.id === id);
	setTimeout(() => {
		res.send(part || null);
	}, delay);
});

router.get("/part-types", (req, res) => {
	res.send(partTypes);
});

module.exports = router;
