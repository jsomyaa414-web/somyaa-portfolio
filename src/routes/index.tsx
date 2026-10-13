import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Somya Jaiswal — CS Student Portfolio" },
      { name: "description", content: "Portfolio of Somya Jaiswal, B.Tech Computer Science (Core) student at JECRC University." },
      { property: "og:title", content: "Somya Jaiswal — CS Student Portfolio" },
      { property: "og:description", content: "Projects, skills and contact for Somya Jaiswal, JECRC University." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const nav = ["home", "about", "education", "skills", "projects", "certifications", "contact"];

const skills = [
  { group: "Programming Languages", items: [["C", 80], ["C++", 75], ["Python", 70], ["Java", 60]] },
  { group: "Web Development", items: [["HTML", 85], ["CSS", 75], ["JavaScript", 65]] },
  { group: "Tools", items: [["Git", 70], ["GitHub", 75], ["VS Code", 85]] },
] as const;

const projects = [
  { title: "Portfolio Website", desc: "A responsive personal site showcasing my skills, projects and contact info.", tags: ["HTML", "CSS", "JavaScript"] },
  { title: "Calculator", desc: "A clean calculator supporting arithmetic operations with keyboard input.", tags: ["JavaScript", "CSS"] },
  { title: "Student Management System", desc: "Add, search, update and delete student records with file-based storage.", tags: ["C++", "OOP"] },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">
        <span className="text-primary">/</span> {title}
      </h2>
      {children}
    </section>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold text-primary">SJ.</a>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n}`} className="text-sm capitalize text-muted-foreground transition hover:text-primary">{n}</a>
            ))}
          </nav>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-3 border-t px-6 py-4 md:hidden">
            {nav.map((n) => (
              <a key={n} href={`#${n}`} onClick={() => setOpen(false)} className="capitalize">{n}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="hero-bg relative overflow-hidden">
        <div className="blob left-[-6rem] top-10 h-72 w-72" />
        <div className="blob blob-delay bottom-0 right-[-4rem] h-96 w-96" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-24">
          <p className="fade-up mb-4 font-medium text-primary">Hello, I'm</p>
          <h1 className="fade-up fade-1 text-5xl font-extrabold tracking-tight md:text-7xl">Somya Jaiswal</h1>
          <p className="fade-up fade-2 mt-4 text-xl text-muted-foreground md:text-2xl">B.Tech Computer Science (Core) · JECRC University</p>
          <p className="fade-up fade-3 mt-6 max-w-xl text-muted-foreground">
            A curious first-year developer who loves programming, web development and AI — turning ideas into working software.
          </p>
          <div className="fade-up fade-3 mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5">View Projects</a>
            <a href="#contact" className="rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">Contact Me</a>
          </div>
        </div>
      </section>

      <Section id="about" title="About Me">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I am a first-year B.Tech Computer Science (Core) student at JECRC University. I am passionate about programming,
          web development, artificial intelligence and learning new technologies. I enjoy solving problems and building
          creative software projects.
        </p>
      </Section>

      <Section id="education" title="Education">
        <div className="card-ui border-l-4 border-l-primary">
          <h3 className="text-xl font-bold">B.Tech Computer Science (Core)</h3>
          <p className="mt-1 text-primary">JECRC University</p>
          <p className="mt-2 text-sm text-muted-foreground">1st Semester · Currently pursuing</p>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className="card-ui">
              <h3 className="mb-5 font-bold">{g.group}</h3>
              <div className="space-y-4">
                {g.items.map(([name, v]) => (
                  <div key={name}>
                    <div className="mb-1 flex justify-between text-sm"><span>{name}</span><span className="text-muted-foreground">{v}%</span></div>
                    <div className="h-2 rounded-full bg-muted">
                      <div className="bar h-2 rounded-full bg-gradient-primary" style={{ width: `${v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="card-ui group transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-4 h-32 rounded-lg bg-gradient-primary opacity-90" />
              <h3 className="text-lg font-bold group-hover:text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/40 bg-secondary/50 p-10 text-center">
              <div className="mb-3 text-4xl">🏅</div>
              <p className="font-semibold">Certification Coming Soon</p>
              <p className="mt-1 text-sm text-muted-foreground">Currently learning & earning</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {[["✉️", "Email", "somya@example.com"], ["📞", "Phone", "+91 00000 00000"], ["📍", "Location", "Jaipur, Rajasthan, India"]].map(([i, l, v]) => (
              <div key={l} className="card-ui flex items-center gap-4">
                <span className="text-2xl">{i}</span>
                <div><p className="text-sm text-muted-foreground">{l}</p><p className="font-medium">{v}</p></div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg bg-primary px-5 py-2 text-primary-foreground">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border-2 border-primary px-5 py-2 text-primary">LinkedIn</a>
            </div>
          </div>
          <form onSubmit={submit} className="card-ui space-y-4">
            <input required placeholder="Your name" className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
            <input required type="email" placeholder="Your email" className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
            <textarea required rows={5} placeholder="Your message" className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
            <button className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground">Send Message</button>
            {sent && <p className="text-center text-sm text-primary">Thanks! Your message has been noted.</p>}
          </form>
        </div>
      </Section>

      <footer className="bg-primary py-8 text-center text-primary-foreground">
        <p>© 2026 Somya Jaiswal · Built with passion at JECRC University</p>
      </footer>
    </div>
  );
}
