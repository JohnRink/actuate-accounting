import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Financial Controller Services",
    description: "Comprehensive financial leadership and oversight for your business operations.",
    price: "from $12/h",
    link: "/services/controlling"
  },
  {
    title: "Fractional Financial Controller Services",
    description: "Part-time financial expertise tailored to your business needs.",
    price: "from $10/h",
    link: "/services/controlling"
  },
  {
    title: "Finance Function Support",
    description: "Comprehensive support for your finance operations and processes.",
    price: "from $10/h",
    link: "/services/secondment"
  },
  {
    title: "Audit Firm Support",
    description: "Professional assistance for audit processes and compliance.",
    price: "from $15/h",
    link: "/services/audit-support"
  },
  {
    title: "Gen AI and Accounting Technologies",
    description: "Cutting-edge AI solutions for modern accounting challenges.",
    price: "from $20/h",
    link: "/services/technology"
  },
  {
    title: "Crypto Accounting Advisory",
    description: "Expert guidance in digital asset accounting and compliance.",
    price: "from $25/h",
    link: "/services/technology"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-olive text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-sand-light">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-olive">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-olive-dark mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-olive">{service.price}</p>
              </CardContent>
              <CardFooter>
                <Link to={service.link} className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};