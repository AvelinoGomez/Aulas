const express = require("express");
const router = express.Router();

const contas = [
  {
    username: "avelino",
    senha: "1234",
    nome: "Avelino",
    idade: 23,
    cor_favorita: "verde",
  },
  {
    username: "jonathan",
    senha: "4321",
    nome: "Jonathan",
    idade: 23,
    cor_favorita: "preto",
  },
];

router.post("/", (req, res) => {
  const dados = req.body;

  contas.forEach((item) => {
    if (item.username == dados.username) {
      if (item.senha == dados.password) {
        delete item.senha;
        res.json(item);
      } else {
        res.json({ message: "Usuário ou senha incorretos!" });
      }
      return;
    }
  });

  res.json({ message: "Usuário não cadastrado!" });
});

module.exports = router;
