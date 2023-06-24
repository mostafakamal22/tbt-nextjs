import { getStripePrices } from "@/actions/getStripePrices";
import { getStripeServices } from "@/actions/getStripeServices";
import Services from "@/components/Services";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Travelling can not be easier",
};

export const revalidate = 3600; // revalidate every hour

export default async function Page() {
  const services = await getStripeServices();
  const prices = await getStripePrices();

  return (
    <>
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <p>{service.name}</p>
            <p>{service.description}</p>
            <Image
              src={service.images[0]}
              alt={service.name}
              width={250}
              height={250}
            />
            <p>
              {
                prices.find(
                  (price) => price.id === service.default_price?.toString()
                )?.unit_amount
              }
            </p>
          </div>
        ))}
      </div>
      <Services />
    </>
  );
}
