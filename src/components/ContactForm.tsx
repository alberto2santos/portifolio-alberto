import { useState, FormEvent } from "react";

// Chave gratuita do https://web3forms.com, lida de .env.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      console.error("VITE_WEB3FORMS_KEY não configurada — veja .env.example e o README.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "Novo contato pelo portfólio");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-msg" role="status">
        Mensagem enviada. Retorno o quanto antes — obrigado pelo contato!
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar mensagem"}
      </button>
      {status === "error" && (
        <p className="form-msg form-msg-error" role="alert">
          Não consegui enviar agora. Tente novamente ou fale por e-mail/WhatsApp abaixo.
        </p>
      )}
    </form>
  );
}
