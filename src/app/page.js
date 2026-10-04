import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import WhatIDoSection from "@/components/home/WhatIDoSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import JourneySection from "@/components/home/JourneySection";
import InterestsSection from "@/components/home/InterestsSection";
import NowSection from "@/components/home/NowSection";
import ContactSection from "@/components/home/ContactSection";
import LearningSection from "@/components/home/LearningSection";
import ToolsSection from "@/components/home/ToolsSection";

import siteInfo from "@/data/siteInfo";
import { createPageMetadata } from "@/utils/pageMetadata";

export const metadata = createPageMetadata({
  title: `${siteInfo.name} | Personal Website`,
  description: siteInfo.description,
  path: "/",
  socialTitle: `${siteInfo.name} | Personal Website`,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />

      <ProjectsSection />

      <LearningSection />
      <ToolsSection />

      <JourneySection />
      <InterestsSection />
      <NowSection />
      <ContactSection />
    </>
  );
}