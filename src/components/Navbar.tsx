import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/scrollToSection";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_LINKS.map(({ id }) => id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button onClick={() => navigateTo("about")} className="font-serif text-xl tracking-tight text-foreground hover:text-accent-foreground transition-colors">
          Julianne L.
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button onClick={() => navigateTo(id)} className={`text-sm tracking-wide transition-colors duration-200 ${active === id ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => navigateTo("contact")} className="hidden md:inline-flex items-center gap-2 bg-foreground text-primary-foreground text-sm px-4 py-2 rounded-sm hover:bg-foreground/85 transition-colors">
          Say hello <ArrowRight size={14} />
        </button>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-white border-b border-border px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => navigateTo(id)} className="text-left text-foreground text-base py-1 border-b border-border/40 last:border-0">
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
