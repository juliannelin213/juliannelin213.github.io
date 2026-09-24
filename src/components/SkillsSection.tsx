import { EXPERIENCE, SKILLS } from "../data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-base tracking-[0.2em] uppercase text-muted-foreground">Background</span>
          <h2 className="text-4xl md:text-5xl mt-2 text-foreground">Experience &amp; Skills</h2>
        </div>

        <div className="flex flex-col gap-12 mb-20">
          {EXPERIENCE.map(({ company, location, role, period, bullets }) => (
            <div key={company} className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div className="flex flex-col gap-1 pt-0.5">
                <span className="text-base font-medium text-foreground">{company}</span>
                <span className="text-[13px] text-muted-foreground leading-snug">{period}</span>
                <span className="text-[13px] text-muted-foreground leading-snug">{location}</span>
              </div>
              <div>
                <p className="text-base tracking-[0.14em] uppercase text-muted-foreground mb-4">{role}</p>
                <ul className="flex flex-col gap-2.5">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-base text-foreground/80 leading-relaxed">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {bullet}
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
                <span className="text-[13px] tracking-[0.18em] uppercase text-muted-foreground">{category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-border text-[13px] text-foreground/80 rounded-full hover:border-foreground/30 hover:bg-secondary/40 transition-colors duration-200 cursor-default">
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
