import { Service } from "@/types/services";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceDetailsContent } from "./ServiceDetailsContent";

interface ServiceCardProps {
  service: Service;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ServiceCard = ({ service, isOpen, onOpenChange }: ServiceCardProps) => {
  return (
    <Card className="bg-sand-light">
      <CardHeader>
        <CardTitle className="text-xl font-serif text-olive">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-olive-dark mb-4">{service.description}</p>
        <p className="text-lg font-semibold text-olive">{service.price}</p>
      </CardContent>
      <CardFooter className="flex flex-col w-full">
        {service.details ? (
          <Collapsible
            open={isOpen}
            onOpenChange={onOpenChange}
            className="w-full"
          >
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full mb-2">
                Learn More
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ServiceDetailsContent details={service.details} />
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Link to={service.link} className="w-full">
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};