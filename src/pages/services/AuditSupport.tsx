import { Navigation } from "@/components/Navigation";

const AuditSupport = () => {
  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-olive mb-6">Audit Support Services</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            We provide flexible and scalable audit support services designed to assist your audit team from planning to finalization. Our services are tailored to meet your specific needs, offering a fresh, high-quality approach to managing audit processes across multiple jurisdictions.
          </p>

          <h2 className="text-2xl font-serif text-olive mt-8 mb-4">Our Support Services</h2>
          <ul className="list-disc pl-6">
            <li>Audit Planning and Risk Assessment</li>
            <li>Internal Control Evaluation and Assurance</li>
            <li>Facilitation of Audit Fieldwork</li>
            <li>Substantive Audit Execution</li>
            <li>Financial Statements Review</li>
            <li>Audit Progress Monitoring</li>
            <li>Resolution of Queries</li>
            <li>Audit Engagement Finalization and Closing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuditSupport;