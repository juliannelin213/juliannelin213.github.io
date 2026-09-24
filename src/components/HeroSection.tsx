import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { CONTACT_LINKS } from "../data/portfolio";
import { scrollToSection } from "../utils/scrollToSection";
import { GithubIcon, LinkedinIcon } from "./SocialIcon";

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fce8ec] via-[#fdf4f6] to-[#f8ecf0]" />
      <div className="absolute inset-0 -z-10 opacity-25" style={{ backgroundImage: "radial-gradient(circle, #c9a0ab 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute top-24 right-0 w-72 h-72 bg-accent/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl -z-10" />

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 max-w-2xl">
        <span className="text-base tracking-[0.22em] uppercase text-muted-foreground">Full-Stack Software Engineer</span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight text-foreground">
          Hello, I'm
          <br />
          <em className="not-italic">Julianne Lin.</em>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
          I build performant, scalable web applications — clean APIs, thoughtful architecture, and interfaces that feel fast. Currently a Software Engineer at Meta.
        </p>

        <div className="flex items-center gap-4 pt-2">
          <button onClick={() => scrollToSection("projects")} className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 text-sm rounded-sm hover:bg-foreground/85 transition-colors">
            View my work <ArrowRight size={15} />
          </button>
          <div className="flex items-center gap-3">
            <a href={CONTACT_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors"><GithubIcon size={20} /></a>
            <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors"><LinkedinIcon size={20} /></a>
            <a href={`mailto:${CONTACT_LINKS.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce">
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
