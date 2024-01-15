const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;

  const payload = {success:false,msg:"not authorized"};
  if (!userUid) return res.status(401).send(payload);
  const user = getUser(userUid);

  if (!user) return res.status(401).send(payload);

  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const userUid = req.cookies?.uid;

  const user = getUser(userUid);

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};