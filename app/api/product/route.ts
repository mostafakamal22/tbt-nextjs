import { stripe } from "@/libs/stripe";
import { NextRequest, NextResponse } from "next/server";

const calculateOrderAmount = (items: any) => {
  console.log(items);
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { items } = body;

  if (!items) {
    return new NextResponse("Please provide item to purchase", { status: 400 });
  }

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "aed",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
  });
}
