import { getStripeServices } from "@/actions/getStripeServices";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Travelling can not be easier",
};

export const revalidate = 3600; // revalidate every hour

export default async function Page() {
  const services = await getStripeServices();

  return (
    <>
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <p>{service.name}</p>
            <p>{service.description}</p>
            <p>{service.default_price?.toString()}</p>
          </div>
        ))}
      </div>
      <Services />
    </>
  );
}
