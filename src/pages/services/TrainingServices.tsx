import { Navigation } from "@/components/Navigation";

const TrainingServices = () => {
  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-olive mb-6">Financial Training</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Providing a bespoke financial training model to fit your business needs, ensuring information is delivered in an efficient manner, and covering the aspects most beneficial to you and your team.
          </p>

          <h2 className="text-2xl font-serif text-olive mt-8 mb-4">Training Topics</h2>
          <ul className="list-disc pl-6">
            <li>Digital Asset Accounting</li>
            <li>Annual Financial Statements</li>
            <li>Budgets, Cash Flows, and Financial Ratios</li>
            <li>Accounting Standards, Principles, and Policies</li>
            <li>Cost-Saving Strategies</li>
            <li>Business Performance Analysis and Recommendations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainingServices;