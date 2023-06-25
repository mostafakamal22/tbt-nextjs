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

  const services = [...body] as Service[];

  if (!services) {
    return new NextResponse("Please provide item to purchase", { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [...services],
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
