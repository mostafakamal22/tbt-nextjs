import { visaCustomStripFields } from "@/helpers/visaCustomStripFields";
import { stripe } from "@/libs/stripe";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

type Service = {
  price: string;
  quantity: number;
};

export async function POST(req: NextRequest) {
  const origin = headers().get("origin");
  const body = await req.json();

  const service = { ...body } as Service;

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

    let custom_fields: Stripe.Checkout.SessionCreateParams.CustomField[] = [
      {
        type: "text",
        key: "customerName",
        label: {
          type: "custom",
          custom: "Your Full Name",
        },
      },
    ];

    // if (serviceProductMetadata?.type === "visa") {
    //   custom_fields = [...visaCustomStripFields];
    // }

    const session = await stripe.checkout.sessions.create({
      line_items: [{ ...service }],
      mode: "payment",
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        skdks: "skjdksj",
      },
      custom_fields,
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
