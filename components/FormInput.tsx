import { HTMLInputTypeAttribute } from "react";

interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type: HTMLInputTypeAttribute | "textarea";
  name: string;
  label: string;
  placeholder: string;
  successMsg: string;
  errorMsg: string;
  isError: boolean;
  isSuccess: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  name,
  successMsg,
  errorMsg,
  isError,
  isSuccess,
  ...props
}) => {
  const InputElement = type === "textarea" ? "textarea" : "input";

  /* Normal State */
  let content = (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <InputElement
        type={type}
        id={name}
        className="bg-green-50 border border-blue-500 text-green-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );

  /* Success State */
  if (isSuccess && successMsg) {
    content = (
      <div className="mb-6">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >
          {label}
        </label>
        <InputElement
          type={type}
          id={name}
          className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
          placeholder={placeholder}
          {...props}
        />
        <p className="mt-2 text-sm text-green-600 dark:text-green-500">
          <span className="font-medium">Alright!</span> {successMsg}
        </p>
      </div>
    );
  }
  /* Error State */
  if (isError && errorMsg) {
    content = (
      <div>
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
        >
          {label}
        </label>
        <InputElement
          type={type}
          id={name}
          className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
          placeholder={placeholder}
          {...props}
        />
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oops!</span>
          {errorMsg}
        </p>
      </div>
    );
  }

  return content;
};

export default FormInput;
