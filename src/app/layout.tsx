import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

// Self-hosted fonts (no runtime dependency on Google Fonts CDN)
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eletro Building | Engenharia Elétrica, Segurança e Energia Solar",
  description:
    "Eletro Building entrega engenharia elétrica, segurança do trabalho, energia solar e segurança eletrônica para os segmentos industrial, comercial e residencial, do laudo à energização.",
  keywords: [
    "engenharia elétrica",
    "energia solar",
    "segurança eletrônica",
    "segurança do trabalho",
    "Intelbras",
    "Eletro Building",
  ],
  openGraph: {
    title: "Eletro Building | Engenharia Elétrica, Segurança e Energia Solar",
    description:
      "Soluções de disponibilidade e conservação de instalações elétricas para os segmentos industrial, comercial e residencial.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
