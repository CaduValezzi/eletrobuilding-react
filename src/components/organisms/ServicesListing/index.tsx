import { services } from "@/lib/content";
import { ServiceLinkCard } from "@/components/molecules/ServiceLinkCard";

export function ServicesListing() {
  return (
    <section className="section-pad bg-graphite-950">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} className="bg-graphite-950">
              <ServiceLinkCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
