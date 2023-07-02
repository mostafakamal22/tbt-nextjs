import Stripe from "stripe";
import ServiceCard from "./ServiceCard";

interface ServicesGridProps {
  services: Stripe.Product[];
  prices: Stripe.Price[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, prices }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} prices={prices} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
