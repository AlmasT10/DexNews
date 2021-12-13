const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comment");

// const { auth } = require("../middleware/auth");

router.get("/:postId", async (req, res) => {
  const commentList = await Comment.find({
    postId: req.params.postId,
  });

  if (!commentList) {
    res.status(500).json({ message: "The user with given id was not found" });
  }
  res.send(commentList);
});

router.post("/save", async (req, res) => {
  let comment = new Comment({
    writer: req.body.writer,
    postId: req.body.postId,
    content: req.body.content,
  });
  comment = await comment.save();

  if (!comment) {
    return res.status(400).send("User cannot be created");
  }
  res.send(comment);
});

module.exports = router;
