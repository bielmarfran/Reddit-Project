const express = require("express");
const router = express.Router();
const { sequelize, User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {});

router.post("/", async (req, res) => {
  const { body, postUuid } = req.body; //
  const userUuid = req.uuid;
  try {
    console.log("-----------", body, userUuid, postUuid);
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.findOne({ where: { uuid: postUuid } });
    post.countComments++;
    post.commentsOrder++;

    await post.save();

    const comment = await Comment.create({
      body,
      userId: user.id,
      postID: post.id,
      order: post.commentsOrder + 1,
    });
    comment.dataValues.user = { username: user.username, email: user.email };
    return res.json(comment);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.delete("/:uuid", async (req, res) => {
  const { postUuid } = req.body;
  const commentUuid = req.params.uuid; //
  const userUuid = req.uuid;

  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.findOne({ where: { uuid: postUuid } });
    const comment = await Comment.findOne({
      where: { uuid: commentUuid, userId: user.id, postId: post.id },
    });
    post.countComments--;
    await post.save();
    await comment.destroy();
    return res.json({ response: "Comment Deleted!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Delete" });
  }
});

module.exports = router;
