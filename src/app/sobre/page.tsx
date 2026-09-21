import type { Metadata } from "next";
import { SobreTemplate } from "@/components/templates/SobreTemplate";

export const metadata: Metadata = {
  title: "Sobre nós | Eletro Building",
  description:
    "Conheça a Eletro Building: missão, visão, valores, segmentos atendidos e a direção técnica responsável pelos projetos da empresa.",
};

export default function SobrePage() {
  return <SobreTemplate />;
}
