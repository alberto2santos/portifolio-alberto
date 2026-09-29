<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:0F4761,100:58A6FF&height=140&section=header&text=Portf%C3%B3lio%20%E2%80%94%20Alberto%20Luiz&fontSize=32&fontColor=ffffff&animation=fadeIn)

**Site pessoal de Alberto Luiz — Desenvolvedor Front-End**
Página única, mobile-first, construída com foco em performance, acessibilidade e SEO técnico.

![React](https://img.shields.io/badge/React-18-149ECA?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/Licen%C3%A7a-MIT-3ED8C2?style=for-the-badge)

[**🔗 Ver demo ao vivo**](https://alberto-portifolio.vercel.app) · [Reportar um bug](../../issues)

<!-- Sugestão: depois do deploy, tire um print da página e troque a linha abaixo -->
<!-- ![Preview do portfólio](docs/preview.png) -->

</div>

---

## ✨ Destaques

- **Mobile-first e 100% responsivo** — testado de 320px a telas grandes
- **Tema escuro** com identidade visual própria (inspirada em painéis industriais/HMI, não em template genérico)
- **Animações de scroll-reveal** via `IntersectionObserver`, respeitando `prefers-reduced-motion`
- **Formulário de contato funcional** (Web3Forms — sem backend próprio) + botão direto de WhatsApp
- **SEO técnico**: meta tags completas, Open Graph, dados estruturados `schema.org/Person`, HTML semântico
- **Analytics**: métricas de visitantes e visualizações com Vercel Web Analytics
- **Acessível**: skip-link, foco visível no teclado, contraste AA, `aria-label`s
- **Leve de verdade**: sem biblioteca de UI, CSS puro, imagens em WebP comprimidas
- **Componentizado**: `Header`, `ContactForm` e `ProjectCard` isolados; conteúdo separado da apresentação em `data.ts`

## 🛠️ Stack

| Camada | Tecnologias |
|---|---|
| Front-end | React 18 · TypeScript · Vite |
| Estilo | CSS puro (custom properties, sem framework) |
| Formulário | [Web3Forms](https://web3forms.com) |
| Analytics | [Vercel Web Analytics](https://vercel.com/docs/analytics/quickstart) |
| Deploy | Vercel |

## 📁 Estrutura

```
src/
  main.tsx                # ponto de entrada + Vercel Analytics
  App.tsx                 # composição das seções da página
  components/
    Header.tsx             # navegação + menu mobile
    ProjectCard.tsx         # card de projeto com scroll-reveal
    ContactForm.tsx         # formulário com envio via Web3Forms
  hooks/
    useReveal.ts            # IntersectionObserver reutilizável
  data.ts                  # projetos, skills e contatos (conteúdo)
  styles.css
public/
  foto-alberto.webp
  projects/                # screenshots dos projetos
```

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## ⚙️ Variáveis de ambiente

O formulário de contato precisa de uma chave gratuita do Web3Forms:

```bash
cp .env.example .env
# edite o .env e cole sua chave:
# VITE_WEB3FORMS_KEY=sua_chave_aqui
```

Cadastro gratuito em [web3forms.com](https://web3forms.com) (só pede um e-mail, sem cartão).

## ☁️ Deploy na Vercel

1. Suba este repositório no GitHub.
2. Em [vercel.com](https://vercel.com) → **Add New Project** → importe o repositório (Vite é detectado automaticamente).
3. Em **Project Settings → Environment Variables**, adicione `VITE_WEB3FORMS_KEY` com o mesmo valor do seu `.env`.
4. No painel do projeto, abra **Analytics** e habilite **Web Analytics**.
5. **Faça o deploy** para começar a coletar visualizações e visitas. Os dados aparecem no painel Analytics após as visitas ao site.

## 📬 Contato

- [LinkedIn](https://www.linkedin.com/in/alberto-luiz/)
- [GitHub](https://github.com/alberto2santos)
- alberto.dos.santos93@gmail.com

---

<div align="center">
<sub>Construído por Alberto Luiz dos Santos Peixoto · © 2026</sub>
</div>
