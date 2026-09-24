import { useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResumeModal } from "./components/ResumeModal";
import { SkillsSection } from "./components/SkillsSection";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
