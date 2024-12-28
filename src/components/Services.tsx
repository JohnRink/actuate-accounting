import { DetailedServiceCard } from "./DetailedServiceCard";

const services = [
  {
    title: "Financial Controller Services",
    description: "Comprehensive financial leadership and oversight for your business operations.",
    details: [
      "Preparation of monthly/quarterly financial statements (P&L, Balance Sheet, Cash Flow)",
      "Conducting financial variance analysis (Budget vs. Actual)",
      "Managing the month-end and year-end closing process",
      "Developing and overseeing budgeting and forecasting models",
      "Ensuring tax compliance and preparing tax filings",
      "Managing cash flow, optimizing working capital, and performing cash flow forecasting",
      "Supervising and training finance team members",
      "Conducting internal financial audits to assess and improve control systems",
      "Ensuring compliance with IFRS, US GAAP, or UK GAAP",
      "Providing financial analysis and strategic insights to senior management",
      "Liaising with external auditors during annual audits",
      "Developing and implementing internal control processes"
    ]
  },
  {
    title: "Fractional Financial Controller Services",
    description: "Part-time financial expertise tailored to your business needs.",
    details: [
      "Providing part-time financial controller leadership and oversight",
      "Managing and reviewing financial performance on a periodic basis",
      "Developing budget and forecast models on an as-needed basis",
      "Preparing monthly/quarterly financial reporting for management",
      "Managing cash flow and ensuring financial health of the business",
      "Overseeing complex transactions and providing strategic advice",
      "Ensuring timely and accurate compliance with accounting standards",
      "Advising on strategic decisions, such as capital expenditure or expansion plans",
      "Providing financial strategy to support business growth and risk management",
      "Assisting with financial system implementation or upgrades",
      "Offering ad-hoc support for special projects (e.g., mergers or acquisitions)"
    ]
  },
  {
    title: "Finance Function Support",
    description: "Comprehensive support for your finance operations and processes.",
    details: [
      "Streamlining and improving financial accounting processes",
      "Supporting the finance team with account reconciliations",
      "Implementing financial systems to automate routine tasks",
      "Preparing and reviewing monthly financial reports",
      "Supporting CFOs or financial leadership with strategy formulation",
      "Developing and maintaining accounting policies and procedures",
      "Identifying inefficiencies in the finance function and implementing improvements",
      "Supporting compliance with financial regulations (e.g., SOX, GDPR)",
      "Conducting ad-hoc financial analysis for decision-making support",
      "Assisting with financial forecasting and budgeting processes",
      "Supporting financial close and reporting cycles",
      "Assisting with the integration of finance software and tools"
    ]
  },
  {
    title: "Audit Firm Support",
    description: "Professional assistance for audit processes and compliance.",
    details: [
      "Providing technical accounting support for audit teams",
      "Preparing financial statements in compliance with IFRS, UK GAAP, or US GAAP",
      "Leading and supervising audit teams during engagement processes",
      "Conducting risk assessments to inform audit planning and scope",
      "Reviewing audit working papers and providing second-level reviews",
      "Liaising with clients to ensure smooth audit execution",
      "Providing insights into the interpretation of complex financial data",
      "Assisting in managing audit timelines and resource allocation",
      "Coordinating multi-location audits for large or international clients",
      "Identifying areas for improvement in the audit process and implementing best practices",
      "Ensuring audit-ready financial statements and supporting documentation",
      "Assisting in preparing responses to audit queries and resolving issues"
    ]
  },
  {
    title: "Gen AI and Accounting Technologies",
    description: "Cutting-edge AI solutions for modern accounting challenges.",
    details: [
      "Implementing AI-based tools for automating accounting tasks",
      "Developing financial forecasting models using machine learning",
      "Enhancing financial reporting through data visualization and AI-based insights",
      "Integrating AI-driven software to detect anomalies and potential fraud",
      "Optimizing accounting workflows using AI-powered automation tools",
      "Supporting the implementation of ERP systems to handle complex financial data",
      "Utilizing AI for advanced budgeting, forecasting, and scenario planning",
      "Providing training on AI and accounting technology adoption",
      "Developing customized dashboards for real-time financial monitoring",
      "Implementing and optimizing data analytics tools like Power BI or Tableau",
      "Analyzing business data to identify cost savings opportunities",
      "Helping clients stay compliant with AI regulations and standards"
    ]
  },
  {
    title: "Crypto Accounting Advisory",
    description: "Expert guidance in digital asset accounting and compliance.",
    details: [
      "Advising on tax implications of cryptocurrency transactions",
      "Providing guidance on financial reporting for digital assets",
      "Valuing cryptocurrency assets in accordance with applicable standards",
      "Assisting with the consolidation of financial statements",
      "Developing internal controls for managing crypto transactions",
      "Conducting audit-ready reporting for cryptocurrency businesses",
      "Offering advice on integrating blockchain technologies",
      "Guiding clients through regulatory changes affecting cryptocurrency",
      "Helping businesses with crypto-based investments",
      "Advising on crypto liquidity, hedging strategies, and risk management",
      "Supporting businesses with reporting digital assets",
      "Providing technical memos on cryptocurrency-related queries"
    ]
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-olive text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <DetailedServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};