import type { Metadata } from "next";
import { ServicosTemplate } from "@/components/templates/ServicosTemplate";

export const metadata: Metadata = {
  title: "Serviços | Eletro Building",
  description:
    "Conheça os serviços de engenharia elétrica, segurança do trabalho, energia solar, segurança eletrônica, manutenção e redes da Eletro Building.",
};

export default function ServicosPage() {
  return <ServicosTemplate />;
}
