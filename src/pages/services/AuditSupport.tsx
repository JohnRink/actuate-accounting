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
          <ul className="space-y-4">
            <li className="flex flex-col">
              <span className="font-semibold">Audit Planning and Risk Assessment</span>
              <p className="text-sm text-olive-dark">Development of comprehensive audit strategies, including risk assessment procedures, materiality determination, and sampling methodologies aligned with ISA and GAAS requirements.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Internal Control Evaluation and Assurance</span>
              <p className="text-sm text-olive-dark">Assessment of internal control systems, documentation of control processes, and testing of control effectiveness in accordance with ISA 315 and AS 2201.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Facilitation of Audit Fieldwork</span>
              <p className="text-sm text-olive-dark">Coordination and execution of audit procedures, including substantive testing, analytical procedures, and evidence gathering to support audit opinions.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Substantive Audit Execution</span>
              <p className="text-sm text-olive-dark">Performance of detailed testing procedures, including account analysis, confirmation procedures, and cut-off testing to verify financial statement assertions.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Financial Statements Review</span>
              <p className="text-sm text-olive-dark">Comprehensive review of financial statements and disclosures to ensure compliance with applicable accounting standards and regulatory requirements.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Audit Progress Monitoring</span>
              <p className="text-sm text-olive-dark">Regular tracking of audit milestones, identification of potential bottlenecks, and implementation of solutions to maintain audit efficiency.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Resolution of Queries</span>
              <p className="text-sm text-olive-dark">Prompt response to audit queries, coordination with relevant departments, and documentation of resolutions to support audit conclusions.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Audit Engagement Finalization and Closing</span>
              <p className="text-sm text-olive-dark">Support in completing audit documentation, preparing closing memorandums, and ensuring all audit requirements are met for engagement completion.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuditSupport;