# Proposal

## Why

O sistema de biblioteca do grupo precisa de uma funcionalidade central para o gerenciamento de livros. Atualmente, não há interface nem integração com dados persistidos para cadastrar e listar os livros do acervo, dificultando o uso por parte dos bibliotecários e leitores. Esta mudança introduz o consumo de dados via JSON Server, permitindo listar o acervo em tempo real, cadastrar novos livros através de um formulário dedicado e garantir uma experiência de usuário resiliente com tratamento adequado de erros de rede.

## What Changes

- Consumo de dados da API via JSON Server utilizando um arquivo `db.json` como contrato contendo os campos dos livros (`id`, `title`, `author`, `loanStatus`).
- Implementação da Funcionalidade de Listagem de Livros exibindo todos os livros cadastrados no acervo com indicador de carregamento.
- Implementação da Funcionalidade de Cadastro de Livros através de um formulário interativo validado que envia dados via requisição POST para a API.
- Implementação de Tratamento de Erro robusto com feedback visual na tela caso o JSON Server esteja desligado ou ocorra falha na requisição.
- Estruturação estrita utilizando as pastas `src/api`, `src/components` e `src/pages`.

## Capabilities

### New Capabilities
- `gerenciar-livros`: Gerenciamento completo de livros no sistema de biblioteca (listagem, cadastro e tratamento de erros de API).

### Modified Capabilities
- (Nenhuma)

## Impact

- Novos arquivos adicionados na estrutura React (`src/api/bookService.js`, `src/components/BookList.jsx`, `src/components/BookForm.jsx`, `src/components/ErrorBanner.jsx`, `src/pages/BooksPage.jsx`).
- Adição do arquivo `db.json` na raiz do projeto `Projeto/` para o contrato do JSON Server.
- Atualização em `src/App.jsx` para integrar a nova página de gerenciamento de livros.
