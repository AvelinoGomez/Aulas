const express = require("express");
const router = express.Router();

router.get("/:nome", (req, res) => {
  const dados = req.path.replace("/", "");

  if (dados == "Avelino") {
    retorno = {
      nome: "Avelino",
      idade: 23,
      sobrenome: "Alonso",
      altura: 1.9,
    };
  } else if (dados == "Daniel") {
    retorno = {
      nome: "Daniel",
      idade: 23,
      sobrenome: "Parizotto",
      altura: 1.9,
    };
  } else {
    retorno = {
      message: "Usuário não encontrado!",
    };
    res.status(404).json(retorno);
  }
  res.status(200).json(retorno);
});

router.get("/", (req, res) => {
  const dados = req.query;

  var retorno;
  if (dados.nome == "Avelino") {
    retorno = {
      nome: "Avelino",
      idade: 23,
      sobrenome: "Alonso",
      altura: 1.9,
    };
  } else if (dados.nome == "Daniel") {
    retorno = {
      nome: "Daniel",
      idade: 23,
      sobrenome: "Parizotto",
      altura: 1.9,
    };
  } else {
    retorno = {
      message: "Usuário não encontrado!",
    };
    res.status(404).json(retorno);
  }
  res.status(200).json(retorno);
});

module.exports = router;
