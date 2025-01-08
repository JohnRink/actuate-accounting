import { ServiceDetails } from "@/types/services";

interface ServiceDetailsContentProps {
  details: ServiceDetails;
}

export const ServiceDetailsContent = ({ details }: ServiceDetailsContentProps) => {
  return (
    <div className="mt-2 space-y-2 text-sm text-olive-dark">
      <p className="mb-4 whitespace-pre-line">{details.intro}</p>
      {details.services && (
        <ul className="list-disc pl-4 space-y-2">
          {details.services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {details.schedule && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">{details.schedule.title}</h4>
          <div className="space-y-2">
            {details.schedule.timeSlots.map((slot, index) => (
              <div key={index} className="border-l-2 border-olive pl-4">
                <span className="font-semibold">{slot.time}:</span> {slot.activity}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};