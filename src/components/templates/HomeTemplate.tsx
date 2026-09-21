import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { AboutTeaser } from "@/components/organisms/AboutTeaser";
import { ServicesTeaser } from "@/components/organisms/ServicesTeaser";
import { Process } from "@/components/organisms/Process";
import { Benefits } from "@/components/organisms/Benefits";
import { ArticlesTeaser } from "@/components/organisms/ArticlesTeaser";
import { Faq } from "@/components/organisms/Faq";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { Footer } from "@/components/organisms/Footer";

export function HomeTemplate() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutTeaser />
        <ServicesTeaser />
        <Process />
        <Benefits />
        <ArticlesTeaser />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
