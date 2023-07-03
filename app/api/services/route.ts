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

  const service = { ...body } as Service;

  if (!service) {
    return new NextResponse("Please provide item to purchase", { status: 400 });
  }

  try {
    const serviceProductID = (await stripe.prices.retrieve(service?.price))
      ?.product;
    console.log(serviceProductID);

    const serviceProduct = await stripe.products.retrieve(
      serviceProductID?.toString()
    );
    console.log(serviceProduct);

    const serviceProductMetadata = serviceProduct.metadata;
    console.log(serviceProductMetadata);

    if (!serviceProductMetadata?.type) {
      return new NextResponse("Service Has No Metadata Type", { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [{ ...service }],
      mode: "payment",
      phone_number_collection: {
        enabled: true,
      },
      custom_fields: [
        {
          type: "text",
          key: "customerName",
          label: {
            type: "custom",
            custom: "Your Full Name",
          },
        },
      ],
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
