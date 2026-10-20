
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let alunos = [
    { id: 1, nome: 'Maria', curso: 'Medicina' },
    { id: 2, nome: 'João', curso: 'Telemática' }
];

let proximoId = Math.max(...alunos.map(aluno => aluno.id)) + 1;

app.get('/alunos', (req, res) => {
    res.status(200).json(alunos);
});

app.get('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    const aluno = alunos.find(aluno => aluno.id === id);

    if (!aluno) {
        return res.status(404).json({
            erro: 'Aluno não encontrado.'
        });
    }

    res.status(200).json(aluno);
});


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
            erro: 'Aluno não encontrado.'
        });
    }

    aluno.nome = nome.trim();
    aluno.curso = curso.trim();

    res.status(200).json(aluno);
});

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


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
