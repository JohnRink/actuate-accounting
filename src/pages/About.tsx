import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-sand">
      <Navigation />
      <div className="container mx-auto py-16 px-4">
        {/* About Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-serif text-olive mb-8">About Actuate Accounting Outsourcing</h1>
          <div className="space-y-6 text-olive-dark">
            <p className="leading-relaxed">
              At Actuate, we are redefining what it means to deliver exceptional financial solutions. Led by qualified Chartered Accountants from the South African Institute of Chartered Accountants (SAICA) – one of the most trusted and globally respected accounting bodies – we provide premium-quality accounting services at a fraction of the cost.
            </p>
            <p className="leading-relaxed">
              Operating 100% virtually, we support businesses across multiple time zones with seamless collaboration and tailored services that drive measurable results. From startups to multinational corporations, we are your strategic partners in achieving financial clarity and operational efficiency.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20 bg-sand-light p-8 rounded-3xl">
          <h2 className="text-3xl font-serif text-olive mb-6">Our Mission</h2>
          <div className="space-y-6 text-olive-dark">
            <p className="leading-relaxed">
              Our mission is to be the trusted financial partner businesses rely on to navigate the complexities of financial reporting and compliance. We are committed to building strong, collaborative relationships founded on trust, confidentiality, and professionalism.
            </p>
            <p className="leading-relaxed">
              With integrity and ethical conduct at the core of our values, we uphold the highest standards of transparency, fairness, and honesty in every interaction. Clients can count on us for unbiased guidance that protects their interests while aligning with their goals.
            </p>
            <p className="leading-relaxed">
              As a forward-thinking company, we embrace the latest technological advancements to streamline processes and provide innovative, cost-effective solutions. Whether you're a startup navigating uncharted waters or an established business seeking new insights, we are here to help you succeed.
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
                Gain the speed and flexibility to understand the "why" behind your financials, keep executives informed, and avoid the cost of additional headcount. With our team of former Big 4 auditors, we reduce the risk of errors, manage external auditor requests, and ensure seamless audit processes—so you can focus on what matters most.
              </p>
            </div>
            <div className="bg-sand-light p-8 rounded-3xl">
              <h3 className="text-2xl font-serif text-olive mb-4">Audit Firms</h3>
              <p className="text-olive-dark leading-relaxed">
                Facing a busy season and tight deadlines? Partnering with Actuate is like having an expert team on demand. Our Big 4-trained auditors can handle SOX compliance control testing, substantive audit procedures, and audit work reviews.
              </p>
              <p className="text-olive-dark leading-relaxed mt-4">
                We ensure accurate financial statements, compliance with GAAP, preparation of misstatement schedules, and audit reports. From presenting results to clients to finalizing engagements, we give you the time and confidence to meet your deadlines seamlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Actuate Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-olive mb-6">Why Choose Actuate?</h2>
          <ul className="space-y-4 text-olive-dark">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-semibold">Access to Top-Tier Talent: </span>
                Reduce employment costs by up to 85% with South African professionals trained to the highest standards.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-semibold">Direct Support from Founders: </span>
                Benefit from hands-on guidance and easy issue resolution with our involved leadership team.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-semibold">Flexible Time Zone Coverage: </span>
                Receive in-day and out-of-day support tailored to your time zones in the USA, UK, and beyond.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-semibold">Multi-Skilled Professionals: </span>
                Leverage expertise that goes beyond traditional accounting roles for deeper insights and solutions.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-semibold">Excellent Communication: </span>
                Collaborate seamlessly with professionals fluent in English, ensuring clarity and understanding at every stage.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-semibold">No Long-Term Contracts: </span>
                Enjoy flexibility with easy exit arrangements, providing peace of mind as you begin working with us.
              </div>
            </li>
          </ul>
        </section>

        {/* Our Approach Section */}
        <section className="mb-20 bg-sand-light p-8 rounded-3xl">
          <h2 className="text-3xl font-serif text-olive mb-6">Our Approach</h2>
          <p className="text-olive-dark leading-relaxed">
            We go beyond the traditional role of accountants by embracing innovation and a client-centric mindset. With cutting-edge tools and methodologies, we deliver actionable insights, minimize risks, and help you achieve your financial goals.
          </p>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-serif text-olive mb-6">Contact Us</h2>
          <p className="text-olive-dark mb-8">
            Ready to streamline your accounting processes and drive results? Get in touch with us today for a free consultation and discover how Actuate can transform your financial operations.
          </p>
          <Link to="/contact">
            <Button className="bg-olive hover:bg-olive-light text-sand">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;