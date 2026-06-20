# DECISÃO 0001 — Funções, Responsabilidades e Ambientes Codex

## Projeto

Site Institucional MG-DAFFE  
Repositório: `site-mgdaffe`  
Diretório oficial:

`C:\Users\Marcos Gonçalves\OneDrive\Projetos\site-mgdaffe`

## Data da decisão

20/06/2026

## Contexto

Durante a Fase 01 — Fundação Visual e Institucional do Site MG-DAFFE, foi criado um ambiente próprio para o projeto `site-mgdaffe`, separado do Portal operacional MGDAFFE.

O Portal MGDAFFE já utiliza Codex em seu próprio repositório operacional. A partir desta decisão, fica formalmente definido que o Site MG-DAFFE também poderá utilizar Codex, porém em ambiente totalmente separado, com regras próprias, diretório próprio e governança própria.

## Decisão

Ficam definidos dois ambientes Codex independentes:

### 1. Codex do Portal MGDAFFE

Uso exclusivo para o Portal operacional interno.

Diretório:

`C:\Users\Marcos Gonçalves\OneDrive\Projetos\PORTAL_MGDAFFE\01_APP_DESKTOP\portal-mgdaffe-app`

Finalidade:

- Correções do sistema operacional interno.
- Ordens de serviço.
- Financeiro.
- Clientes.
- Veículos.
- Permissões.
- Fluxos internos da oficina.
- Supabase vinculado ao Portal, quando expressamente autorizado.
- Regras de produção do Portal.

Este ambiente não deve ser usado para alterações no site institucional público.

### 2. Codex do Site MG-DAFFE

Uso exclusivo para o site institucional público.

Diretório:

`C:\Users\Marcos Gonçalves\OneDrive\Projetos\site-mgdaffe`

Finalidade:

- Site institucional público.
- Identidade visual.
- Páginas institucionais.
- Componentes do site.
- Conteúdo público.
- Layout responsivo.
- SEO institucional.
- Deploy futuro do site público, quando autorizado.
- Governança própria via `AGENTS.md`.

Este ambiente não deve ser usado para alterações no Portal operacional.

## Arquivos de abertura controlada

### Site MG-DAFFE

Arquivo para abrir o servidor local do site:

`Abrir_NPM_Site_MGDAFFE.bat`

Arquivo para abrir o Codex do site:

`Abrir_Codex_Site_MGDAFFE.bat`

Esses arquivos devem permanecer dentro do repositório `site-mgdaffe`.

## Separação obrigatória

É proibido misturar os ambientes.

O Codex do Site MG-DAFFE não deve ler, alterar, refatorar, copiar, mover ou executar comandos no Portal MGDAFFE.

O Codex do Portal MGDAFFE não deve alterar o site institucional sem autorização expressa e troca consciente de diretório.

Antes de qualquer uso do Codex, deve-se confirmar visualmente o diretório atual.

## Função de cada agente

### Marcos Gonçalves da Silva

Responsável por:

- decisão final;
- validação institucional;
- homologação visual;
- aprovação de fases;
- autorização para merge;
- autorização para deploy;
- definição de prioridade;
- proteção estratégica do Portal e do Site.

### ChatGPT

Responsável por:

- arquitetura de trabalho;
- diagnóstico;
- planejamento;
- documentação;
- criação de comandos fechados;
- orientação segura do PowerShell;
- revisão de riscos;
- organização das fases;
- preparação de instruções para Codex;
- preservação da metodologia de segurança.

O ChatGPT não deve presumir execução. Deve orientar um comando por vez quando o trabalho for operacional.

### Codex

Responsável por:

- execução técnica sob comando fechado;
- alteração de arquivos autorizados;
- análise limitada ao escopo;
- correções localizadas;
- relatório técnico objetivo;
- respeito ao `AGENTS.md` do projeto aberto.

O Codex não decide sozinho:

- arquitetura;
- escopo;
- deploy;
- banco;
- permissões;
- Supabase;
- DNS;
- Vercel;
- commits;
- pushes.

### PowerShell

Responsável por:

- execução rastreável de comandos;
- abertura do diretório correto;
- build;
- status;
- Git;
- criação de arquivos locais autorizados;
- validação de ambiente.

Todo comando do Site MG-DAFFE deve iniciar com:

`Set-Location "C:\Users\Marcos Gonçalves\OneDrive\Projetos\site-mgdaffe"`

### Git e GitHub

Responsáveis por:

- versionamento;
- rastreabilidade;
- branches;
- commits;
- Pull Requests;
- revisão;
- merge controlado;
- histórico auditável.

Nenhuma fase deve ser considerada concluída sem:

- build aprovado;
- status limpo;
- PR revisado quando aplicável;
- merge consciente;
- sincronização local pós-merge.

## Regras permanentes

1. O Site MG-DAFFE e o Portal MGDAFFE são projetos diferentes.
2. O Portal operacional não pode ser afetado por alterações do site.
3. O Site institucional não deve herdar complexidade operacional do Portal.
4. Codex deve sempre ser aberto no diretório correto.
5. `AGENTS.md` local define regras do projeto aberto.
6. ChatGPT gera comando fechado.
7. Marcos homologa.
8. Git registra.
9. Build valida.
10. Merge só ocorre com consciência do escopo.

## Estado após esta decisão

A Fase 01 do Site MG-DAFFE possui:

- fundação visual inicial;
- Home institucional;
- metadados básicos;
- identidade visual global;
- `AGENTS.md` próprio;
- `.bat` para NPM;
- `.bat` para Codex;
- separação formal em relação ao Portal MGDAFFE.

## Conclusão

Fica oficialmente registrado que o Codex do Site MG-DAFFE é um ambiente novo, separado e independente.

A criação do Codex do Site MG-DAFFE não remove, não substitui, não altera e não prejudica o Codex já utilizado no Portal MGDAFFE.

Cada projeto deve ser aberto, operado, validado e versionado em seu próprio diretório.