import {
  ActivitySection,
  CertificationsSection,
  HeroSection,
  ProjectsSection,
  ResearchSection,
} from "./_components/portfolio-sections";

export default function Home() {
  return (
    <main className="relative overflow-hidden text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      <HeroSection />
      <CertificationsSection />
      <ActivitySection />
      <ProjectsSection />
      <ResearchSection />
    </main>
  );
}
