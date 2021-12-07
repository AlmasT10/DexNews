const express = require("express");
const router = express.Router();

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("be209dfe2f554400a9e6e3e214fdc366");

router.get("/", async (req, res) => {
  var news = [];
  newsapi.v2
    .topHeadlines({
      language: "en",
    })
    .then((response) => {
      console.log(response);
      news = response;
      res.send(news);
    });
});

router.get("/sport", async (req, res) => {
  var news = [];
  newsapi.v2
    .topHeadlines({
      language: "en",
      category: "sport",
    })
    .then((response) => {
      news = response;
      res.send(news);
    });
});
router.get("/business", async (req, res) => {
  var news = [];
  newsapi.v2
    .topHeadlines({
      language: "en",
      category: "business",
    })
    .then((response) => {
      news = response;
      res.send(news);
    });
});
router.get("/entertainment", async (req, res) => {
  var news = [];
  newsapi.v2
    .topHeadlines({
      language: "en",
      category: "entertainment",
    })
    .then((response) => {
      news = response;
      res.send(news);
    });
});
router.get("/canada", async (req, res) => {
  var news = [];
  newsapi.v2
    .topHeadlines({
      language: "en",
      country: "ca",
    })
    .then((response) => {
      news = response;
      res.send(news);
    });
});
router.get("/education", async (req, res) => {
  var news = [];
  newsapi.v2
    .topHeadlines({
      language: "en",
      category: "education",
    })
    .then((response) => {
      news = response;
      res.send(news);
    });
});
router.get("/health", async (req, res) => {
  var news = [];
  newsapi.v2
    .topHeadlines({
      language: "en",
      category: "health",
    })
    .then((response) => {
      news = response;
      res.send(news);
    });
});
router.get("/technology", async (req, res) => {
  var news = [];
  newsapi.v2
    .topHeadlines({
      language: "en",
      category: "technology",
    })
    .then((response) => {
      news = response;
      res.send(news);
    });
});
router.get("/?search", async (req, res) => {
  const news = [];
  newsapi.v2
    .everything({
      q: req.query.search,
      language: "en",
    })
    .then((response) => {
      console.log(response);
      news = response;
      res.send(news);
    });
});

module.exports = router;
