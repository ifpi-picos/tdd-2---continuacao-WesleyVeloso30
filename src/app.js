const express = require('express');

const app = express();
app.use(express.json());

const Tarefas = require('./tarefas.js');
const tarefas = new Tarefas();

app.post('/tarefas', (req, res) => {
    tarefas.adicionar(req.body.descricao);
    return res.status(201).send('Tarefa adicionada com sucesso!');
});

app.delete('/tarefas/:indice', (req, res) => {
     tarefas.remover(req.params.indice);
    return res.status(200).send('Tarefa removida com sucesso!');
});

app.get('/tarefas', (req, res) => {
    const response =  tarefas.todas();
    return res.status(200).send(response);
});

app.patch('/tarefas/:indice', (req, res) => {
     tarefas.marcarConcluida(req.params.indice);
    return res.status(200).send('Tarefa marcada como concluída!');
});

module.exports = app;
