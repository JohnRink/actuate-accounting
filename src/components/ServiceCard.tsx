import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
  return (
    <Link to={link} className="group">
      <div className="bg-sand-light p-6 rounded-lg transition-transform transform hover:-translate-y-1">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
        <h3 className="text-olive text-xl font-serif mb-2">{title}</h3>
        <p className="text-olive-dark text-sm">{description}</p>
      </div>
    </Link>
  );
};