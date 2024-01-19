import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components";
import { Skills } from "@/components";
// import { Contactme } from "@/components";
// import { Footer } from "@/components";
export const Portfolio = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Skills />
    </div>
  );
};
