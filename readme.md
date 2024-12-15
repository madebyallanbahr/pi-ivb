Projeto Integrador IV-B é uma API RESTful desenvolvida em Node.js utilizando o framework Express, com um banco de dados baseado em arquivos JSON. O objetivo principal é oferecer uma aplicação simples e funcional para gerenciar informações de clientes, implementando as operações básicas de um CRUD (Create, Read, Update, Delete).
Funcionalidades do Projeto:

    Listagem de Clientes: Obtenha uma lista de todos os clientes cadastrados.
    Consulta por ID: Busque informações detalhadas de um cliente específico.
    Cadastro de Clientes: Adicione novos clientes ao sistema com validações completas.
    Atualização de Dados: Atualize informações específicas de um cliente cadastrado.
    Remoção de Clientes: Exclua clientes do sistema de forma segura e eficiente.

Tecnologias Utilizadas:

    Node.js para o desenvolvimento do backend.
    Express como framework para criar rotas e gerenciar as requisições.
    UUID para gerar identificadores únicos.
    JSON como banco de dados simplificado para armazenar informações.

Como Executar o Projeto:

    Clone este repositório:

git clone https://github.com/seu-usuario/projeto-integrador-ivb.git
cd projeto-integrador-ivb

Instale as dependências:

npm install

Inicie o servidor:

    npm start

    Acesse a API em http://localhost:3000.

Endpoints Disponíveis:

    GET /clients - Retorna todos os clientes cadastrados.
    GET /clients/:id - Retorna um cliente específico pelo ID.
    POST /clients - Cria um novo cliente.
    PUT /clients/:id - Atualiza os dados de um cliente.
    DELETE /clients/:id - Remove um cliente do sistema.

Este projeto foi desenvolvido como parte das atividades práticas da disciplina Projeto Integrador IV-B, buscando consolidar os conhecimentos adquiridos sobre APIs, banco de dados e desenvolvimento backend.

Contribuições são bem-vindas! 🎉
