const express = require("express");

const pessoaRoute = require("./routes/pessoas.route");
const loginRoute = require("./routes/login.route");

const app = express();
const router = express.Router();

app.use(express.json());

router.get("/status", (x, res) => {
  const status = {
    status: "Ok",
    description: "O servidor está online!",
  };
  res.status(200).json(status);
});

app.use("/pessoa", pessoaRoute);
app.use("/login", loginRoute);

app.use(router);

app.listen(3000, () => {
  console.log("Inicializando API na porta 3000!");
});
