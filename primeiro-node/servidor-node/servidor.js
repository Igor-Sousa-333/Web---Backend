const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');


    if (req.url === '/') {
        res.writeHead(200);
        res.end('Bem-vindo à minha aplicação Node.js!');
    } else if (req.url === '/sobre') {
        res.writeHead(200);
        res.end('Esta é a página sobre a aplicação.');
    } else if (req.url === '/alunos') {
        res.writeHead(200);
        res.end('Lista de alunos da turma.');
    } else if (req.url === '/contato') {
        res.writeHead(200);
        res.end('Entre em contato conosco.');
    } else {
       
        res.writeHead(404);
        res.end('Página não encontrada.');
    }
});


server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});