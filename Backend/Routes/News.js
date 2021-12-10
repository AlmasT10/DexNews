const express = require("express");
const router = express.Router();
const request = require("request");
var axios = require("axios").default;

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("be209dfe2f554400a9e6e3e214fdc366");

function getData() {
  var options = {
    method: "GET",
    url: "https://newscatcher.p.rapidapi.com/v1/latest_headlines",
    params: { lang: "en", media: "True" },
    headers: {
      "x-rapidapi-host": "newscatcher.p.rapidapi.com",
      "x-rapidapi-key": "b979099e85msh69abeb0748e6ecdp138745jsnc1b325f53833",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

router.get("/", async (req, res) => {
  var news = getData();
  res.send(news);
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
