const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const { createTokens, validateToken } = require("../Middleware/jtw");
const { sequelize, User, Post } = require("../models");

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

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } }).then(
      async function (user) {
        if (!user) {
          return res.status(400).json({ error: "Acesso não autorizado" });
        } else if (!(await user.validPassword(password))) {
          return res.status(400).json({ error: "Acesso não autorizado" });
        }
        console.log(user.uuid);

        const acessToken = createTokens(user);
        res.cookie("access-token", acessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
          httpOnly: true,
          path: "/",
          secure: false,
          sameSite: "Strict",
          domain: "localhost",
        });
        return res.json(user);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error Get" });
  }
});
router.post("/", (req, res) => {
  res.send("Test");
});

module.exports = router;
