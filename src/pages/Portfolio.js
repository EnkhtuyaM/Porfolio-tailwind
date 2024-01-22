import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components";
import { Experience } from "@/components/Experience";
import { Work } from "@/components";
import { Contactme } from "@/components/Contactme";
import { Footer } from "@/components/Footer";
export const Portfolio = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contactme />
      <Footer />
    </div>
  );
};
