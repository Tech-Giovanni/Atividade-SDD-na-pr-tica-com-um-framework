# Design

## Context
Ver proposal.md para motivação. O projeto é construído em React com Vite, necessitando obrigatoriamente da estrutura de pastas `src/api`, `src/components` e `src/pages`. Utiliza JSON Server como backend simulado por meio do arquivo `db.json`.

## Goals / Non-Goals

**Goals:**
- Implementar comunicação HTTP limpa com o JSON Server usando `fetch` encapsulado em `src/api/bookService.js`.
- Estruturar componentes reutilizáveis em `src/components/` (`BookList`, `BookForm`).
- Criar a página principal `src/pages/BooksPage.jsx` gerindo estado de listagem, formulário, loading e erro.

**Non-Goals:**
- Autenticação e autorização de usuários.
- Edição ou exclusão avançada de livros (foco em listagem e cadastro conforme especificado).

## Decisions

- **Serviço de API separado (`src/api/bookService.js`)**: Isola a lógica de requisições HTTP (`GET`, `POST`) e tratamento de erros do componente visual, facilitando testes e manutenção.
- **Estrutura de Pastas Obrigatória**: Utilização estrita de `src/api`, `src/components` e `src/pages` em conformidade com as diretrizes do projeto.

[Alterado pelo grupo]
- **Tratamento de Erro**: Se o usuário tentar cadastrar um livro com campos vazios ou inválidos, o formulário exibe mensagens de erro em vermelho diretamente abaixo de cada campo afetado

