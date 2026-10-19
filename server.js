
const express = require('express');

const app = express();
const PORT = 3000;

// Permite receber dados em formato JSON
app.use(express.json());

// Dados iniciais dos alunos
let alunos = [
    { id: 1, nome: 'Ana', curso: 'Computação' },
    { id: 2, nome: 'Pedro', curso: 'Sistemas de Informação' }
];

// Estratégia: o próximo ID será sempre maior que o maior ID existente
let proximoId = Math.max(...alunos.map(aluno => aluno.id)) + 1;

// GET /alunos
// Retorna todos os alunos
app.get('/alunos', (req, res) => {
    res.status(200).json(alunos);
});

// GET /alunos/:id
// Retorna um aluno específico
app.get('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    const aluno = alunos.find(aluno => aluno.id === id);

    if (!aluno) {
        return res.status(404).json({
            erro: 'Não encontrado.'
        });
    }

    res.status(200).json(aluno);
});

// POST /alunos
// Cadastra um novo aluno
app.post('/alunos', (req, res) => {
    const { nome, curso } = req.body;

    if (
        typeof nome !== 'string' || nome.trim() === '' ||
        typeof curso !== 'string' || curso.trim() === ''
    ) {
        return res.status(400).json({
            erro: 'Nome e curso são obrigatórios.'
        });
    }

    const novoAluno = {
        id: proximoId++,
        nome: nome.trim(),
        curso: curso.trim()
    };

    alunos.push(novoAluno);

    res.status(201).json(novoAluno);
});

// PUT /alunos/:id
// Atualiza o nome e o curso de um aluno
app.put('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    const { nome, curso } = req.body;

    if (
        typeof nome !== 'string' || nome.trim() === '' ||
        typeof curso !== 'string' || curso.trim() === ''
    ) {
        return res.status(400).json({
            erro: 'Nome e curso são obrigatórios.'
        });
    }

    const aluno = alunos.find(aluno => aluno.id === id);

    if (!aluno) {
        return res.status(404).json({
            erro: 'Não encontrado.'
        });
    }

    aluno.nome = nome.trim();
    aluno.curso = curso.trim();

    res.status(200).json(aluno);
});

// DELETE /alunos/:id
// Exclui um aluno
app.delete('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = alunos.findIndex(aluno => aluno.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: 'Aluno não encontrado.'
        });
    }

    alunos.splice(indice, 1);

    res.status(204).end();
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
