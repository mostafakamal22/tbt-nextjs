"use client";
import { useState, useEffect } from "react";
import Stripe from "stripe";
import ServiceCard from "./ServiceCard";
import { useSearchParams } from "next/navigation";
import Modal from "./Modal";
import SuccessMsg from "./SuccessMsg";
import ErrorMsg from "./ErrorMsg";

interface ServicesGridProps {
  services: Stripe.Product[];
  prices: Stripe.Price[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, prices }) => {
  const [isOpen, setIsOpen] = useState(false);
  const query = useSearchParams();
  const successPayemnt = query.get("success");
  const cancelledPayemnt = query.get("canceled");

  const onChange = (open: boolean) => {
    if (!open) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (successPayemnt || cancelledPayemnt) {
      setIsOpen(true);
    }
  }, [successPayemnt, cancelledPayemnt]);

  return (
    <>
      {successPayemnt && (
        <Modal isOpen={isOpen} onChange={onChange}>
          <SuccessMsg
            title="Successful Payment!"
            desc="Your payment has been successful."
          />
        </Modal>
      )}

      {cancelledPayemnt && (
        <Modal isOpen={isOpen} onChange={onChange}>
          <ErrorMsg
            title="Payment Cancelled!"
            desc="Your payment has been cancelled."
          />
        </Modal>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} prices={prices} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesGrid;
