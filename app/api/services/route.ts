import { stripe } from "@/libs/stripe";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type Service = {
  price: string;
  quantity: number;
};

export async function POST(req: NextRequest) {
  const origin = headers().get("origin");
  const body = await req.json();

  const services = body?.services as Service[];
  if (!services) {
    return new NextResponse("Please provide item to purchase", { status: 400 });
  }

  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [...services],
      mode: "payment",
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${origin}/services/?success=true`,
      cancel_url: `${origin}/services/?canceled=true`,
    });

    if (session?.url) {
      return NextResponse.json(session.url);
    }
  } catch (err: any) {
    NextResponse.json(err.message, { status: err.statusCode || 500 });
  }
}
