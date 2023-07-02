import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccess() {
  return (
    <div className="flex justify-center items-center text-slate-600 min-h-[50vh]">
      <div className="flex flex-col items-center justify-center">
        <FaCheckCircle size={30} className="text-green-500 mb-4" />
        <h2 className="text-2xl font-bold">Successful Payment!</h2>
      </div>
    </div>
  );
}
