import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-sand">
      <Navigation />
      <div className="container mx-auto py-16 px-4">
        {/* About Our Company Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-serif text-olive mb-8">About Our Company</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-olive-dark leading-relaxed">
                Led by qualified Chartered Accountants from the South African Institute of Chartered Accountants (SAICA) – recognized globally as one of the most trusted and respected accounting bodies – we deliver top-tier financial solutions at a fraction of the cost. Operating 100% virtually, we support businesses across multiple time zones, ensuring seamless collaboration and tailored accounting services that drive results.
              </p>
              <p className="text-olive-dark leading-relaxed">
                With a focus on accuracy, reliability, and innovation, we go beyond the traditional role of accountants. We are your partners in success, offering affordable, all-inclusive online accounting services that meet your unique business needs.
              </p>
            </div>
            <div className="bg-sand-light p-8 rounded-3xl">
              <img
                src="/lovable-uploads/fbb2adb5-1cf5-4ec3-98bb-a65134ce25d4.png"
                alt="Our technology partners and integrations"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Our Objective Section */}
        <section className="mb-20 bg-sand-light p-8 rounded-3xl">
          <h2 className="text-3xl font-serif text-olive mb-6">Our Objective</h2>
          <div className="space-y-6 text-olive-dark">
            <p className="leading-relaxed">
              Our mission is to be the trusted partner our clients rely on to navigate the complex financial reporting landscape at a reasonable cost. We are committed to building strong, collaborative relationships founded on trust, confidentiality, and professionalism.
            </p>
            <p className="leading-relaxed">
              At the heart of our values lies integrity and ethical conduct. We uphold the highest standards of honesty, transparency, and fairness in every interaction. Clients can count on us for objective, unbiased guidance that protects their interests.
            </p>
            <p className="leading-relaxed">
              As a forward-thinking company, we embrace technological advancements and continuously invest in cutting-edge solutions. We are passionate about helping businesses succeed. Our flexible approach allows us to adapt to evolving client requirements, ensuring you stay on track to achieve your goals while reducing costs.
            </p>
            <p className="leading-relaxed">
              Whether you're a startup navigating uncharted waters or an established company seeking fresh insights, we are your trusted partner in financial excellence.
            </p>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-olive mb-8">Who We Serve</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-sand-light p-8 rounded-3xl">
              <h3 className="text-2xl font-serif text-olive mb-4">Accounting and Finance Teams</h3>
              <p className="text-olive-dark leading-relaxed">
                Your time is valuable—don't waste it copying, pasting, and assembling data. Outsource your end-to-end financial reporting process to Actuate, where we double-check your numbers, update analyses and commentary, and deliver polished presentations just in time for your board meetings.
              </p>
              <p className="text-olive-dark leading-relaxed mt-4">
                Gain the speed and flexibility to understand the "why" behind your financials, keep executives informed, and avoid the cost of additional headcount. With our team of former Big 4 auditors, we reduce the risk of errors, manage external auditor requests, and ensure seamless audit processes so you can focus on key operational tasks.
              </p>
            </div>
            <div className="bg-sand-light p-8 rounded-3xl">
              <h3 className="text-2xl font-serif text-olive mb-4">Audit Firms</h3>
              <p className="text-olive-dark leading-relaxed">
                Facing a busy season and tight deadlines? Partnering with Actuate Accounting Outsourcing is like having a dream team at your fingertips. Our Big 4-trained auditors can handle SOX compliance control testing, substantive audit procedures, and work reviews.
              </p>
              <p className="text-olive-dark leading-relaxed mt-4">
                We ensure accurate financial statements, compliance with GAAP, preparation of misstatement schedules, and audit reports. Additionally, we present results to clients and finalize engagements, giving you more time to meet deadlines confidently.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-3xl font-serif text-olive mb-6">Benefits of Working with Us</h2>
          <ul className="space-y-4 text-olive-dark">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Access to top-tier talent: Reduce your employment costs by up to 85% with South African professionals.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Direct support from founders: Enjoy easy issue resolution with hands-on guidance.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Flexible time zone coverage: Receive in-day and out-of-day support across the USA and UK.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Superior talent: Leverage multi-skilled professionals with expertise beyond what is commonly available elsewhere.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Excellent communication: South Africa's strong English proficiency ensures seamless collaboration.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>No long-term contracts: Easy exit arrangements provide confidence in starting with Actuate.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;