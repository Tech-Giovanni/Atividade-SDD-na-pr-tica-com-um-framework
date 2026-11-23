# Spec Delta

## Purpose

Permite o gerenciamento completo do acervo de livros do sistema de biblioteca através de consumo de dados da API via JSON Server, listagem de livros, formulário de cadastro e tratamento robusto de erros.

## ADDED Requirements

### Requirement: Consumo de dados via JSON Server
O sistema deve consumir e enviar dados de livros utilizando o contrato JSON Server em um arquivo `db.json` contendo os campos `id`, `titulo`, `autor` e `status`.

#### Scenario: Carregamento bem-sucedido dos dados
- **WHEN** a página de livros é acessada e o JSON Server está online
- **THEN** o sistema busca os livros via GET e os exibe no acervo

### Requirement: Listagem de Livros
O sistema deve exibir uma lista contendo todos os livros cadastrados no acervo com seus respectivos detalhes (título, autor e status de empréstimo).

#### Scenario: Visualização do acervo
- **WHEN** os livros são carregados com sucesso
- **THEN** cada livro é apresentado na interface com título, autor e status

### Requirement: Cadastro de Livros
O sistema deve fornecer um formulário para adicionar novos livros ao acervo, validando os campos obrigatórios e persistindo os dados na API via POST.

#### Scenario: Adição bem-sucedida de um livro
- **WHEN** o usuário preenche o título, autor e status e clica em cadastrar
- **THEN** o livro é enviado para a API e adicionado à listagem exibida


[Alterado pelo grupo]
### Requirement: Tratamento de Erro e Feedback Visual
O sistema deve exibir um feedback visual claro na tela quando ocorrer falha na comunicação com a API ou se o JSON Server estiver desligado.

Se o livro que for cadastro não for preenchido de forma ou estiver com informações vazias, o sistema exibe um feedback referente a esse caso, para as informações serem preenchidas de forma correta 


#### Scenario: Falha de conexão com o JSON Server
- **WHEN** o JSON Server está desligado ou inacessível durante uma requisição
- **THEN** uma mensagem de erro visual clara é apresentada na tela para o usuário
