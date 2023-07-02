import { getStripePrices } from "@/actions/getStripePrices";
import { getStripeServices } from "@/actions/getStripeServices";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesHeader from "@/components/ServicesHeader";
import { Metadata } from "next";

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
    <main className="p-2 sm:p-4 md:p-10">
      <ServicesHeader />
      <ServicesGrid prices={prices} services={services} />
    </main>
  );
}
