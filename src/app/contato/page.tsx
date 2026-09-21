import type { Metadata } from "next";
import { ContatoTemplate } from "@/components/templates/ContatoTemplate";

export const metadata: Metadata = {
  title: "Contato | Eletro Building",
  description:
    "Fale com a Eletro Building. Envie seus dados e o escopo do seu projeto e receba um retorno técnico em até 1 dia útil.",
};

export default function ContatoPage() {
  return <ContatoTemplate />;
}
