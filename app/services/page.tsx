"use client";
import { FormEvent } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import PaymentSuccess from "@/components/PaymentSuccess";
import PaymentCancelled from "@/components/PaymentCancelled";
import { useSearchParams } from "next/navigation";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Services() {
  const router = useRouter();

  const query = useSearchParams();
  const successPayemnt = query.get("success");
  const cancelledPayemnt = query.get("canceled");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        services: [{ price: "price_1NK69kLMgcW9jIdq1QR64C0W", quantity: 1 }],
      }),
    })
      .then((res) => res.json())
      .then((sessionUrl) => {
        console.log(sessionUrl);
        router.push(sessionUrl);
      });
  };

  if (successPayemnt) return <PaymentSuccess />;
  if (cancelledPayemnt) return <PaymentCancelled />;

  return (
    <form onSubmit={handleSubmit}>
      <section className="bg-white flex flex-col w-[400px] h-[112px] border-r-4 justify-between">
        <button
          className="h-10 bg-blue-500 rounded-lg text-white border-none font-bold cursor-pointer transition-all shadow-sm hover:opacity-80"
          type="submit"
          role="link"
        >
          Checkout
        </button>
      </section>
    </form>
  );
}
