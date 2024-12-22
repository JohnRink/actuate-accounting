import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Financial Controller Services",
    description: "Expert financial leadership and oversight for your business operations.",
    image: "/placeholder.svg",
    link: "/services/financial-controller",
  },
  {
    title: "Fractional Financial Controller Services",
    description: "Part-time financial expertise tailored to your needs.",
    image: "/placeholder.svg",
    link: "/services/fractional-controller",
  },
  {
    title: "Finance Function Support",
    description: "Comprehensive support for your finance operations.",
    image: "/placeholder.svg",
    link: "/services/finance-support",
  },
  {
    title: "Audit Firm Support",
    description: "Professional assistance for audit processes and compliance.",
    image: "/placeholder.svg",
    link: "/services/audit-support",
  },
  {
    title: "Gen AI and Accounting Technologies",
    description: "Cutting-edge AI solutions for modern accounting challenges.",
    image: "/placeholder.svg",
    link: "/services/gen-ai",
  },
  {
    title: "Crypto Accounting Advisory",
    description: "Expert guidance in digital asset accounting and compliance.",
    image: "/placeholder.svg",
    link: "/services/crypto",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-olive text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};