const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(403).send("Token nao fornecido!!");
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).send("Token invalido");
    }
    req.user = user;
    next();
  });
};

module.exports = { verificarToken };
