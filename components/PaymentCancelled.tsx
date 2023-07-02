import Link from "next/link";
import { FaTimesCircle } from "react-icons/fa";

export default function PaymentCancelled() {
  return (
    <div className="flex justify-center items-center text-slate-600 min-h-[50vh]">
      <div className="flex flex-col items-center justify-center">
        <FaTimesCircle size={30} className="text-red-500 mb-4" />
        <h2 className="text-2xl font-bold">Payment cancelled.</h2>
        <p className="mt-8 text-gray-500">
          Your payment has been cancelled. Please try again or contact customer
          service for assistance.
        </p>
      </div>
    </div>
  );
}
