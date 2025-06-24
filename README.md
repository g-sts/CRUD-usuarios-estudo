# 👥 API REST de Usuários – CRUD Básico

API em desenvolvimento utilizando Express no Nodejs, que simula o gerenciamento simples de usuários com operações básicas de criação e listagem.

## Funcionalidades
- Adicionar usuários com método `POST`
- Listar todos os usuários com método `GET`
- Testes via Thunder Client 

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/) — ambiente de execução JavaScript no back-end  
- [Express](https://expressjs.com/pt-br/) — framework utilizado na aplicação
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - linguagem responsável pela lógica da aplicação  

## Como Funciona
1. O servidor é iniciado na porta `3000`.
2. A rota `POST /usuarios` recebe um objeto JSON e o adiciona ao array `users`.
3. A rota `GET /usuarios` retorna todos os usuários cadastrados.

