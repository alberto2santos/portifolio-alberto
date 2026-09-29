import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ProjectCard from "./components/ProjectCard";
import { useReveal } from "./hooks/useReveal";
import { skillGroups, projects, contact } from "./data";

export default function App() {
  const year = new Date().getFullYear();
  const about = useReveal<HTMLDivElement>();
  const skills = useReveal<HTMLDivElement>();
  const xp = useReveal<HTMLDivElement>();

  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <Header />

      <main id="main">
        <div id="top" />
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">Desenvolvedor Front-End</p>
              <h1>Alberto Luiz constrói interfaces que traduzem processos industriais em decisões rápidas.</h1>
              <p className="lede">
                Front-End com experiência profissional em React, TypeScript e no ecossistema VTEX IO. Venho do
                chão de fábrica e hoje construo dashboards e ferramentas que dão clareza a operações complexas.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#projetos">
                  Ver projetos
                </a>
                <a className="btn btn-ghost" href="#contato">
                  Fale comigo
                </a>
                <a className="btn btn-whats" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="hero-photo-col">
              <img
                className="hero-photo"
                src="/foto-alberto.webp"
                width={280}
                height={280}
                alt="Alberto Luiz, desenvolvedor Front-End, em ambiente de trabalho"
              />
              <div className="panel">
                <div className="status-row">
                  <span className="dot" /> DISPONÍVEL PARA NOVOS PROJETOS
                </div>
                <div className="stat">
                  <span>Foco</span>
                  <b>React · TypeScript</b>
                </div>
                <div className="stat">
                  <span>Local</span>
                  <b>Itaboraí, RJ</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="alt">
          <div className="wrap">
            <div className="section-head">
              <h2>Sobre</h2>
            </div>
            <div
              ref={about.ref}
              className={`about-body reveal reveal-left ${about.visible ? "visible" : ""}`}
            >
              <p>
                Atuo profissionalmente com desenvolvimento e manutenção de aplicações web e e-commerce no
                ecossistema <strong>VTEX IO</strong>, integrações via API e automação de processos internos.
                Minha trajetória não é linear: venho do chão de fábrica — metalúrgica e naval — e do marketing,
                e hoje uno essa visão de negócio a código para criar soluções reais.
              </p>
              <p>
                Tenho formação técnica em <strong>Automação Industrial</strong>, o que me ajuda a entender a
                lógica de processos complexos e traduzi-la em interfaces limpas e funcionais.
              </p>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <h2>Skills técnicas</h2>
              <p>As ferramentas que uso no dia a dia, em produção e em projetos próprios.</p>
            </div>
            <div
              ref={skills.ref}
              className={`skill-groups reveal reveal-right ${skills.visible ? "visible" : ""}`}
            >
              {skillGroups.map((g) => (
                <div className="skill-group" key={g.title}>
                  <h3>{g.title}</h3>
                  <ul className="chips">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="alt">
          <div className="wrap">
            <div className="section-head">
              <h2>Projetos em destaque</h2>
              <p>Projetos próprios, do problema real à interface final.</p>
            </div>
            <div className="projects">
              {projects.map((p, i) => (
                <ProjectCard p={p} side={i % 2 === 0 ? "left" : "right"} key={p.title} />
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia">
          <div className="wrap">
            <div className="section-head">
              <h2>Experiência</h2>
            </div>
            <div
              ref={xp.ref}
              className={`xp-item reveal reveal-left ${xp.visible ? "visible" : ""}`}
            >
              <div className="xp-role">Analista Júnior II — Bisturi Material Hospitalar</div>
              <div className="xp-meta">Setembro/2021 a Janeiro/2026</div>
              <ul>
                <li>Desenvolvimento e manutenção de soluções de e-commerce no ecossistema VTEX IO.</li>
                <li>Integrações via API e consolidação de dados com ERP (TOTVS/Winthor).</li>
                <li>Dashboards internos e automações que reduziram tarefas manuais da equipe.</li>
              </ul>
            </div>
            <ul className="edu-list">
              <li>Pós-Graduação em Desenvolvimento Front-End — Anhanguera</li>
              <li>Técnico em Automação Industrial — CPET</li>
            </ul>
          </div>
        </section>

        <section id="contato" className="alt">
          <div className="wrap contato-grid">
            <div>
              <div className="section-head">
                <h2>Contato</h2>
                <p>Aberto a oportunidades de Front-End Júnior, remoto ou no Rio de Janeiro.</p>
              </div>
              <div className="contact-links">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href={contact.linkedin}>LinkedIn</a>
                <a href={contact.github}>GitHub</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="wrap">
        <p className="fine">© {year} Alberto Luiz dos Santos Peixoto.</p>
      </footer>
    </>
  );
}