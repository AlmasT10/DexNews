const express = require("express");
const router = express.Router();

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("be209dfe2f554400a9e6e3e214fdc366");

router.get("/", async (req, res) => {
  newsapi.v2
    .topHeadlines({
      language: "en",
      country: "us",
    })
    .then((response) => {
      console.log(response);
    });
});

module.exports = router;
