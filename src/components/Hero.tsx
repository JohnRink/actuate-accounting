export const Hero = () => {
  return (
    <div className="bg-olive min-h-[600px] flex items-center">
      <div className="container mx-auto grid grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-sand-light text-5xl font-serif mb-6 leading-tight">
            Technology and service work are revolutionizing the accounting landscape
          </h1>
          <p className="text-sand text-lg mb-8">
            Traditional paradigms are being redefined by innovative technology, bringing
            unprecedented efficiency and accuracy to financial operations. At Actuate,
            we embrace this evolution.
          </p>
          <div className="flex space-x-4">
            <button className="bg-sand-light text-olive px-8 py-3 rounded hover:bg-sand transition-colors">
              Get Started
            </button>
            <button className="border border-sand-light text-sand-light px-8 py-3 rounded hover:bg-olive-light transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/lovable-uploads/b6f8cf94-3a39-40dd-b803-93fe2a280bdc.png"
            alt="Modern office desk"
            className="w-full h-[400px] object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};