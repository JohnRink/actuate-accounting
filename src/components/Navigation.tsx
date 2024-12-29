import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="bg-olive px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-sand-light text-2xl font-serif">
        Actuate
      </Link>
      <div className="flex items-center space-x-8">
        <Link to="/services" className="text-sand-light hover:text-sand">
          Services
        </Link>
        <Link to="/about" className="text-sand-light hover:text-sand">
          About
        </Link>
        <Link to="/contact" className="text-sand-light hover:text-sand">
          Contact
        </Link>
        <Link to="/blog" className="text-sand-light hover:text-sand">
          Blog
        </Link>
        <div className="flex items-center space-x-4">
          <a 
            href="https://calendly.com/rilinde-nkhumeleni/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-sand-light text-olive hover:bg-sand">
              Book now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};