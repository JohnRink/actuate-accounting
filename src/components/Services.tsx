import { useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

export const Services = () => {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <p className="text-olive italic text-center mb-6">Only pay for the hours you use, click Book Now for a free consultation</p>
        <h2 className="text-4xl font-serif text-olive text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              isOpen={openService === service.title}
              onOpenChange={() => setOpenService(openService === service.title ? null : service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};