const express = require("express");
const router = express.Router();

// Lista na memória para guardar os jogos (começa vazia)
let jogos = [];
let proximoId = 1;

// 1. Listar todos os jogos
router.get("/jogos", (req, res) => {
  res.json(jogos);
});

// 2. Buscar um jogo pelo número do ID
router.get("/jogos/:id", (req, res) => {
  const jogo = jogos.find(j => j.id === Number(req.params.id));
  
  if (!jogo) {
    return res.status(404).json({ mensagem: "Jogo não encontrado" });
  }
  
  res.json(jogo);
});

// 3. Cadastrar um novo jogo
router.post("/jogos", (req, res) => {
  const { titulo, plataforma, genero, anoLancamento } = req.body;

  // Validação: se faltar algum dado, avisa com erro 400
  if (!titulo || !plataforma || !genero || !anoLancamento) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
  }

  const novoJogo = {
    id: proximoId++,
    titulo,
    plataforma,
    genero,
    anoLancamento
  };

  jogos.push(novoJogo);
  res.status(201).json(novoJogo); // Status 201 = Criado com sucesso
});

// 4. Alterar os dados de um jogo
router.put("/jogos/:id", (req, res) => {
  const jogo = jogos.find(j => j.id === Number(req.params.id));

  if (!jogo) {
    return res.status(404).json({ mensagem: "Jogo não encontrado" });
  }

  const { titulo, plataforma, genero, anoLancamento } = req.body;

  // Atualiza apenas as informações enviadas
  if (titulo) jogo.titulo = titulo;
  if (plataforma) jogo.plataforma = plataforma;
  if (genero) jogo.genero = genero;
  if (anoLancamento) jogo.anoLancamento = anoLancamento;

  res.json(jogo);
});

// 5. Apagar um jogo
router.delete("/jogos/:id", (req, res) => {
  const index = jogos.findIndex(j => j.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ mensagem: "Jogo não encontrado" });
  }

  jogos.splice(index, 1); // Remove da lista
  res.json({ mensagem: "Jogo removido com sucesso" });
});

module.exports = router;