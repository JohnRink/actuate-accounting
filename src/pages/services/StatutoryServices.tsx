import { Navigation } from "@/components/Navigation";

const StatutoryServices = () => {
  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-olive mb-6">Statutory Financial Statement Preparation</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Our specialized team uses industry-leading tools, knowledge, and experience to deliver financial statements efficiently and on schedule, easing the pressure on your tax, finance, and accounting resources.
          </p>

          <h2 className="text-2xl font-serif text-olive mt-8 mb-4">Our Services</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Preparation of statutory financial statements in accordance with US GAAP, FRS 102, FRS 101, IFRS</li>
            <li>Accounts preparation for LLPs, Partnerships, Sole Traders, Trusts, Charities, and Academy Accounts</li>
            <li>iXBRL Submissions using CoreFiling's Seahorse Tagging Software</li>
          </ul>

          <h2 className="text-2xl font-serif text-olive mt-8 mb-4">Audit Liaison Services</h2>
          <ul className="list-disc pl-6">
            <li>Audit Planning Assistance</li>
            <li>Interpretation of Financial Data</li>
            <li>Audit Evidence Compilation</li>
            <li>Audit Progress Monitoring</li>
            <li>Coordination of Closing Meetings</li>
            <li>Response to Audit Findings</li>
            <li>Review of Draft Financial Statements</li>
            <li>Facilitation of Audit Fieldwork</li>
            <li>Conflict Resolution</li>
            <li>Continuous Improvement Initiatives</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatutoryServices;