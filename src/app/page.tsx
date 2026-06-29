import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import AboutSection from "@/components/home/AboutSection";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ApplicationsSection />
      <CTASection />
    </>
  );
}
