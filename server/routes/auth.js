const express = require("express");
const router = express.Router();
const { createTokens, validateToken } = require("../Middleware/jtw");
const { sequelize, User, Post, Comment } = require("../models");
var production = false;
if (process.env.PORT !== undefined) {
  production = true;
}

// router.get("/:email", validateToken, async (req, res) => {
//   //const { email } = req.body;
//   const email = req.params.email;
//   try {
//     const user = await User.findOne({
//       where: { email },
//       // include: [
//       //   {
//       //     model: Comment,
//       //     as: "comments",
//       //   },
//       //   {
//       //     model: Post,
//       //     as: "posts",

//       //   },
//       // ],
//       //include: "posts",
//     });
//     const countComments = await Comment.count({ where: { userId: user.id } });
//     const countPosts = await Post.count({ where: { userId: user.id } });

//     console.log(countComments, countPosts);
//     user.dataValues["countComments"] = countComments;
//     user.dataValues["countPosts"] = countPosts;
//     if (req.username == user.dataValues.username) {
//       user.dataValues["owner"] = true;
//     } else {
//       user.dataValues["owner"] = false;
//     }
//     return res.json(user);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Error Get Auth" });
//   }
// });

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } }).then(
      async function (user) {
        if (!user) {
          return res.status(400).json({ error: "Unauthorized access" });
        } else if (!(await user.validPassword(password))) {
          return res.status(400).json({ error: "Unauthorized access" });
        }
        const acessToken = createTokens(user);
        res.cookie("access-token", acessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000, //
          httpOnly: true,
          path: "/",
          secure: true,
          sameSite: "none",
          domain: production
            ? "social-plataform-backend.herokuapp.com"
            : "localhost",
        });
        console.log(user.dataValues);
        return res.json({
          response: "Successfully logged in",
          photos: {
            profile: user.dataValues.profilePicture,
            cover: user.dataValues.coverPicture,
          },
        }); //
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Login Error" });
  }
});

router.post("/logout", validateToken, async (req, res) => {
  const uuid = req.uuid;
  try {
    const user = await User.findOne({ where: { uuid: uuid } }).then(
      async function (user) {
        const acessToken = createTokens(user);
        res.cookie("access-token", acessToken, {
          maxAge: 0,
          httpOnly: true,
          path: "/",
          secure: false,
          sameSite: "Strict",
          domain: "localhost",
        });

        return res.json({ response: "Logout Successful" });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error POST" });
  }
});

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userUsername = await User.findOne({ where: { username } });
    const userEmail = await User.findOne({ where: { email } });

    if (userUsername != null) {
      res.status(418).send({ error: "Username already in use!" });
    } else if (userEmail != null) {
      res.status(418).send({ error: "Email already in use!" });
    } else {
      const user = await User.create({ username, email, password });
    }

    return res.json({ response: "Account created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
