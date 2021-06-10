const express = require("express");
const router = express.Router();
const fs = require("fs");
const { createTokens, validateToken } = require("../Middleware/jtw");
const { sequelize, User, Post, Comment } = require("../models");
require("dotenv").config();
var cloudinary = require("cloudinary").v2;
var production = false;
if (process.env.PORT !== undefined) {
  production = true;
}

router.get("/:username", async (req, res) => {
  //const { email } = req.body;
  const username = req.params.username;
  try {
    const user = await User.findOne({
      where: { username },
      // include: [
      //   {
      //     model: Comment,
      //     as: "comments",
      //   },
      //   {
      //     model: Post,
      //     as: "posts",

      //   },
      // ],
      //include: "posts",
    });
    const countComments = await Comment.count({ where: { userId: user.id } });
    const countPosts = await Post.count({ where: { userId: user.id } });

    console.log(countComments, countPosts);
    user.dataValues["countComments"] = countComments;
    user.dataValues["countPosts"] = countPosts;
    if (req.username == user.dataValues.username) {
      user.dataValues["owner"] = true;
    } else {
      user.dataValues["owner"] = false;
    }
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Get Auth" });
  }
});

router.post("/upload", async (req, res) => {
  const uuid = req.uuid;
  const place = req.body.place;
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const user = await User.findOne({ where: { uuid: uuid } });
  sampleFile = req.files.myFile;
  const ext = sampleFile.name.substring(sampleFile.name.lastIndexOf("."));
  uploadPath = production
    ? __dirname + "//" + place + req.username + ext
    : __dirname + "\\" + place + req.username + ext;

  // Use the mv() method to place the file somewhere on your server
  try {
    sampleFile.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
      cloudinary.uploader.upload(
        uploadPath,
        { folder: production ? `social/${place}/` : `test/social/${place}/` },
        function (error, result) {
          console.log(error, result);

          if (result !== undefined) {
            if (place === "profile") {
              destroyOldPhoto(user.dataValues.profilePicture);
              user.profilePicture = result.secure_url;
            } else {
              destroyOldPhoto(user.dataValues.coverPicture);
              user.coverPicture = result.secure_url;
            }
            user.save();
            fs.rmSync(uploadPath, {
              force: true,
            });
            return res.json({ response: "File uploaded!", user });
          } else {
            return res.json({ error: "Error in file upload!" });
          }
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
});

function getIdCloudinary(url) {
  return production
    ? url.substring(url.lastIndexOf("social"), url.lastIndexOf("."))
    : url.substring(url.lastIndexOf("test"), url.lastIndexOf("."));
}

function destroyOldPhoto(url) {
  if (url) {
    var id = getIdCloudinary(url);
    cloudinary.uploader.destroy(id, function (error, result) {
      console.log(error, result);
    });
  }
}

module.exports = router;
