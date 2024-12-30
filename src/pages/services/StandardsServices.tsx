import { Navigation } from "@/components/Navigation";

const StandardsServices = () => {
  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-olive mb-6">New Accounting Standards Adoption and Restatement Services</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Adopting new accounting standards or restating financial statements due to misapplications of GAAP, audit investigations, or corporate realignments can be complicated. Our team helps your company navigate these transitions efficiently.
          </p>

          <h2 className="text-2xl font-serif text-olive mt-8 mb-4">Our Services Include</h2>
          <ul className="list-disc pl-6">
            <li>Consolidation Adjustments</li>
            <li>Fair Value Measurement</li>
            <li>Expected Credit Loss (ECL) Calculations</li>
            <li>Impairment Testing</li>
            <li>Lease Accounting</li>
            <li>Revenue Recognition Analysis</li>
            <li>Business Combination Accounting</li>
            <li>Hedge Accounting Analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StandardsServices;