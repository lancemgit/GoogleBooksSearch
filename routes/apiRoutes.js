const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const db = require("../models");


// API Routes
router.get("/api/book", function (req, res) {
  db.Book.find().then(function (allBooks) {
    res.json(allBooks);
  }).catch(function (err) {
    res.json({ status: "Failure" });
  });
});

router.post("/api/search", function (req, res) {
  let search = req.body.search.replace(/\s+/g, '+');
  axios("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=" + process.env.GOOGLE_KEY).then(function (book) {
    res.json(book.data.items);
  }).catch(function (err) {
    res.json({ status: "Failure" });
  });
});

router.post("/api/book", function (req, res) {
  db.Book.create(req.body.data).then(function (success) {
    res.json(success);
  }).catch(function (err) {
    res.json({ status: "Failure" });
  });
});

router.delete("/api/book/:id", function (req, res) {
  let id = req.params.id;

  db.Book.findByIdAndDelete(id).then(function (deleted) {
    res.json(deleted);
  }).catch(function (err) {
    res.json({ status: "Failure" });
  });
});

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
