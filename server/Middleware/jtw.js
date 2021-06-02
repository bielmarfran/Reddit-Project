const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
  const accessToken = sign(
    { uuid: user.uuid, username: user.username },
    "testeteste"
  );

  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];
  console.log("f", accessToken);
  //const accessToken = req.headers["access-token"];

  if (!accessToken)
    return res.status(400).json({ error: "User not Authenticated!" });

  try {
    const validToken = verify(accessToken, "testeteste");
    if (validToken) {
      req.authenticated = true;
      req.uuid = validToken.uuid;
      req.username = validToken.username;
      return next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = { createTokens, validateToken };
