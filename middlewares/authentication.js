const { verify } = require("../helpers/jwt");
const { User } = require("../models");
const authentication = async (req, res, next) => {
  const token = req.headers.access_token;
  try {
    const payload = verify(token);
    const foundUser = await User.findOne({
      where: {
        id: payload.id,
        username: payload.username,
      },
    });
    if (!foundUser) {
      res.status(404).json({ message: "User not found" });
    }
    req.user = {
      id: foundUser.id,
      username: foundUser.username,
      fullName: foundUser.fullName,
      location: foundUser.location,
    };
    next();
  } catch (error) {
    res.status(400).json({ message: "invalid jwt token" });
  }
};
module.exports = authentication;
