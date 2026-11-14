import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Menu,
  X,
  ArrowDown,
  Download,
  Terminal,
  Database,
  Globe,
  GraduationCap,
  Briefcase,
} from "lucide-react";

/* ==============================
   EDIT THESE
============================== */

const EMAIL = "aliyapathan2019@email.com"; // <- double-check this is your real address
const GITHUB = "https://github.com/pathanaliya";
const LINKEDIN = "https://www.linkedin.com/in/pathan-aliya-764282243";
const RESUME = "/Aliya_Pathan_Resume.pdf"; // put the PDF in your /public folder

/* ==============================
   DATA
============================== */

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Globe,
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"],
  },
  {
    title: "Languages & Tools",
    icon: Terminal,
    items: ["Java", "Git", "GitHub", "VS Code"],
  },
];

const projects = [
  {
    title: "Cook's Corner",
    featured: true,
    description:
      "A full-stack MERN recipe platform where users can browse recipes, sign up securely and manage their own content, backed by a REST API and MongoDB.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    demo: "https://cooks-corner-j4wh.vercel.app?_vercel_share=HYngdhGXFdL9lljodL07UzGvNgt6Nl2W",
    github: "https://github.com/pathanaliya/Cooks_Corner.git",
  },
  {
    title: "Image Background Remover",
    description:
      "Upload an image and get a clean, transparent-background version in seconds.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://pathanaliya.github.io/CodeClauseInternship_ImageBackgroundRemover/",
    github: "https://github.com/pathanaliya/CodeClauseInternship_ImageBackgroundRemover.git",
  },
  {
    title: "Face Detection",
    description:
      "Detects faces in images using image processing and facial recognition techniques.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://pathanaliya.github.io/CodeClauseInternship_FaceDetection/",
    github: "https://github.com/pathanaliya/CodeClauseInternship_FaceDetection.git",
  },
  {
    title: "Quick Notes Board",
    description:
      "Create, edit, delete and organise notes on a simple, distraction-free board.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://pathanaliya.github.io/Quick-Notes-Board/",
    github: "https://github.com/pathanaliya/Quick-Notes-Board.git",
  },
  {
    title: "Meditation App",
    description:
      "A calm interface with guided sessions to help you relax and build a mindfulness habit.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://pathanaliya.github.io/Meditation-App/",
    github: "https://github.com/pathanaliya/Meditation-App.git",
  },
];

/* ==============================
   HELPERS
============================== */

// highlights the nav link of the section currently on screen
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navItems.map(([, id]) => id);

function SocialLinks() {
  return (
    <div className="flex gap-3">
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-link">
        <Github size={20} />
      </a>
      <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-link">
        <Linkedin size={20} />
      </a>
      <a href={`mailto:${EMAIL}`} aria-label="Email" className="icon-link">
        <Mail size={20} />
      </a>
    </div>
  );
}

/* ==============================
   APP
============================== */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen">
      {/* ---------- NAVBAR ---------- */}
      <header className="fixed top-0 inset-x-0 z-50 bg-ink/80 backdrop-blur-xl border-b border-white/10">
        <nav className="wrap h-[72px] flex items-center justify-between">
          <a href="#home" className="font-display text-xl font-bold gradient-text">
            Aliya.dev
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === id
                    ? "text-accent bg-accent/10"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-slate-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-panel px-6 py-4 flex flex-col">
            {navItems.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`py-3 ${active === id ? "text-accent" : "text-slate-300"}`}
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ---------- HERO ---------- */}
      <section id="home" className="hero-pad relative overflow-hidden">
        <div className="hero-grid" />

        <div className="wrap relative grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <div
              className="hero-in inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              style={{ animationDelay: "0ms" }}
            >
              <span className="status-dot" />
              Open to internships and entry-level roles
            </div>

            <h1
              className="hero-in mt-7 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08]"
              style={{ animationDelay: "120ms" }}
            >
              Hi, I'm Aliya Pathan.
              <br />
              <span className="gradient-text">I build full-stack web apps.</span>
            </h1>

            <p
              className="hero-in mt-6 text-lg text-slate-400 max-w-xl"
              style={{ animationDelay: "240ms" }}
            >
              I turn ideas into fast, responsive products with React, Node.js and
              MongoDB, from the interface people click to the API behind it.
            </p>

            <div
              className="hero-in flex flex-wrap gap-4 mt-9"
              style={{ animationDelay: "360ms" }}
            >
              <a href="#projects" className="btn btn-primary">
                View my projects
              </a>
              <a href={RESUME} download className="btn btn-ghost">
                <Download size={18} /> Download resume
              </a>
            </div>

            <div className="hero-in mt-10" style={{ animationDelay: "480ms" }}>
              <SocialLinks />
            </div>
          </div>

          {/* code-style profile card */}
          <div className="hero-in" style={{ animationDelay: "300ms" }}>
            <div className="card overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.03]">
                <span className="w-3 h-3 rounded-full bg-rose-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-300/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-slate-500">aliya.js</span>
              </div>
              <pre className="code-panel p-6 overflow-x-auto text-slate-300">
                <code>
                  <span className="text-accent-2">const</span> aliya = {"{"}
                  {"\n"}  role: <span className="text-emerald-300">"Full Stack Developer"</span>,
                  {"\n"}  stack: [
                  <span className="text-emerald-300">"React"</span>,{" "}
                  <span className="text-emerald-300">"Node"</span>,{" "}
                  <span className="text-emerald-300">"MongoDB"</span>],
                  {"\n"}  based: <span className="text-emerald-300">"Pune, India"</span>,
                  {"\n"}  openToWork: <span className="text-amber-300">true</span>,
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="wrap relative mt-16 hidden md:block">
          <a href="#about" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent">
            <ArrowDown size={16} /> Scroll to explore
          </a>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="section-pad bg-panel/60 border-y border-white/5">
        <div className="wrap">
          <h2 className="section-title">About me</h2>
          <p className="section-sub">A bit about how I work and where I learned.</p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="card p-8">
              <Code2 size={40} className="text-accent mb-5" />
              <h3 className="text-2xl font-bold mb-4">Developer who likes finishing things</h3>
              <p className="text-slate-400 leading-8">
                I enjoy building user-friendly web apps end to end: designing
                the interface, wiring up the API and shaping the database. I like
                solving problems, learning new tools quickly and shipping
                projects that people can actually use.
              </p>
              <div className="flex gap-2 flex-wrap mt-6">
                <span className="chip">Problem solving</span>
                <span className="chip">Teamwork</span>
                <span className="chip">Continuous learning</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="card p-6 flex gap-5">
                <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <GraduationCap />
                </div>
                <div>
                  <h3 className="font-bold text-lg">B.E. Computer Engineering</h3>
                  <p className="text-slate-400 text-sm">
                    ISBM College of Engineering, Pune (SPPU)
                  </p>
                  <p className="text-slate-500 text-sm">2021 – 2025</p>
                </div>
              </div>

              <div className="card p-6 flex gap-5">
                <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-accent-2/10 text-accent-2">
                  <Briefcase />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Code Clause internship</h3>
                  <p className="text-slate-400 text-sm">
                    Built the image background remover and face detection projects
                  </p>
                  <p className="text-slate-500 text-sm">January 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section id="skills" className="section-pad">
        <div className="wrap">
          <h2 className="section-title">Technical skills</h2>
          <p className="section-sub">The tools I use to build and ship.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <div key={title} className="card card-hover p-7">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-5">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-5">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="chip chip-lg">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section id="projects" className="section-pad bg-panel/60 border-y border-white/5">
        <div className="wrap">
          <h2 className="section-title">Featured projects</h2>
          <p className="section-sub">
            A mix of full-stack builds and focused front-end tools.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`card card-hover overflow-hidden flex flex-col ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                {/* window bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.03]">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-300/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                  {project.featured && (
                    <span className="ml-auto text-xs font-medium text-accent">
                      Main project
                    </span>
                  )}
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className={`font-bold mb-3 ${project.featured ? "text-2xl" : "text-xl"}`}>
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-7 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 my-6">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5 text-sm font-medium">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent inline-flex items-center gap-2 hover:underline underline-offset-4"
                    >
                      Live demo <ExternalLink size={15} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 inline-flex items-center gap-2 hover:text-white hover:underline underline-offset-4"
                    >
                      GitHub <Github size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="section-pad">
        <div className="wrap">
          <div className="card p-8 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="section-title">Let's build something together</h2>
            <p className="text-slate-400 mt-5 mb-9 max-w-xl mx-auto leading-8">
              I'm open to internships, entry-level roles and interesting
              projects. Send me a message and I'll get back to you.
            </p>

            <a href={`mailto:${EMAIL}`} className="btn btn-primary">
              <Mail size={20} /> Get in touch
            </a>

            <div className="flex justify-center mt-10">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Aliya Pathan. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;