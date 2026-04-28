import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Work } from "@/components/sections/Work";
import { Pipeline } from "@/components/sections/Pipeline";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Work />
      <TechMarquee />
      <Pipeline />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
