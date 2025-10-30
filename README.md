# NEXA - Soluções Digitais (Landing Page)

Landing page profissional desenvolvida para a **NEXA - Soluções Digitais**, a marca de Breno Robin para serviços de desenvolvimento web. O site é projetado para capturar leads, mostrar portfólio e detalhar os serviços oferecidos.

Este projeto foi construído do zero usando Vite, React, TypeScript e shadcn/ui.

## 🚀 Seções da Página

A landing page é uma "single page application" (SPA) com navegação por scroll, dividida nas seguintes seções:

* **Início (Hero):** Seção principal com imagem de fundo e chamada para ação (CTA).
* **Planos:** Apresentação dos pacotes de serviços com preços promocionais.
* **Sobre:** Apresentação do desenvolvedor Breno Robin, sua formação e jornada.
* **Projetos:** Galeria de portfólio com links para projetos concluídos.
* **Processo:** Detalhamento do processo de trabalho em etapas.
* **Depoimentos:** Prova social com feedback de clientes.
* **Dúvidas (FAQ):** Acordeão com perguntas frequentes.
* **Contato (CTA):** Seção final com informações de contato e formulário para envio de mensagem via WhatsApp.
* **Rodapé:** Links de navegação e informações de contato.

## ✨ Funcionalidades

* **Modo Claro e Escuro:** Alternância de tema com `next-themes`.
* **Totalmente Responsivo:** Design adaptável para desktop, tablets e dispositivos móveis (ex: `md:grid-cols-2`, `sm:text-xl`).
* **Formulário de Contato:** Validação com `zod` e `react-hook-form` que gera um link `wa.me` personalizado.
* **Consentimento de Cookies (LGPD):** Banner de consentimento que controla o uso de cookies funcionais (para o toast proativo e estado do sidebar).
* **Toast Proativo:** Notificação `sonner` que aparece após um tempo para engajar o usuário.
* **Otimizado para SEO & Redes Sociais:** Meta tags (Open Graph, Twitter Cards) e `favicon` configurados no `index.html`.

## 🛠️ Tecnologias Utilizadas

* **Vite:** Build tool.
* **React:** Biblioteca principal.
* **TypeScript:** Superset do JavaScript.
* **Tailwind CSS:** Framework de estilização.
* **shadcn/ui:** Coleção de componentes (usados como base).
* **react-hook-form / zod:** Para validação de formulários.
* **sonner:** Para notificações (toasts).
* **next-themes:** Para alternância de tema claro/escuro.