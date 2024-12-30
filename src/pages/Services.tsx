import { Navigation } from "@/components/Navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-olive mb-8">Our Services</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Finance Team Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-olive text-sand px-4 py-2 rounded-md flex items-center gap-2">
              Services - For Finance Team
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuItem>
                <Link to="/services/controlling" className="w-full">
                  Controlling Services
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/statutory" className="w-full">
                  Statutory Financial Statement Preparation
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/standards" className="w-full">
                  New Accounting Standards Adoption
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/secondment" className="w-full">
                  Finance Function Support Secondment
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/technology" className="w-full">
                  Finance and Accounting Technology
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/training" className="w-full">
                  Financial Training
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Audit Teams Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-olive text-sand px-4 py-2 rounded-md flex items-center gap-2">
              Services - For Audit Teams
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuItem>
                <Link to="/services/audit-support" className="w-full">
                  Audit Support Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Services;