import { stripe } from "@/libs/stripe";
import { Stripe } from "stripe";

export async function getStripeServices(): Promise<Stripe.Product[]> {
  try {
    const res = await stripe.products.list({ active: true });
    return res.data;
  } catch (error) {
    // This will activate the closest `error.js` Error Boundary
    console.log(error);
    throw new Error("Something went wrong! Try refresh the page.");
  }
}
