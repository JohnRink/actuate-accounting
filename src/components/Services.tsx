import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Financial Controller Services",
    description: "Expert financial leadership and strategic oversight to drive your business forward.",
    price: "from $12/h",
    link: "/services/controlling",
    features: [
      "Full-cycle financial management",
      "Strategic planning and analysis",
      "Risk management and compliance",
      "Performance optimization"
    ]
  },
  {
    title: "Fractional Financial Controller Services",
    description: "Flexible, scalable financial expertise tailored to your business needs.",
    price: "from $10/h",
    link: "/services/controlling",
    features: [
      "Part-time financial leadership",
      "Cost-effective solutions",
      "Scalable support",
      "Expert guidance"
    ]
  },
  {
    title: "Finance Function Support",
    description: "Comprehensive support for your finance operations and processes.",
    price: "from $10/h",
    link: "/services/secondment",
    features: [
      "Process optimization",
      "Team augmentation",
      "Technical expertise",
      "Operational support"
    ]
  },
  {
    title: "Audit Firm Support",
    description: "Professional assistance for audit processes and compliance.",
    price: "from $15/h",
    link: "/services/audit-support",
    features: [
      "Audit preparation",
      "Documentation support",
      "Quality assurance",
      "Risk assessment"
    ]
  },
  {
    title: "Gen AI and Accounting Technologies",
    description: "Innovative AI solutions for modern accounting challenges.",
    price: "from $20/h",
    link: "/services/technology",
    features: [
      "AI implementation",
      "Process automation",
      "Digital transformation",
      "Technology consulting"
    ]
  },
  {
    title: "Crypto Accounting Advisory",
    description: "Specialized guidance in digital asset accounting and compliance.",
    price: "from $25/h",
    link: "/services/technology",
    features: [
      "Crypto compliance",
      "Digital asset management",
      "Regulatory guidance",
      "Risk mitigation"
    ]
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif text-olive mb-4">Our Services</h2>
          <p className="text-olive-dark text-lg">
            Comprehensive financial and accounting solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-sand-light border-olive/10 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif text-olive">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-olive-dark mb-4">{service.description}</p>
                <p className="text-2xl font-semibold text-olive mb-6">{service.price}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-olive-dark">
                      <ArrowRight className="h-5 w-5 mr-2 text-olive flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="w-full block">
                  <Button 
                    variant="outline" 
                    className="w-full bg-olive text-sand hover:bg-olive-light transition-colors"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};