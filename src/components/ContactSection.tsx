import { ArrowRight, Mail } from "lucide-react";
import { CONTACT_LINKS } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./SocialIcon";

type ContactSectionProps = {
  onOpenResume: () => void;
};

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  const contactLinks = [
    { icon: Mail, label: CONTACT_LINKS.email, href: `mailto:${CONTACT_LINKS.email}` },
    { icon: LinkedinIcon, label: "linkedin.com/in/julianne-lin", href: CONTACT_LINKS.linkedin },
    { icon: GithubIcon, label: "github.com/jlin213", href: CONTACT_LINKS.github },
  ];

  return (
    <section id="contact" className="py-28 px-6 md:px-10 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <span className="text-base tracking-[0.2em] uppercase text-white/50">Let's connect</span>
        <h2 className="text-2xl md:text-4xl text-white leading-snug">
          Have an opportunity or a complex
          <br />
          engineering challenge in mind?
        </h2>
        <p className="text-white/60 text-sm leading-relaxed max-w-sm">
          I'm currently open to full-time roles and impactful technical collaborations. Reach out directly, or take a look at my resume.
        </p>

        <div className="flex flex-col gap-3">
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm group">
              <Icon size={15} className="group-hover:text-accent transition-colors" />
              {label}
            </a>
          ))}
        </div>

        <button onClick={onOpenResume} className="inline-flex items-center justify-center gap-2 bg-accent text-foreground text-sm px-6 py-3 rounded-sm hover:bg-accent/80 transition-colors mt-2 w-fit">
          View resume <ArrowRight size={14} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-white/30 text-base">&copy; {new Date().getFullYear()} Julianne Lin. All rights reserved.</span>
        <span className="text-white/30 text-base">San Jose, CA.</span>
      </div>
    </section>
  );
}
