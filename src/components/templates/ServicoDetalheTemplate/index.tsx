import { Header } from "@/components/organisms/Header";
import { ServiceDetailBody } from "@/components/organisms/ServiceDetailBody";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { Footer } from "@/components/organisms/Footer";
import type { ServicoDetalheTemplateProps } from "./ServicoDetalheTemplate.types";

export function ServicoDetalheTemplate({ service }: ServicoDetalheTemplateProps) {
  return (
    <>
      <Header />
      <main>
        <ServiceDetailBody service={service} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
