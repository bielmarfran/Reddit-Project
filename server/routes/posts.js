const express = require("express");
const router = express.Router();
const { sequelize, User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
  const uuid = req.uuid;
  console.log(req.uuid);
  try {
    const user = await User.findOne({
      where: { uuid },
      include: "posts",
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Get" });
  }
});

router.get("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  //console.log("DENTRO ROTA",req.uuid);
  try {
    const post = await Post.findOne({
      where: { uuid },
      include: "comments",
    });
    const user = await User.findOne({ where: { uuid: req.uuid } });

    const comments = await Comment.findAll({ where: { id: user.id } });

    console.log("-------", comments);

    return res.json({ posts: post, comments2: comments });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Get" });
  }
});

router.post("/", async (req, res) => {
  const name = req.body;
  const userUuid = req.uuid;
  try {
    const user = await User.findOne({ where: { uuid: userUuid } });

    const post = await Post.create({ name, userId: user.id });
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
