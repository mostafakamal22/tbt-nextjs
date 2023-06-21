import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccess() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-screen">
        <FaCheckCircle size={30} className="text-green-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment successful!
        </h2>

        <Link
          href={"/product"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Continue Purchasing
        </Link>
      </div>
    </div>
  );
}
