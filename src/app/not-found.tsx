import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Button } from "@/components/atoms/Button";
import { Eyebrow } from "@/components/atoms/Eyebrow";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center bg-graphite-950 pt-32">
        <div className="container-edge text-center">
          <Eyebrow className="mb-6 block">Erro 404</Eyebrow>
          <h1 className="font-display text-6xl font-semibold uppercase tracking-tight text-foam md:text-7xl">
            Página não encontrada
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">
            O conteúdo que você procura não existe ou foi movido. Volte para o início ou fale com
            a nossa equipe.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/">Voltar ao início</Button>
            <Button href="/contato" variant="ghost">
              Fale conosco
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
