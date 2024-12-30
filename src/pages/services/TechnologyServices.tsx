import { Navigation } from "@/components/Navigation";

const TechnologyServices = () => {
  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-olive mb-6">Finance and Accounting Technology</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            We help businesses leverage the latest technology to improve the efficiency of their finance function and reduce costs.
          </p>

          <h2 className="text-2xl font-serif text-olive mt-8 mb-4">Technology Solutions</h2>
          <ul className="list-disc pl-6">
            <li>Selection and Implementation of Accounting Software</li>
            <li>Automation of Lease Processes</li>
            <li>Automating Budgets and Cashflow Forecasts</li>
            <li>Digital Ledger Controls</li>
            <li>Automating Crypto Tax Calculations</li>
            <li>Digital Asset Proof of Reserves Automation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologyServices;