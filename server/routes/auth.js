const express = require("express");
const router = express.Router();
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
        const acessToken = createTokens(user);
        res.cookie("access-token", acessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000, //
          httpOnly: true,
          path: "/",
          secure: false,
          sameSite: "Strict",
          domain: "localhost",
        });
        res.cookie("username", user.username, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
          httpOnly: false,
          path: "/",
          secure: false,
          sameSite: "Strict",
          domain: "localhost",
        });
        return res.json({ response: "Logado com Sucesso" });
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

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userUsername = await User.findOne({ where: { username } });
    const userEmail = await User.findOne({ where: { email } });

    if (userUsername != null) {
      res.status(418).send({ error: "Username ja existe!" });
    } else if (userEmail != null) {
      res.status(418).send({ error: "Email ja existe!" });
    } else {
      const user = await User.create({ username, email, password });
    }

    return res.json({ response: "Conta Criada com sucesso" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
