## Tasks

[Alterado pelo grupo] Divisão de tarefas entre os 7 integrantes do grupo e inclusão da verificação manual dos cenários de erro.

# Configuração de Dados e API
- [ FEITO ] [ Giovanni ] 1.1 Criar o arquivo `db.json` na raiz do projeto `Projeto/` com o contrato inicial de livros (id, titulo, autor, status) e verificar que o JSON Server consegue lê-lo.
- [ ] [ Felipe ] 1.2 Criar o arquivo de serviço da API em `src/api/bookService.js` implementando funções `getBooks` e `createBook` com tratamento de erros de rede.

# Componentes de Interface
- [ ] [ Kayke ] 2.1 Criar o componente `src/components/BookForm.jsx` contendo formulário controlado para cadastro de novos livros, implementando a validação de campos vazios ou inválidos com exibição de mensagens de erro em vermelho diretamente abaixo de cada campo afetado.
- [ ] [ Samara ] 2.2 Criar o componente `src/components/BookList.jsx` para renderizar a lista de livros do acervo com seus detalhes de status.

# Página Principal e Integração
- [ ] [ Josué ] 3.1 Criar a página principal em `src/pages/BooksPage.jsx` integrando `BookList` e `BookForm`, gerindo os estados de carregamento, dados da API e exibição de erros de requisição.
- [ ] [ Erick ] 3.2 Atualizar `src/App.jsx` para renderizar `BooksPage` e verificar a navegação inicial e funcionamento correto.

# Verificação e Qualidade
- [ ] [ Nicoly ] 4.1 Executar a construção da aplicação (`npm run build`), o linter (`npm run lint`) e validar os cenários de erro da spec (API offline e campos vazios), registrando o checklist de validação.

# Workflow follow-up
Arquivar a mudança após aprovação e revisão final.