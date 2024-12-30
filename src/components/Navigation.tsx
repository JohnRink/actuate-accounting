import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  return (
    <nav className="bg-olive px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-sand-light text-2xl font-serif">
        Actuate
      </Link>
      <div className="flex items-center space-x-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sand-light hover:text-sand bg-transparent">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg">
                <div className="grid grid-cols-1 gap-3 p-4 w-[400px]">
                  <h3 className="font-medium mb-2 text-olive">Services - For Finance Team</h3>
                  <Link to="/services/controlling" className="block text-sm hover:text-olive">
                    Controlling Services
                  </Link>
                  <Link to="/services/statutory" className="block text-sm hover:text-olive">
                    Statutory Financial Statement Preparation
                  </Link>
                  <Link to="/services/audit-liaison" className="block text-sm hover:text-olive">
                    Audit Liaison Services
                  </Link>
                  <Link to="/services/standards" className="block text-sm hover:text-olive">
                    New Accounting Standards Adoption
                  </Link>
                  <Link to="/services/secondment" className="block text-sm hover:text-olive">
                    Finance Function Support Secondment
                  </Link>
                  <Link to="/services/technology" className="block text-sm hover:text-olive">
                    Finance and Accounting Technology
                  </Link>
                  <Link to="/services/training" className="block text-sm hover:text-olive">
                    Financial Training
                  </Link>
                  
                  <h3 className="font-medium mt-4 mb-2 text-olive">Services - For Audit Teams</h3>
                  <Link to="/services/audit-support" className="block text-sm hover:text-olive">
                    Audit Support Services
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
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