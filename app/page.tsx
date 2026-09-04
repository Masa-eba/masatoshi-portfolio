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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <HeroSection />
      <CertificationsSection />
      <ActivitySection />
      <ProjectsSection />
      <ResearchSection />
    </main>
  );
}
