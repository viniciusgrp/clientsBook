### Olá

Esta é a parte front end do projeto ClientsBook

Para facilitar, foi feito o deploy desse projeto, para que não seja necessário instalar e rodar localmente.

Link do deploy:
https://clients-book.vercel.app/

Caso deseje rodar o projeto localmente é necessário a execução da API e a criação do banco de dados, link do repositório:
https://github.com/viniciusgrp/clientsBook-backend

Após seguir os passos do README.md presente no repositorio da API, agora é necessário instalar as dependencias.
Para isso rode o seguinte comando no terminal: yarn install

O projeto está configurado para rodar no deploy, localmente será necessário alterar a baseURL da API, para isso vá até>

src/services/api.ts

Comente a linha 4 e descomente a linha 5 

Agora o projeto estará pronto para executar localmente.
Para isso digite no terminal: yarn start
