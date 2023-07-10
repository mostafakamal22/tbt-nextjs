import Styles from "@/public/styles/spinner.module.css";

export default function Loading() {
  return (
    <div className="absolute inset-0 w-full h-screen flex justify-center items-center bg-black/5">
      <div className={Styles["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
