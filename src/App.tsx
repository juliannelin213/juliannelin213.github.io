import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Mail, ExternalLink, ChevronDown } from "lucide-react";


function GithubIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
} 

function LinkedinIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Experience & Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const EXPERIENCE = [
  {
    company: "Meta",
    location: "Menlo Park, CA",
    role: "Software Engineer, AI Checkout · Web Automation",
    period: "Aug 2022 – Present",
    bullets: [
      "Building a composition system to aggregate, validate, and enforce schema compliance of configuration output from multiple agent runs, improving end-to-end reliability and minimizing accuracy fluctuations.",
      "Lead OBA-3PD Consent Winback initiative — designed and launched user consent experience to 30M eligible users, resulting in a 0.14% increase in incremental revenue.",
      "Built GenAI Transparency consumer experience for Facebook/Instagram Feed on Web reaching 100K daily impressions using React, GraphQL, and TypeScript.",
      "Integrated blocking consent flow with payment as Ad-Free Subscription reaching 340M MAU with 30k+ subscribers in the EU using React, TypeScript, and Bloks.",
      "Contributed to Meta Checkout launch with several merchants including development, merchant onboarding, and reliability initiatives.",
    ],
  },
  {
    company: "Microsoft",
    location: "Redmond, WA",
    role: "Software Engineering Intern, Commerce & Ecosystem Group, Cloud and AI",
    period: "Jun 2021 – Sep 2021",
    bullets: [
      "Implemented onboarding walkthrough experience for the Quotes workspace, orienting users toward various capabilities within the workspace.",
      "Built reusable web components using React, TypeScript, HTML, and CSS leveraged by cross-functional teams with 1000+ engineers.",
      "Wrote supporting documentation for connecting backend API services to send JSON data to the Guided Tour feature and render customized web components.",
    ],
  },
  {
    company: "Coursera",
    location: "Mountain View, CA",
    role: "Software Engineering Intern, Growth-Degrees Team",
    period: "May 2020 – Aug 2020",
    bullets: [
      "Implemented automated visual testing with page snapshots using Percy, Puppeteer, and JavaScript; launched initial CI/CD integration with GitHub Actions.",
      "Improved and simplified an internal tool to browse, edit, and add variants of EOI forms for the marketing team using Retool, JavaScript, and JSON.",
      "Fixed rendering issues of EOI forms and Checklist with GraphQL and React, increasing page traffic and degree interest.",
    ],
  },
];

const SKILLS = [
  { category: "Languages", color: "#f5b8c4", items: ["Java", "Python", "Hack/PHP", "Bloks", "SQL", "NoSQL", "R", "MATLAB"] },
  { category: "Web", color: "#c9a0ab", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Express.js", "Node.js", "jQuery", "Puppeteer", "Bootstrap", "SASS/SCSS"] },
  { category: "Technologies", color: "#a8c5b5", items: ["MongoDB", "GraphQL", "MySQL", "Git", "GitHub Actions", "Retool"] },
];

// Placeholder — swap in real projects later
const PROJECTS = [
  {
    title: "AI Checkout",
    description: "Contributed to the Meta Checkout launch across multiple merchants, building the automation and reliability infrastructure behind AI-assisted shopping experiences on Facebook and Instagram.",
    tags: ["React", "TypeScript", "AI Automation"],
    year: "2025-Current",
    link: "https://techcrunch.com/2026/03/25/meta-turns-to-ai-to-make-shopping-easier-on-instagram-and-facebook/",
  },
  {
    title: "GenAI Transparency for Ads",
    description: "Built the consumer-facing GenAI Transparency experience for Facebook and Instagram Feed on Web, labeling AI-generated content in ads and reaching 100K daily impressions.",
    tags: ["React", "GraphQL", "TypeScript"],
    year: "2025",
    link: "https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/",
  },
  {
    title: "Ad-Free Subscription in EU",
    description: "Integrated a blocking consent flow with payment as an Ad-Free Subscription, reaching 340M monthly active users with 30K+ subscribers across the EU.",
    tags: ["React", "TypeScript", "Bloks"],
    year: "2023",
    link: "https://about.fb.com/news/2024/11/facebook-and-instagram-to-offer-subscription-for-no-ads-in-europe/",
  },
  {
    title: "COVID-19 Live Statistics in Canada",
    description: "A MERN stack web application displaying real-time COVID-19 case counts across Canada and its provinces. Used Node.js to scrape updated daily case data into a MongoDB Atlas cloud database.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    year: "2020",
    link: "#",
  },
];

function useActiveSection() {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return activeId;
}

function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("about")}
          className="font-serif text-xl tracking-tight text-foreground hover:text-accent-foreground transition-colors"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Julianne L.
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  active === id ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-flex items-center gap-2 bg-foreground text-primary-foreground text-sm px-4 py-2 rounded-sm hover:bg-foreground/85 transition-colors"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Say hello <ArrowRight size={14} />
        </button>

        <button className="md:hidden text-foreground p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-foreground text-base py-1 border-b border-border/40 last:border-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="about" className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fce8ec] via-[#fdf4f6] to-[#f8ecf0]" />
      <div
        className="absolute inset-0 -z-10 opacity-25"
        style={{ backgroundImage: "radial-gradient(circle, #c9a0ab 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="absolute top-24 right-0 w-72 h-72 bg-accent/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl -z-10" />

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 max-w-2xl">
        <span className="text-base tracking-[0.22em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Full-Stack Software Engineer
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Hello, I'm
          <br />
          <em className="not-italic">Julianne Lin.</em>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          I build performant, scalable web applications — clean APIs, thoughtful architecture, and interfaces that feel fast. Currently a Software Engineer at Meta.
        </p>

        <div className="flex items-center gap-4 pt-2">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 text-sm rounded-sm hover:bg-foreground/85 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View my work <ArrowRight size={15} />
          </button>
          <div className="flex items-center gap-3">
            <a href="https://github.com/jlin213" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/julianne-lin/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:julianne.lin@alumni.utoronto.ca" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce">
        <ChevronDown size={18} />
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-base tracking-[0.2em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Background
          </span>
          <h2 className="text-4xl md:text-5xl mt-2 text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Experience & Skills
          </h2>
        </div>

        <div className="flex flex-col gap-12 mb-20">
          {EXPERIENCE.map(({ company, location, role, period, bullets }) => (
            <div key={company} className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div className="flex flex-col gap-1 pt-0.5">
                <span className="text-base font-medium text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{company}</span>
                <span className="text-[13px] text-muted-foreground leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>{period}</span>
                <span className="text-[13px] text-muted-foreground leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>{location}</span>
              </div>
              <div>
                <p className="text-base tracking-[0.14em] uppercase text-muted-foreground mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{role}</p>
                <ul className="flex flex-col gap-2.5">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-base text-foreground/80 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border mb-16" />

        <div className="flex flex-col gap-0 divide-y divide-border">
          {SKILLS.map(({ category, color, items }) => (
            <div key={category} className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-12 py-6 items-start">
              <div className="flex items-center gap-2 pt-1">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                <span className="text-[13px] tracking-[0.18em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-border text-[13px] text-foreground/80 rounded-full hover:border-foreground/30 hover:bg-secondary/40 transition-colors duration-200 cursor-default"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 md:px-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-base tracking-[0.2em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Selected work
          </span>
          <h2 className="text-4xl md:text-5xl mt-2 text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Projects
          </h2>
          <p className="text-base text-muted-foreground mt-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Featured Projects that I have worked on throughout my career.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className="group grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 py-10 items-start hover:bg-secondary/20 px-2 -mx-2 transition-colors duration-300 cursor-pointer"
            >
              <div className="text-sm text-muted-foreground font-light tabular-nums pt-1 min-w-[3rem]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl md:text-2xl text-foreground group-hover:text-foreground/80 transition-colors" style={{ fontFamily: "'DM Serif Display', serif" }}>
                    {project.title}
                  </h3>
                  <span className="text-base text-muted-foreground">{project.year}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-base px-2.5 py-1 bg-secondary text-foreground/70 rounded-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a href={project.link} aria-label={`View ${project.title}`} className="mt-1 text-muted-foreground group-hover:text-foreground transition-colors" onClick={(e) => e.stopPropagation()}>
                <ExternalLink size={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-6"
      onClick={onClose}
    >
     <div
  className="bg-white rounded-sm w-full max-w-5xl h-[92vh] relative"
  onClick={(e) => e.stopPropagation()}
>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-foreground/60 hover:text-foreground text-2xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>
        <embed src="/resume.pdf" className="w-full h-full" />
      </div>
    </div>
  );
}

function ContactSection({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <section id="contact" className="py-28 px-6 md:px-10 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <span className="text-base tracking-[0.2em] uppercase text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Let's connect
        </span>
        <h2 className="text-2xl md:text-4xl text-white leading-snug" style={{ fontFamily: "'DM Serif Display', serif" }}>       
          Have an opportunity or a complex 
            <br />
engineering challenge in mind?
        </h2>
        <p className="text-white/60 text-sm leading-relaxed max-w-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          I'm currently open to full-time roles and impactful technical collaborations. Reach out directly, or take a look at my resume.
        </p>

        <div className="flex flex-col gap-3">
          {[
            { icon: Mail, label: "julianne.lin@alumni.utoronto.ca", href: "mailto:julianne.lin@alumni.utoronto.ca" },
            { icon: LinkedinIcon, label: "linkedin.com/in/julianne-lin", href: "https://www.linkedin.com/in/julianne-lin/" },
            { icon: GithubIcon, label: "github.com/jlin213", href: "https://github.com/jlin213" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm group"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Icon size={15} className="group-hover:text-accent transition-colors" />
              {label}
            </a>
          ))}
        </div>

        <button
          onClick={onOpenResume}
          className="inline-flex items-center justify-center gap-2 bg-accent text-foreground text-sm px-6 py-3 rounded-sm hover:bg-accent/80 transition-colors mt-2 w-fit"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          View resume <ArrowRight size={14} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-white/30 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          &copy; {new Date().getFullYear()} Julianne Lin. All rights reserved.
        </span>
        <span className="text-white/30 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          San Jose, CA.
        </span>
      </div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}