import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-sand">
      <Navigation />
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-serif text-olive mb-6">Who we are</h2>
              <p className="text-olive-dark text-lg leading-relaxed">
                Get in touch today to discuss how our expert consultants can provide tailored solutions to drive your business forward. Our dedicated team is ready to assist with any inquiries and ensure your consulting needs are met with precision.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-olive mb-6">Benefits of working with us</h2>
              <ul className="space-y-4 text-olive-dark">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access top-tier talent in South Africa and reduce your employment costs by up to 85%</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Easy issue resolution as you work directly with the founders</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>In-day and out of day support across the USA and UK</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>More flexible, multi-skilled, world class talent than available from India</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>English language capability is excellent in South Africa</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No long-term contracts and easy exit arrangement provide you with more confidence to become Actuate client</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Right Column - Decorative Image with seamless integration */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <div className="bg-sand-light/50 p-8 rounded-3xl">
                <img
                  src="/lovable-uploads/2600644c-2133-4913-b34e-c39f3ea2e55d.png"
                  alt="Professional metallic pen"
                  className="w-full h-auto object-cover mix-blend-multiply filter contrast-110 saturate-75 opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;