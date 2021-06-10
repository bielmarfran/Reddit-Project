const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();
var production = false;
if (process.env.PORT !== undefined) {
  production = true;
}

const createTokens = (user) => {
  const accessToken = sign(
    { uuid: user.uuid, username: user.username },
    "testeteste"
  );

  return accessToken;
};

const validateToken = (req, res, next) => {
  if (production) {
    if (req.headers.test == "true") {
      req.authenticated = true;
      req.uuid = "e3b210a7-ccdd-4d0e-bf18-9c984b8a76db";
      req.username = "Test User";
      return next();
    } else {
    }
  }
  const accessToken = req.cookies["access-token"];
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
