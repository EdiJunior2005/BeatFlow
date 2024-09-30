const jwt = require("jsonwebtoken");

const SECRET_KEY = "equipiada";

const gerarToken = (Id) => {
  return jwt.sign({ id: Id }, SECRET_KEY, { expiresIn: "1h" });
};
const verificarToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(403).send("Token nao fornecido!!");
  }
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send("Token invalido");
    }
    req.Id = decoded.id;
    next();
  });
};
console.log(gerarToken())
module.exports = { gerarToken, verificarToken };
