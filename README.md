# API REST de Usuários – CRUD Básico

API em desenvolvimento utilizando Express no Nodejs, que simula o gerenciamento simples de usuários com operações básicas de criação e listagem.

## Funcionalidades
- Adicionar usuários com método `POST`
- Listar todos os usuários com método `GET`
- Atualizar usuários com método `PUT`
- Deletar usuários com método `DELETE`

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/) — ambiente de execução JavaScript no back-end  
- [Express](https://expressjs.com/pt-br/) — framework utilizado na aplicação
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - linguagem responsável pela lógica da aplicação
- [MongoDB](https://www.mongodb.com/) — Banco de dados NoSQL utilizado para armazenar os dados da aplicação  
- [Prisma ORM](https://www.prisma.io/) — ORM utilizado para realizar operações no banco de dados de forma prática e segura 
- [Thunder Client](https://www.thunderclient.com/) — Extensão do VS Code para testar rotas e requisições HTTP  

## Como Funciona
2. **POST /usuarios**: cria um usuário no banco com os dados enviados no corpo da requisição.
3. **GET /usuarios**: lista todos os usuários, ou filtra por nome, email ou idade se passar esses parâmetros na URL.
4. **PUT /usuarios/:id**: atualiza os dados do usuário com o ID informado.
5. **DELETE /usuarios/:id**: remove o usuário com o ID informado.

