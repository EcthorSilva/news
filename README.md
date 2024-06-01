# News App

###### an tray app made with electron and react

Antes de começarmos, gostaria de esclarecer alguns pontos:

> Iniciei este projeto com o intuito de ser um desafio pessoal. Queria criar um aplicativo desktop do zero utilizando apenas React, Node.js e Electron para desenvolver a interface, o backend e a aplicação em si.  
> Já faz um bom tempo desde que estudei desenvolvimento web com frameworks, principalmente porque o foco da minha faculdade está em aplicações Java. Portanto, para não perder o jeito, decidi revisitar um pouco de JavaScript nas férias.

## Sobre o aplicativo: 

Este projeto consiste em um aplicativo de bandeja de sistema desenvolvido utilizando Electron e React. A aplicação permite ao usuário acessar e visualizar informações sobre repacks de jogos do FitGirl diretamente do desktop.

## Passos para Rodar a aplicação:

Após clonar o repositório, abra o terminal e execute o comando `npm install` na raiz do projeto para instalar as dependências do Electron e do React.

```bash
npm install
```

Em seguida, navegue até o diretório src-api e execute novamente o comando `npm install` para instalar as dependências do servidor Node.js.
```bash

cd src-api
npm install
```

## Como Rodar o Aplicativo
Após clonar o repositório e instalar as dependências, siga os passos abaixo para iniciar a aplicação:

Abra um terminal e navegue até o diretório src-api e em seguida, inicie o servidor Node.js executando o seguinte comando:

```bash
cd src-api
node .
```
O servidor será iniciado na porta padrão `3005`.

Abra um novo terminal (mantenha o terminal do passo anterior aberto) e navegue até o diretório raiz do projeto:

```bash
# No diretório raiz do projeto
npm start
```

Isso iniciará a aplicação React. Aguarde até que a mensagem "Compiled successfully" seja exibida no terminal, indicando que o aplicativo React está pronto e acessível em `http://localhost:3000`.

Abra outro novo terminal (mantenha os terminais anteriores abertos) e navegue até o diretório raiz do projeto:

```bash
# No diretório raiz do projeto
npm run start-electron
```

Ficará mais ou menos assim: 

![image](https://github.com/EcthorSilva/news/assets/13456785/0e336ea2-5f59-4727-bb8b-2908377d109b)

### Observações

- Certifique-se de que todas as dependências foram instaladas corretamente antes de iniciar o aplicativo.
- Os passos 1 e 2 devem ser mantidos em execução enquanto você estiver testando o aplicativo localmente.
- Se houver qualquer erro durante o processo de instalação ou execução, verifique as mensagens de erro nos terminais para solucionar os problemas.