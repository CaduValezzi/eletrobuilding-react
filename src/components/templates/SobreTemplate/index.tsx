import { Header } from "@/components/organisms/Header";
import { PageHero } from "@/components/organisms/PageHero";
import { AboutStory } from "@/components/organisms/AboutStory";
import { DirectorProfile } from "@/components/organisms/DirectorProfile";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { Footer } from "@/components/organisms/Footer";
import { aboutPage } from "@/lib/content";

export function SobreTemplate() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow={aboutPage.eyebrow} title={aboutPage.title} />
        <AboutStory />
        <DirectorProfile />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
