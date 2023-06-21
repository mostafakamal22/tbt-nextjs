import Link from "next/link";
import { FaTimesCircle } from "react-icons/fa";

export default function PaymentCancelled() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-screen">
        <FaTimesCircle size={30} className="text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment cancelled.
        </h2>
        <p className="text-gray-500 mb-4">
          Your payment has been cancelled. Please try again or contact customer
          service for assistance.
        </p>
        <Link
          href={"/product"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Return to Products
        </Link>
      </div>
    </div>
  );
}
