import { stripe } from "@/libs/stripe";
import { Stripe } from "stripe";

export async function getStripePrices(): Promise<Stripe.Price[]> {
  try {
    console.log("get prices");
    const res = await stripe.prices.list({ active: true });
    return res.data;
  } catch (error) {
    // This will activate the closest `error.js` Error Boundary
    console.log(error);
    throw new Error("Something went wrong! Try refresh the page.");
  }
}
