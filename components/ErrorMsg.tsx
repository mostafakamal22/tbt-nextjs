import { FaTimesCircle } from "react-icons/fa";

interface ErrorMsgProps {
  title: string;
  desc: string;
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ title, desc }) => {
  return (
    <div className="flex justify-center items-center text-slate-600 min-h-[50vh]">
      <div className="flex flex-col items-center justify-center">
        <FaTimesCircle size={30} className="text-red-500 mb-2" />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-8 text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default ErrorMsg;
