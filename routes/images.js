const express = require('express');
const router  = express.Router();
const Image = require('../models/Image');
const User = require('../models/User');

router.get('/', (req, res, next) => {
  console.log("this is working")
});

module.exports = router;

//will this show likes and comments as well?

//update/add a new image in the favourites
router.put('/:id', (req, res) => {
  console.log("put request is working")
  const imageId=req.params.id
  const { title, explanation, date, url, copyright } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    {$push:{likes:imageId}}
   ,
    { new: true }
  ).then(project => {
    res.status(200).json("all good");
  })
    .catch(error => {
      res.json(error)
    })
})



