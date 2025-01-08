import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Financial Controller Services",
    description: "This model provides businesses access to high-level financial expertise without requiring a full-time hire, ideal for small to medium-sized businesses or startups with limited resources.\n\n" +
      "• Financial Reporting: Prepares accurate financial statements, including balance sheets, income statements, and cash flow statements.\n" +
      "• Budgeting and Forecasting: Sets budgets, monitors performance, adjusts as needed, and predicts financial outcomes.\n" +
      "• Internal Controls: Establishes and enforces controls to ensure data accuracy, prevent fraud, and safeguard assets.\n" +
      "• Cash Flow Management: Monitors and manages liquidity to meet obligations.\n" +
      "• Financial Process Improvements: Identifies and implements efficiencies for cost savings.\n" +
      "• Accounting System Management: Optimizes accounting systems and implements new tools if needed.\n" +
      "• Income Tax and VAT: Ensures compliance and prepares data for tax filings.\n" +
      "• External Audit Liaison: Acts as the primary contact for external auditors.\n" +
      "• Strategic Planning: Shapes financial strategies and provides actionable insights.\n" +
      "• Team Management: Oversees and trains in-house accounting teams.",
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
                <p className="text-olive-dark mb-4 whitespace-pre-line">{service.description}</p>
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