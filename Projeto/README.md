# Sistema de Gerenciamento de Acervo de Biblioteca

## Projeto e integrantes
**Tema:** Sistema web para gerenciamento de acervo de biblioteca.  
**Problema que resolve:** Facilita o cadastro, a consulta e o acompanhamento do status de disponibilidade de livros em uma biblioteca, substituindo controles manuais por uma interface centralizada com validação de dados e feedback claro em caso de falhas na comunicação com o servidor.

**Integrantes do grupo:**
- Giovanni Chambi
- Felipe Patrocinio
- Kayke da Silva
- Samara Farias
- Nicoly Olsak
- Josué Avendano
- Erick da Silva

## Framework utilizado
O grupo escolheu o **OpenSpec** por ser um framework leve, objetivo e orientado a propostas de mudança (`proposal.md`, `spec.md`, `design.md` e `tasks.md`). Como a atividade exigia especificar, planejar, implementar e validar uma funcionalidade completa em equipe de 7 pessoas dentro de um prazo curto, o OpenSpec permitiu alinhar o contrato da API e dividir as tarefas por arquivo de forma mais clara, sem o excesso de burocracia documental de frameworks muito maiores.

## Como rodar

1. **Instalar as dependências do projeto:**
   `npm install`

2. **Subir a API simulada (JSON Server) na porta 3001:**
   `npm run api`  
   *(A API ficará disponível em `http://localhost:3001/livros`)*

3. **Em outro terminal, iniciar o front-end (React + Vite):**
   `npm run dev`

## Onde estão os artefatos
Todos os artefatos gerados pelo OpenSpec e revisados manualmente pelo grupo estão versionados na pasta `openspec/changes/gerenciar-livros/`:

- **Proposta:** `openspec/changes/gerenciar-livros/proposal.md`
- **Especificação (Spec):** `openspec/changes/gerenciar-livros/specs/gerenciar-livros/spec.md`
- **Design Técnico:** `openspec/changes/gerenciar-livros/design.md`
- **Plano e Lista de Tarefas:** `openspec/changes/gerenciar-livros/tasks.md`

**Responsável por cada tarefa:**
- **Giovanni (Tarefa 1.1):** Criação e configuração do contrato de dados `db.json` e do script do JSON Server.
- **Felipe (Tarefa 1.2):** Implementação do serviço de consumo HTTP em `src/api/bookService.js` (`getBooks` e `createBook`).
- **Kayke (Tarefa 2.1):** Criação do formulário controlado `src/components/BookForm.jsx` com validação de campos vazios e mensagens de erro.
- **Samara (Tarefa 2.2):** Criação do componente de listagem `src/components/BookList.jsx`.
- **Nicoly (Tarefa 3.1):** Criação da página principal `src/pages/BooksPage.jsx` integrando listagem, formulário e estados de erro/carregamento.
- **Josué (Tarefa 3.2):** Configuração da renderização principal da aplicação em `src/App.jsx`.
- **Erick (Tarefa 4.1):** Execução de `npm run build`, `npm run lint` e validação dos critérios de aceitação e cenários de erro.

## Reflexão

- **Que decisão o agente teria tomado sozinho e a spec evitou?**
  Sem a especificação explícita do contrato do `db.json` (com os campos exatos `id`, `titulo`, `autor` e `status`) e do comportamento de erro visual (exibir mensagens em vermelho diretamente abaixo dos campos inválidos e alerta visual quando o JSON Server estiver offline), o agente provavelmente teria criado propriedades em inglês (`title`, `available`), omitido o tratamento de falha de rede ou usado apenas alertas nativos simples do navegador.

- **Que inconsistência a validação encontrou? Estava na spec ou no código?**
  Registrar se algum componente divergiu dos campos do `db.json`, se faltou tratar algum cenário de campo vazio no código ou se a validação confirmou aderência total entre spec e implementação).*

- **Como o framework ajudou (ou atrapalhou) a coordenação do grupo?**
  O OpenSpec ajudou muito na coordenação porque centralizou o contrato de dados, a estrutura obrigatória de pastas (`src/api`, `src/components`, `src/pages`) e a divisão de tarefas dentro de arquivos versionados no GitHub. Isso permitiu que os 7 integrantes trabalhassem em paralelo no OpenCode, cada um em seu arquivo, sem conflitos de merge e sem depender de combinados informais fora do repositório, não houve muitas insatisfações, pois, ele é uma ferramenta mais ágil de se trabalhar.

- **O que fariam diferente com outro framework?**
  Se tivéssemos utilizado o **SpecKit**, teríamos criado uma constituição (`constitution.md`) logo na etapa inicial para travar padrões de código, nomenclatura e regras de lint antes mesmo de especificar a funcionalidade. Já com o **BMAD**, precisaríamos reservar mais tempo para leitura e revisão em grupo, pois ele gera artefatos separados por papéis (analista, PM, arquiteto), o que seria mais complexo de sincronizar entre 7 pessoas em uma entrega rápida, então nesse caso teria um trabalho maior.