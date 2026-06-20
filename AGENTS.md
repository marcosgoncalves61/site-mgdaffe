# AGENTS.md — SITE MG-DAFFE

## Projeto

Este repositório é o projeto `site-mgdaffe`, destinado ao site institucional público da MG-DAFFE Mecânicos Automotivos.

Diretório oficial:

C:\Users\Marcos Gonçalves\OneDrive\Projetos\site-mgdaffe

Domínio institucional previsto:

mgdaffe.com.br

Portal operacional preservado:

portal.mgdaffe.com.br

## Regra absoluta de separação

Este projeto NÃO é o Portal operacional.

É proibido ler, alterar, refatorar, copiar, mover, importar ou executar qualquer ação sobre:

C:\Users\Marcos Gonçalves\OneDrive\Projetos\PORTAL_MGDAFFE

C:\Users\Marcos Gonçalves\OneDrive\Projetos\PORTAL_MGDAFFE\01_APP_DESKTOP\portal-mgdaffe-app

O Portal operacional `portal-mgdaffe-app` deve permanecer totalmente preservado.

## Papel do Codex neste projeto

O Codex é executor técnico sob comando fechado.

O Codex não decide arquitetura geral, identidade final, deploy, domínio, banco, Supabase, permissões ou regras estratégicas.

Toda tarefa deve ser executada com escopo delimitado, arquivos autorizados e relatório final objetivo.

## Proibições

Não alterar o Portal MGDAFFE.

Não alterar Supabase.

Não criar migrations.

Não alterar Auth, RLS, RPCs, views, grants ou permissões.

Não mexer em DNS.

Não mexer em Vercel sem autorização expressa.

Não criar, editar ou expor `.env`.

Não instalar dependências sem autorização expressa.

Não fazer commit.

Não fazer push.

Não varrer o projeto inteiro sem autorização.

Não alterar arquivos fora do escopo recebido.

## Metodologia obrigatória

Uma fase.

Uma causa.

Poucos arquivos.

Diagnóstico primeiro.

Alteração depois.

Build após alteração relevante.

Relatório final informando:

1. Arquivos analisados.
2. Arquivos alterados.
3. Correção aplicada.
4. Confirmação de que não alterou o Portal.
5. Confirmação de que não alterou Supabase, DNS, Vercel, .env, commit ou push.
6. Resultado ou recomendação de build.
7. Riscos remanescentes.
8. Próximo passo recomendado.

## Comando padrão de validação

Sempre que recomendar build, usar:

Set-Location "C:\Users\Marcos Gonçalves\OneDrive\Projetos\site-mgdaffe"

npm run build

## Identidade visual

A identidade visual deve seguir a linha institucional MG-DAFFE:

- azul meia-noite;
- fundo escuro premium;
- verde neon;
- laranja neon para CTA;
- azul claro neon para destaque técnico;
- branco gelo;
- cinza metálico;
- estética automotiva moderna, confiável e sofisticada.

## Escopo atual

Fase 01 — Fundação Visual e Institucional.

Objetivo: construir a base visual, responsiva, institucional e publicável do site público da MG-DAFFE, mantendo o Portal operacional totalmente separado.