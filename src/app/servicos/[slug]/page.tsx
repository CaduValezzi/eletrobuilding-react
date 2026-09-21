import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/content";
import { ServicoDetalheTemplate } from "@/components/templates/ServicoDetalheTemplate";

type ServicoPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicoPageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return { title: "Serviço não encontrado | Eletro Building" };
  }

  return {
    title: `${service.title} | Eletro Building`,
    description: service.shortDescription,
  };
}

export default function ServicoPage({ params }: ServicoPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServicoDetalheTemplate service={service} />;
}
