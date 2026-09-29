import { useReveal } from "../hooks/useReveal";
import type { Project } from "../data";

export default function ProjectCard({ p, side }: { p: Project; side: "left" | "right" }) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`card reveal reveal-${side} ${visible ? "visible" : ""}`}
    >
      {p.image && (
        <div className="card-img-wrap">
          <img
            className="card-img"
            src={p.image}
            alt={`Captura de tela do projeto ${p.title}`}
            width={900}
            height={440}
            loading="lazy"
          />
        </div>
      )}
      <div className="card-body">
        {p.badge && (
          <span className="live-badge">
            <span className="dot" />
            {p.badge}
          </span>
        )}
        <h3>{p.title}</h3>
        <p className="desc">{p.desc}</p>
        <ul className="chips">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="card-links">
          {p.live && <a href={p.live}>Demo ao vivo</a>}
          <a href={p.github}>GitHub</a>
        </div>
      </div>
    </article>
  );
}