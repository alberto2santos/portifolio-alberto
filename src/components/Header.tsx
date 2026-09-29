import { useState } from "react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site">
      <nav className="nav" aria-label="Navegação principal">
        <a className="brand" href="#top">
          alberto<span>.</span>dev
        </a>
        <div id="navlinks" className={open ? "open" : ""}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a className="navlink" href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="nav-cta" href="#contato">
          Contato
        </a>
        <button
          className="burger"
          aria-expanded={open}
          aria-controls="navlinks"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
