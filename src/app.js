const express = require('express');

const app = express();
app.use(express.json());

const Tarefas = require('./tarefas');
const tarefas = new Tarefas();

app.post('/tarefas', async (req, res) => {
    await Tarefas.adicionar(req.body.descricao);
    return res.status(201).json('Tarefa adicionada com sucesso!');
});

app.delete('/tarefas/:indice', async (req, res) => {
    await Tarefas.remover(req.params.indice);
    return res.status(200).json('Tarefa removida com sucesso!');
});

app.get('/tarefas', async (req, res) => {
    const response = await Tarefas.todas();
    return res.status(200).json(response);
});

app.patch('/tarefas/:indice', async (req, res) => {
    await this.Tarefas.marcarConcluida(req.params.indice);
    return res.status(200).json('Tarefa marcada como concluída!');
});

module.exports = app;
