import { SiteFooter } from "@/components/footer";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { HowWeWorkSection } from "@/components/sections/how-we-work";
import { PortfolioSection } from "@/components/sections/portfolio";
import { SupportSection } from "@/components/sections/support";
import { WhatWeDoSection } from "@/components/sections/what-we-do";
import { WhoWeHelpSection } from "@/components/sections/who-we-help";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <WhatWeDoSection />
      <WhoWeHelpSection />
      <HowWeWorkSection />
      <PortfolioSection />
      <ContactSection />
      <SupportSection />
      <SiteFooter />
    </main>
  );
}
