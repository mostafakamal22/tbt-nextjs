import { HTMLInputTypeAttribute, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type: HTMLInputTypeAttribute | "textarea";
  label: string;
  placeholder?: string;
  successMsg?: string;
  errorMsg?: string;
  isError?: boolean;
  isSuccess?: boolean;
}

const FormInput = forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  FormInputProps
>(
  (
    {
      label,
      type,
      placeholder,
      name,
      successMsg,
      errorMsg,
      isError,
      isSuccess,
      ...props
    },
    ref
  ) => {
    const InputElement =
      type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          className={twMerge(
            "bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
            isSuccess &&
              "bg-green-50 border-green-500 text-green-900 focus:ring-green-500 focus:border-green-500",
            isError &&
              "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
          )}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className={twMerge(
            "bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
            isSuccess &&
              "bg-green-50 border-green-500 text-green-900 focus:ring-green-500 focus:border-green-500",
            isError &&
              "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
          )}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      );

    let content = (
      <div className="mb-4">
        <label
          htmlFor={name}
          className={twMerge(
            "block mb-2 text-sm font-medium",
            isSuccess && "text-green-700",
            isError && "text-red-700"
          )}
        >
          {label}
        </label>
        {InputElement}

        {isSuccess && (
          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-bold">Alright! </span> {successMsg}
          </p>
        )}
        {isError && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-bold">Oops! </span>
            {errorMsg}
          </p>
        )}
      </div>
    );

    return content;
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
