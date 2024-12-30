import { Navigation } from "@/components/Navigation";

const ControllingServices = () => {
  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-olive mb-6">Controlling Services</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Our Controlling Services enrich and support your controlling team, turning them into a trusted business partner that adds value to your entire organization. We offer a wide range of services to help maximize efficiency and accuracy across your finance department.
          </p>
          
          <h2 className="text-2xl font-serif text-olive mt-8 mb-4">Flexible Staff Positions</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Finance Manager</li>
            <li>Accounting Manager</li>
            <li>Financial Controller</li>
            <li>Digital Asset Accountant</li>
          </ul>

          <h2 className="text-2xl font-serif text-olive mt-8 mb-4">Areas of Expertise</h2>
          <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-2">
            <li>Business Combinations</li>
            <li>Intangible Assets</li>
            <li>Investments in Subsidiaries, Joint Ventures, and Associates</li>
            <li>Impairment of Non-Financial Assets</li>
            <li>Provisions and Contingent Liabilities</li>
            <li>Income Taxes</li>
            <li>Employee Benefits</li>
            <li>Share-Based Payment Compensation</li>
            <li>Discontinued Operations</li>
            <li>Changes in Accounting Policies</li>
            <li>Revenue Recognition</li>
            <li>Payroll</li>
            <li>Bookkeeping, Treasury, and Management Reporting</li>
            <li>Statutory Accounts Preparation</li>
            <li>Direct and Indirect Tax Compliance Services</li>
            <li>Stock Option and Incentives</li>
            <li>Full-Cycle, Complex, Multi-Entity Consolidation and Financial Reporting</li>
            <li>Multi-GAAP Reporting and Statutory Disclosures</li>
            <li>GAAP Adjustments</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ControllingServices;