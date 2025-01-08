export const Hero = () => {
  return (
    <div className="bg-olive min-h-[600px] flex items-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-sand-light text-5xl font-serif mb-6 leading-tight">
            Technology and remote working are revolutionizing the accounting landscape
          </h1>
          <p className="text-sand text-lg mb-8">
            Traditional paradigms are being redefined by innovative technology, bringing unprecedented efficiency and access to expertise on a global scale. At Actuate, we embrace this transformation by offering flexible, cost-effective solutions at a fraction of the cost of permanent in-country staff
          </p>
          <div className="flex justify-center">
            <a 
              href="https://calendly.com/rilinde-nkhumeleni/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-sand-light text-olive px-8 py-3 rounded hover:bg-sand transition-colors">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};