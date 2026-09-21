import { Header } from "@/components/organisms/Header";
import { PageHero } from "@/components/organisms/PageHero";
import { ServicesListing } from "@/components/organisms/ServicesListing";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { Footer } from "@/components/organisms/Footer";

export function ServicosTemplate() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Nossos Serviços"
          title="Engenharia elétrica para cada etapa da sua instalação"
          description="Seis frentes de atuação, do projeto à manutenção, para indústria, comércio e residência. Escolha um serviço para ver o que está incluído."
        />
        <ServicesListing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
