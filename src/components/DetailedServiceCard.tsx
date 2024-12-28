import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceDetail {
  title: string;
  items: string[];
}

interface DetailedServiceCardProps {
  title: string;
  description: string;
  details: string[];
}

export const DetailedServiceCard = ({
  title,
  description,
  details,
}: DetailedServiceCardProps) => {
  return (
    <div className="bg-sand-light p-6 rounded-lg transition-all hover:shadow-lg">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details" className="border-none">
          <div className="mb-4">
            <h3 className="text-2xl font-serif text-olive mb-2">{title}</h3>
            <p className="text-olive-dark mb-4">{description}</p>
          </div>
          <AccordionTrigger className="text-olive hover:text-olive-dark">
            <span className="flex items-center gap-2">
              View Details
              <ChevronDown className="h-4 w-4" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2 text-olive-dark">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};