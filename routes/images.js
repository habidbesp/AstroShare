const express = require("express");
const router = express();
const Image = require("../models/Image");

// get all the projects
// router.get("/", (req, res) => {
//   Project.find()
//     .then((projects) => {
//       res.status(200).json(projects);
//     })
//     .catch((error) => {
//       res.json(error);
//     });
// });

// get a specific project
router.get("/:id", (req, res) => {
  console.log(req.params);
  Images.findById(req.params.id)
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

// delete a project
// router.delete("/:id", (req, res) => {
//   Project.findByIdAndDelete(req.params.id)
//     .then((project) => {
//       res.status(200).json({ message: "ok" });
//     })
//     .catch((error) => {
//       res.json(error);
//     });
// });

// create an image
router.post("/", (req, res) => {
  const {
    date,
    explanation,
    hdurl,
    media_type,
    service_version,
    title,
    url,
    owner,
  } = req.body;
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

// update a project
// router.put("/:id", (req, res) => {
//   const { title, description } = req.body;
//   Project.findByIdAndUpdate(
//     req.params.id,
//     { title, description },
//     { new: true }
//   )
//     .then((project) => {
//       res.status(200).json(project);
//     })
//     .catch((error) => {
//       res.json(error);
//     });
// });

module.exports = router;
