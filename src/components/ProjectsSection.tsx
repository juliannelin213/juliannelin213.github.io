import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 md:px-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-base tracking-[0.2em] uppercase text-muted-foreground">Selected work</span>
          <h2 className="text-4xl md:text-5xl mt-2 text-foreground">Projects</h2>
          <p className="text-base text-muted-foreground mt-3">Featured Projects that I have worked on throughout my career.</p>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {PROJECTS.map((project, index) => (
            <article key={project.title} className="group grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 py-10 items-start hover:bg-secondary/20 px-2 -mx-2 transition-colors duration-300">
              <div className="text-sm text-muted-foreground font-light tabular-nums pt-1 min-w-[3rem]">{String(index + 1).padStart(2, "0")}</div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl md:text-2xl text-foreground group-hover:text-foreground/80 transition-colors">{project.title}</h3>
                  <span className="text-base text-muted-foreground">{project.year}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => <span key={tag} className="text-base px-2.5 py-1 bg-secondary text-foreground/70 rounded-sm">{tag}</span>)}
                </div>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`} className="mt-1 text-muted-foreground group-hover:text-foreground transition-colors">
                <ExternalLink size={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
