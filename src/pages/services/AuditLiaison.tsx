import { Navigation } from "@/components/Navigation";
import { DetailedServiceCard } from "@/components/DetailedServiceCard";

const AuditLiaison = () => {
  const services = [
    {
      title: "Audit Planning Assistance",
      description: "We help coordinate the audit's preparation by providing access to required documentation and systems.",
      details: [
        "Organizing and preparing financial statements",
        "Managing management accounts",
        "Documenting internal control procedures",
        "Scheduling meetings",
        "Coordinating between parties",
        "Ensuring audit team readiness"
      ]
    },
    {
      title: "Interpretation of Financial Data",
      description: "We assist in explaining complex financial data, transactions, accounting policies, and practices to auditors.",
      details: [
        "Ensuring accurate understanding of financial data",
        "Proper assessment of transactions",
        "Verification of audit findings accuracy",
        "Quick response to auditor queries",
        "Coordination with internal departments",
        "Clear communication of complex matters"
      ]
    },
    {
      title: "Audit Process Management",
      description: "We provide comprehensive support throughout the entire audit process.",
      details: [
        "Evidence compilation and organization",
        "Progress monitoring and milestone tracking",
        "Coordination of closing meetings",
        "Response to audit findings",
        "Review of draft financial statements",
        "Facilitation of audit fieldwork",
        "Conflict resolution",
        "Implementation of improvement initiatives"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-olive mb-6">Audit Liaison Services</h1>
        <p className="text-lg text-olive-dark mb-8">
          We offer one-stop support for financial statement audits. We designate an experienced person with strong management 
          and communication skills to act as the audit liaison, the main point of contact between your organization and the 
          external auditors. Our team helps ensure the audit process runs smoothly and efficiently, maintaining independence 
          and reducing costs or delays.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <DetailedServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              details={service.details}
            />
          ))}
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif text-olive mb-4">Our Commitment</h2>
          <p className="text-olive-dark mb-4">
            We ensure the confidentiality of sensitive information throughout the audit process and maintain 
            professionalism in all communications with auditors. Our goal is to ensure that the audit runs 
            smoothly and that your organization's relationship with the external auditors remains positive 
            and productive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuditLiaison;