import { getStripePrices } from "@/actions/getStripePrices";
import { getStripeServices } from "@/actions/getStripeServices";
import Services from "@/components/Services";
import { findAndFormatPrice } from "@/helpers/findAndFormatPrice";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Travelling can not be easier",
};

export const revalidate = 3600; // revalidate every hour

export default async function Page() {
  // Initiate both requests in parallel
  const servicesData = getStripeServices();
  const pricesData = getStripePrices();

  // Wait for the promises to resolve
  const [services, prices] = await Promise.all([servicesData, pricesData]);

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
              {service?.default_price
                ? findAndFormatPrice(service?.default_price?.toString(), prices)
                : null}
            </p>
          </div>
        ))}
      </div>
      <Services />
    </>
  );
}
