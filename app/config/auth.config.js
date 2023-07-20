const { sign } = require("jsonwebtoken");

const secret =
  "8e4ce8bb19283fbc93a47ddbb7fa505df02afeb2a5c5c34880d0c7823d82632af86c8b8a8489a2ebeecaee2cbd9e54c5323fc77efc472dd6e85f365d5658c2a5";

const createTokens = (user) => {
  const accessToken = sign({ id: user.id }, secret, {
    expiresIn: "15m",
  });
  return { accessToken: accessToken };
};

module.exports = { createTokens, secret };
