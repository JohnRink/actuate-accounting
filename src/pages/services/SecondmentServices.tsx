import { Navigation } from "@/components/Navigation";

const SecondmentServices = () => {
  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-olive mb-6">Finance Function Support Secondment</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            We offer back-office accounting and compliance management for companies of all sizes. Our services are adaptable to provide full outsourced solutions, interim support during busy periods, short-term cover, month-end support, or specific technical assistance.
          </p>

          <h2 className="text-2xl font-serif text-olive mt-8 mb-4">Our Secondment Services</h2>
          <ul className="list-disc pl-6">
            <li>Accounts Payable Management</li>
            <li>Accounts Receivable Management</li>
            <li>General Ledger Maintenance</li>
            <li>Bank Reconciliation</li>
            <li>Payroll Processing</li>
            <li>Financial Statement Preparation</li>
            <li>Budgeting and Forecasting</li>
            <li>Management Reporting</li>
            <li>Cost Accounting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondmentServices;