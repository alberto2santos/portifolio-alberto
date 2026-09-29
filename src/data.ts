export const skillGroups = [
  { title: "Front-End", items: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS"] },
  { title: "Ecossistema & dados", items: ["Zustand", "TanStack Query", "ECharts", "Zod", "PapaParse"] },
  { title: "Automação & e-commerce", items: ["VTEX IO", "Electron", "Playwright", "Node.js", "Git/GitHub"] },
];

export type Project = {
  title: string;
  desc: string;
  tech: string[];
  live: string | null;
  github: string;
  badge: string | null;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "CSS AI Generator — Animações CSS com IA",
    desc: "Descreve o efeito visual desejado em linguagem natural e recebe CSS funcional na hora. Refinamento por novas instruções, prévia interativa com fundo alternável e histórico local dos designs gerados.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Groq API"],
    live: "https://css-ai-generator-xi.vercel.app/",
    github: "https://github.com/alberto2santos/css-ai-generator",
    badge: "EM PRODUÇÃO",
    image: "/projects/css-ai-generator.webp",
  },
  {
    title: "DanfeGen — Conversor NF-e para DANFE PDF",
    desc: "Converte XML de NF-e em DANFE PDF (A4 e etiqueta térmica 80mm) 100% no navegador, sem enviar dados. PWA instalável, com Functions na Vercel para lote, e-mail e suporte à Reforma Tributária 2026 (IBS/CBS).",
    tech: ["React 19", "TypeScript", "Vite 6", "Zod", "Vercel Functions", "PWA"],
    live: "https://danfe-gen.vercel.app/",
    github: "https://github.com/alberto2santos/danfe-gen",
    badge: "EM PRODUÇÃO",
    image: "/projects/danfe-gen.webp",
  },
  {
    title: "Fênix II — Monitoramento de Soldagem",
    desc: "Dashboard industrial com importação de CSV validada por schema, KPIs automáticos e exportação de relatórios em PDF/PNG via servidor dedicado.",
    tech: ["React 19", "TypeScript", "ECharts", "Playwright"],
    live: "https://fenix-dashboard.vercel.app/",
    github: "https://github.com/alberto2santos/fenix-dashboard",
    badge: "EM PRODUÇÃO",
    image: "/projects/fenix-dashboard.webp",
  },
  {
    title: "Dashboard Industrial — Monitoramento de Sensores",
    desc: "Painel com múltiplas zonas de fábrica, leituras de temperatura/umidade/pressão, alertas configuráveis, exportação CSV e clima externo via Open-Meteo.",
    tech: ["React 18", "Vite", "Zustand", "ApexCharts", "Tailwind"],
    live: "https://dashboard-fabrica.vercel.app/",
    github: "https://github.com/alberto2santos/dashboard-fabrica",
    badge: null,
    image: "/projects/dashboard-fabrica.webp",
  },
  {
    title: "VTEX Update Tracking",
    desc: "App desktop que automatiza a atualização de tracking de pedidos na VTEX, com processamento em lote e modo de simulação.",
    tech: ["Electron", "React", "Node.js"],
    live: null,
    github: "https://github.com/alberto2santos/update-tracking-batch",
    badge: null,
  },
  {
    title: "Simulador de Painel Elétrico",
    desc: "Interface homem-máquina que simula o acionamento de motores elétricos, com lógica de automação fiel ao painel real.",
    tech: ["JavaScript", "CSS3", "Automação"],
    live: "https://simulador-painel-eletrico.vercel.app/",
    github: "https://github.com/alberto2santos/simulador-painel-eletrico",
    badge: null,
    image: "/projects/simulador-painel.webp",
  },
];

export const contact = {
  email: "alberto.dos.santos93@gmail.com",
  linkedin: "https://www.linkedin.com/in/alberto-luiz/",
  github: "https://github.com/alberto2santos",
  whatsapp: "https://wa.me/5521970341173?text=Ol%C3%A1%20Alberto%2C%20vi%20seu%20portf%C3%B3lio!",
};