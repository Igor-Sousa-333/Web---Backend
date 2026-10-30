const express = require("express");
const rotas = require("./routes");

const app = express();

// Permite que o servidor entenda dados enviados em JSON
app.use(express.json());

// Registrador (Mostra no terminal a ação realizada e o caminho acessado)
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Conecta os caminhos criados no arquivo routes.js
app.use(rotas);

// Resposta para caminhos que não existem (Erro 404)
app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada" });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});