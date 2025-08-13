# Automação Kanban com Cypress
Este projeto contém testes automatizados para uma aplicação Kanban usando [Cypress](https://www.cypress.io/).

## Requisitos
- Node.js >= 18
- Cypress >= 13

## Configuração do Projeto
Clone o repositório e inicialize o projeto:

- git clone <>
- npm init -y

## Instale o Cypress:
- npm install cypress --save-dev

## Abra o Cypress pela primeira vez para criar a estrutura de pastas:
- npx cypress open

## Execução dos Testes:
    Modo headless (terminal):
     - npx cypress run

    Modo interativo (interface gráfica):
     - npx cypress open

## Execução CI/CD:
Somente quando ouver push no diretorio do projeto

## Relatórios no sheets:
https://docs.google.com/spreadsheets/d/1_2yUDgRat1cMdhZpusZb4VWYzpuHdQsycHcs-gfnw1Q/edit?usp=sharing
----------------------------------------------------------------------------------------------
### Observação 2:
Este projeto foi realizado da maneira mais simples, não houve adição de muitos padrões e escrita de teste.

### Observação 2:
> Sobre os testes
1- Deverá ser criado uma documentação exibindo os erros deste site:
https://kanban-dusky-five.vercel.app/. Documente quaisquer problemas que você encontrar,
incluindo bugs, problemas de usabilidade, inconsistências visuais, erros de carregamento, ou
qualquer outra coisa que pareça estar fora do lugar ou não funcionar corretamente. Descreva
bem os problemas pensando que o documento será enviado a um desenvolvedor para
corrigi-los. Explique bem os erros, pode ser adicionado imagens ou gifs na documentação para
ajudar na explicação do erro.
2-Para esse teste, você precisa criar um código de teste end-to-end usando, de preferência, o
framework Cypress. O objetivo é automatizar os principais fluxos do mesmo site:
https://kanban-dusky-five.vercel.app/ e garantir que tudo funcione como esperado. Tente
estruturar os arquivos de forma organizada para facilitar a manutenção e leitura do código.