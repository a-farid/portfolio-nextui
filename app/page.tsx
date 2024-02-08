import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default async function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </section>
  );
}
