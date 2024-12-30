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
          <ul className="space-y-4">
            <li className="flex flex-col">
              <span className="font-semibold">Consolidation Adjustments</span>
              <p className="text-sm text-olive-dark">Expert assistance in preparing and reviewing consolidation entries, eliminating intercompany transactions, and ensuring proper treatment of minority interests and foreign currency translations.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Fair Value Measurement</span>
              <p className="text-sm text-olive-dark">Comprehensive support in determining fair values for financial instruments, business combinations, and asset impairment testing, ensuring compliance with IFRS 13 and ASC 820.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Expected Credit Loss (ECL) Calculations</span>
              <p className="text-sm text-olive-dark">Implementation of IFRS 9 and ASC 326 requirements for credit loss estimation, including development of forward-looking models and scenario analysis.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Impairment Testing</span>
              <p className="text-sm text-olive-dark">Thorough analysis and documentation of asset impairment tests, including goodwill and other intangible assets, following IAS 36 and ASC 350/360 guidelines.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Lease Accounting</span>
              <p className="text-sm text-olive-dark">Support in implementing IFRS 16 and ASC 842, including lease identification, classification, measurement, and disclosure requirements.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Revenue Recognition Analysis</span>
              <p className="text-sm text-olive-dark">Assistance in applying IFRS 15 and ASC 606, including contract review, performance obligation identification, and transaction price allocation.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Business Combination Accounting</span>
              <p className="text-sm text-olive-dark">Support in applying IFRS 3 and ASC 805, including purchase price allocation, identification and valuation of intangible assets, and goodwill calculation.</p>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Hedge Accounting Analysis</span>
              <p className="text-sm text-olive-dark">Guidance on hedge accounting requirements under IFRS 9 and ASC 815, including effectiveness testing and documentation requirements.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StandardsServices;