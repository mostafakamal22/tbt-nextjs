import { stripe } from "@/libs/stripe";
import type { Service } from "@/helpers/postData";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const origin = headers().get("origin");
  const body = await req.json();

  const service = { ...body } as Service;
  console.log(service);
  if (!service) {
    return new NextResponse("Please provide item to purchase", { status: 400 });
  }

  try {
    const serviceProductID = (await stripe.prices.retrieve(service?.price))
      ?.product;

    const serviceProduct = await stripe.products.retrieve(
      serviceProductID?.toString()
    );

    const serviceProductMetadata = serviceProduct.metadata;

    if (!serviceProductMetadata?.type) {
      return new NextResponse("Service Has No Metadata Type", { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: service?.price, quantity: service?.quantity }],
      mode: "payment",
      phone_number_collection: {
        enabled: true,
      },
      metadata: service.metaData,
      submit_type: "book",
      success_url: `${origin}/services/?success=true`,
      cancel_url: `${origin}/services/?canceled=true`,
    });

    if (session?.url) {
      return NextResponse.json(session.url);
    }
  } catch (error: any) {
    return new NextResponse(error?.message, {
      status: error?.statusCode || 500,
    });
  }
}
