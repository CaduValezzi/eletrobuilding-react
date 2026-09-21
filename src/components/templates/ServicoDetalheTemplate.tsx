import { Header } from "@/components/organisms/Header";
import { ServiceDetailBody } from "@/components/organisms/ServiceDetailBody";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { Footer } from "@/components/organisms/Footer";
import type { Service } from "@/lib/content";

export function ServicoDetalheTemplate({ service }: { service: Service }) {
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
