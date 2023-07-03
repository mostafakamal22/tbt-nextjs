"use client";
import { findAndFormatPrice } from "@/helpers/findAndFormatPrice";
import { postData } from "@/helpers/postData";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Stripe from "stripe";
import Modal from "./Modal";
import ErrorMsg from "./ErrorMsg";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface ServiceCardProps {
  service: Stripe.Product;
  prices: Stripe.Price[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, prices }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const servicePrice = service?.default_price
    ? findAndFormatPrice(service?.default_price?.toString(), prices)
    : null;

  if (!servicePrice) return null;

  const handleSubmit = async () => {
    try {
      const sessionURL = await postData({
        url: "/api/services",
        data: { price: service?.default_price?.toString() ?? "", quantity: 1 },
      });

      router.push(sessionURL);
    } catch (error) {
      console.log((error as Error).message);
      setIsOpen(true);
    }
  };

  const onChange = (open: boolean) => {
    if (!open) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onChange={onChange}>
        <ErrorMsg
          title="Error!"
          desc="Something went wrong, Try again later."
        />
      </Modal>

      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden w-full">
        <div className="flex-shrink-0">
          <Image
            className="h-48 w-full object-cover"
            src={service.images[0]}
            alt={service.name}
            width={250}
            height={250}
          />
        </div>
        <div className="flex-1 bg-emerald-50 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-xl font-semibold text-slate-600">
              {service.name}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {service.description}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-xl font-semibold text-gray-900">
                {servicePrice}
              </p>
            </div>
            <button
              onClick={handleSubmit}
              className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
