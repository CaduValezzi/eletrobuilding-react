import { Header } from "@/components/organisms/Header";
import { PageHero } from "@/components/organisms/PageHero";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";

export function ContatoTemplate() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contato"
          title="Vamos falar sobre o seu projeto"
          description="Preencha o formulário abaixo e nossa equipe retorna com uma resposta técnica em até 1 dia útil."
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
