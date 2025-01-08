import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-olive text-sand-light text-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Actuate */}
          <div>
            <h3 className="font-serif text-lg mb-3">Actuate</h3>
            <p className="text-sand opacity-90 leading-relaxed">
              Actuate specializes in providing outsourced, South African-based accounting, finance, and Web3 accounting services to clients in Australia, the US, Canada, the UK, and New Zealand.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-serif text-lg mb-3">Location</h3>
            <p className="text-sand opacity-90">
              Cape Town, Western Cape, South Africa
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-3">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@actuate.com" className="text-sand opacity-90 hover:opacity-100">
                  info@actuate.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+447500021326" className="text-sand opacity-90 hover:opacity-100">
                  +447500021326
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-lg mb-3">Quick Links</h3>
            <div className="space-y-2">
              <div>
                <Link to="/" className="text-sand opacity-90 hover:opacity-100">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/privacy-policy" className="text-sand opacity-90 hover:opacity-100">
                  Privacy Policy
                </Link>
              </div>
              <div>
                <a 
                  href="https://calendly.com/rilinde-nkhumeleni/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sand opacity-90 hover:opacity-100"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};