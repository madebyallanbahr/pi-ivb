// app.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

const dbFilePath = path.join(__dirname, 'db', 'clients.json');

// Middleware para parse de JSON
app.use(express.json());

// Função auxiliar para ler e escrever no arquivo JSON
const readDB = () => {
  try {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    const parsed = JSON.parse(data);
    return parsed.clients || []; // Garante que retorne apenas o array de clientes
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    return [];
  }
};

const writeDB = (clients) => {
  try {
    const data = { clients };
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Erro ao escrever no arquivo JSON:', error);
  }
};

// Rotas CRUD

// Listar todos os clientes
app.get('/clients', (req, res) => {
  const clients = readDB();
  res.json(clients);
});

// Obter um cliente por ID
app.get('/clients/:id', (req, res) => {
  const clients = readDB();
  const client = clients.find(c => c.cliente_id === req.params.id);
  if (!client) {
    return res.status(404).json({ message: 'Cliente não encontrado' });
  }
  res.json(client);
});

// Criar um novo cliente
app.post('/clients', (req, res) => {
  const clients = readDB();
  const { nome, endereco, cep, data_de_nascimento, telefone } = req.body;

  if (!nome || !endereco || !cep || !data_de_nascimento || !telefone) {
    return res.status(400).json({ message: 'Campos sem preenchimento: ' + (!nome ? " nome " : '') + (!endereco ? " endereco " : '') + (!cep ? " cep " : '') + (!data_de_nascimento ? " data_de_nascimento " : '') + (!telefone ? " telefone " : '') });
  }

  const newClient = {
    cliente_id: uuidv4(),
    nome,
    endereco,
    cep,
    data_de_nascimento,
    telefone,
  };
  clients.push(newClient);
  writeDB(clients);
  res.status(201).json(newClient);
});

// Atualizar um cliente
app.put('/clients/:id', (req, res) => {
  const clients = readDB();
  const index = clients.findIndex(c => c.cliente_id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Cliente não encontrado' });
  }

  const { nome, endereco, cep, data_de_nascimento, telefone } = req.body;

  clients[index] = {
    ...clients[index],
    ...(nome && { nome }),
    ...(endereco && { endereco }),
    ...(cep && { cep }),
    ...(data_de_nascimento && { data_de_nascimento }),
    ...(telefone && { telefone }),
  };
  writeDB(clients);
  res.json(clients[index]);
});

// Deletar um cliente
app.delete('/clients/:id', (req, res) => {
  const clients = readDB();
  const filteredClients = clients.filter(c => c.cliente_id !== req.params.id);
  if (clients.length === filteredClients.length) {
    return res.status(404).json({ message: 'Cliente não encontrado' });
  }
  writeDB(filteredClients);
  res.status(204).send();
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
