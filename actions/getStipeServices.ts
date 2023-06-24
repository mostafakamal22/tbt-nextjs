import { stripe } from "@/libs/stripe";
import { Stripe } from "stripe";

export async function getData(): Promise<
  Stripe.Response<Stripe.ApiList<Stripe.Product>>
> {
  try {
    const services = await stripe.products.list({ active: true });
    return services;
  } catch (error) {
    // This will activate the closest `error.js` Error Boundary
    console.log(error);
    throw new Error("Something went wrong! Try refresh the page.");
  }
}
