# node-http

Projeto inicial para a ultlização do http module para o Nodejs.

## Iniciando um projeto do Node

Cria um arquivo *package.json* o qual contém todas as dependências do projeto, semelhante nos projetos React.

```
npm init -y
```

### Nodemon

Módulo externo, ou seja, que não vem nativo no NodeJs, para atualizar automaticamente o projeto, sem precisar derrubar (_CTRL+C_) e reinicar manualmente.

```
npm i nodemon -D
```

- npm: node package manager
- i: Abreviação _install_
- nodemon: nome do módulo
- -D: _Development_, ou seja, módulo de desenvolvimento, não é executado após o build da aplicação.

GET
O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.

HEAD
O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.

POST
O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

## Methods

PUT
O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.

DELETE
O método DELETE remove um recurso específico.

PATCH
O método PATCH é utilizado para aplicar modificações parciais em um recurso.

