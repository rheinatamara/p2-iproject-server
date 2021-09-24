const jwt = require("jsonwebtoken");
const SECRET_KEY = "secretkey";
function sign(payload) {
  return jwt.sign(payload, SECRET_KEY);
}
function verify(token) {
  return jwt.verify(token, SECRET_KEY);
}
module.exports = { sign, verify };
