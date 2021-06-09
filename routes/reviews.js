var express = require("express");
var router = express.Router();
// var books = require("../resources/books");
let Books = require("../models/reviews");
const { findOneAndUpdate } = require("../models/reviews");

router.get("/add", function (req, res, next) {
  res.render("addReviews", {
    title: "Add review",
  });
});

router.post("/save", function (req, res) {
  const book = new Reviews(req.body);
  let promise = book.save();
  promise.then(() => {
    console.log("Review Added");
    res.redirect("/");
  });
});

router.get("/remove/:id", function (req, res) {
  Books.remove({ _id: req.params.id }, function () {
    res.redirect("/");
  });
});

router.get("/edit/:_id", function (req, res) {
  Books.findOne({ _id: req.params._id }, function (err, review) {
    res.render("editReviews", { title: "Edit Review", review: review });
  });
});

router.post("/edit/:_id", function (req, res) {
  Reviews.findOneAndUpdate(
    { _id: req.params._id },
    { $set: req.body },
    function (err, review) {
      console.log(review);
      res.redirect("/");
    }
  );
});

module.exports = router;