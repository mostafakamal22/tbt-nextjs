import { CSSProperties } from "react";
import PuffLoader from "react-spinners/PuffLoader";

export default function Loading() {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <div className="absolute inset-0 w-full h-screen flex justify-center items-center bg-black/5">
      <PuffLoader
        color="#38bdf8"
        cssOverride={override}
        size={100}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
