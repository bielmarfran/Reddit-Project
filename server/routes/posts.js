const express = require("express");
const router = express.Router();
const { sequelize, User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
  const uuid = req.uuid;
  console.log(req.uuid);
  try {
    const user = await User.findOne({ where: { uuid: uuid } });
    const post = await Post.findAll({ include: "user" });
    console.log(post);

    post.forEach((element) => {
      element.dataValues.username = user.username;
      element.userId == user.id
        ? (element.dataValues.owner = true)
        : (element.dataValues.owner = false);
    });
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Get" + error });
  }
});

router.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  //console.log("DENTRO ROTA",req.uuid);
  try {
    var post = await Post.findOne({
      where: { uuid },
      include: [
        {
          model: Comment,
          as: "comments",
          include: "user",
        },
        {
          model: User,
          as: "user",
        },
      ],
    });
    const user = await User.findOne({ where: { uuid: req.uuid } });

    const user2 = await User.findOne({ where: { id: post.userId } });
    post.dataValues.username = user.username;
    post.dataValues.comments.forEach((element) => {
      if (element.userID == user.id) {
        element.dataValues.owner = true;
      } else {
        element.dataValues.owner = false;
      }
    });

    return res.json({ posts: post });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Get Post" });
  }
});

router.post("/", async (req, res) => {
  const { topic, title, body } = req.body;
  const userUuid = req.uuid;
  try {
    const user = await User.findOne({ where: { uuid: userUuid } });

    const post = await Post.create({ topic, title, body, userId: user.id });
    post.dataValues.owner = true;
    post.dataValues.user = { username: user.username, email: user.email };

    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.delete("/:uuid", async (req, res) => {
  const postUuid = req.params.uuid; //
  const userUuid = req.uuid;

  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.findOne({
      where: { uuid: postUuid, userID: user.id },
    });
    await post.destroy();
    return res.json({ response: "Post Deleted!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Delete" + error });
  }
});

module.exports = router;
