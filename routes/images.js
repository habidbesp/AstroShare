const express = require("express");
const router = express();
const Image = require("../models/Image");

// find an image
router.get("/", (req, res) => {
	console.log(req.params);
	Image.find()
		.then((image) => {
			if (!image) {
				res.status(404).json(image);
			} else {
				res.status(200).json(image);
			}
		})
		.catch((error) => {
			res.json(error);
		});
});

// get Image by Id

router.get("/:id", (req, res) => {
	Image.findById(req.params.id)
		.then((picture) => {
			if (!picture) {
				res.status(404).json(picture);
			} else {
				res.status(200).json(picture);
			}
		})
		.catch((error) => {
			res.json(error);
		});
});

// delete an image
router.delete("/:id", (req, res) => {
	console.log(req.params.id);
	Image.findByIdAndDelete(req.params.id)
		.then((image) => {
			res.status(200).json({ message: "ok" });
		})
		.catch((error) => {
			res.json(error);
		});
});

// create an image
router.post("/", (req, res) => {
	const { date, explanation, hdurl, media_type, service_version, title, url, owner } = req.body;
	Image.create({
		date,
		explanation,
		hdurl,
		media_type,
		service_version,
		title,
		url,
		owner,
	})
		.then((image) => {
			res.status(201).json(image);
		})
		.catch((error) => {
			res.json(error);
		});
});

module.exports = router;
