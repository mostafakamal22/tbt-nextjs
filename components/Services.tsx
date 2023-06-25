"use client";
import { FormEvent } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import PaymentSuccess from "@/components/PaymentSuccess";
import PaymentCancelled from "@/components/PaymentCancelled";
import { useSearchParams } from "next/navigation";
import { postData } from "@/helpers/postData";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Services() {
  const router = useRouter();

  const query = useSearchParams();
  const successPayemnt = query.get("success");
  const cancelledPayemnt = query.get("canceled");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const sessionURL = await postData({
        url: "/api/services",
        data: [{ price: "price_1NMcOqLMgcW9jIdqWTxUQY4d", quantity: 2 }],
      });
      console.log(sessionURL);
      router.push(sessionURL);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
  };

  if (successPayemnt) return <PaymentSuccess />;
  if (cancelledPayemnt) return <PaymentCancelled />;

  return (
    <div className="flex justify-center items-center h-screen">
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
    </div>
  );
}
