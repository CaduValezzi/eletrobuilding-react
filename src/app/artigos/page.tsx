import type { Metadata } from "next";
import { ArtigosTemplate } from "@/components/templates/ArtigosTemplate";

export const metadata: Metadata = {
  title: "Artigos | Eletro Building",
  description:
    "Artigos sobre engenharia elétrica, segurança do trabalho, energia solar, segurança eletrônica e redes, escritos pela equipe da Eletro Building.",
};

export default function ArtigosPage() {
  return <ArtigosTemplate />;
}
