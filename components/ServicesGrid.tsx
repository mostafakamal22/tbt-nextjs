"use client";
import { useEffect } from "react";
import Stripe from "stripe";
import ServiceCard from "./ServiceCard";
import { useSearchParams } from "next/navigation";
import SuccessMsg from "./SuccessMsg";
import ErrorMsg from "./ErrorMsg";
import useModal from "@/hooks/useModal";

interface ServicesGridProps {
  services: Stripe.Product[];
  prices: Stripe.Price[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, prices }) => {
  const { setChildren, openModal, setIsFromModal } = useModal();
  const query = useSearchParams();
  const successPayemnt = query.get("success");
  const cancelledPayemnt = query.get("canceled");

  useEffect(() => {
    if (successPayemnt) {
      setIsFromModal(false);

      const successMSG = (
        <SuccessMsg
          title="Successful Payment!"
          desc="Your payment has been successful."
        />
      );
      setChildren(successMSG);
      openModal();
    }

    if (cancelledPayemnt) {
      setIsFromModal(false);

      const errorMSG = (
        <ErrorMsg
          title="Payment Cancelled!"
          desc="Your payment has been cancelled."
        />
      );
      setChildren(errorMSG);
      openModal();
    }
  }, [
    successPayemnt,
    cancelledPayemnt,
    openModal,
    setChildren,
    setIsFromModal,
  ]);

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
