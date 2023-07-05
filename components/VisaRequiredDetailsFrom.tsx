import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisaSchema } from "@/zodSchemas/visaSchema";
import type { VisaSchemaType } from "@/zodSchemas/visaSchema";
import FormInput from "./FormInput";

export default function Form() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid, isDirty },
  } = useForm<VisaSchemaType>({
    resolver: zodResolver(VisaSchema),
  });

  const onSubmit: SubmitHandler<VisaSchemaType> = (data) => {
    console.log(data);
  };

  console.log(isValid);

  return (
    <>
      <button
        onClick={() => trigger()}
        className="bg-gray-300 rounded p-2 mb-2 text-xl"
      >
        Display Data Requirements
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-3xl gap-2 mx-auto"
      >
        <h2>Passport information</h2>

        <FormInput
          label="Passport Number"
          type="text"
          placeholder="Type Your Passport Number"
          isSuccess={
            !errors.passportInfo?.passportNumber && isDirty ? true : false
          }
          successMsg="Valid Passport Number"
          isError={
            errors.passportInfo?.passportNumber && isDirty ? true : false
          }
          errorMsg={errors.passportInfo?.passportNumber?.message}
          {...register("passportInfo.passportNumber")}
        />

        <FormInput
          label="Passport Date Of Issuance"
          type="text"
          placeholder="Type Your Passport Date Of Issuance"
          isSuccess={
            !errors.passportInfo?.dateOfIssuance && isDirty ? true : false
          }
          successMsg="Valid Passport Date Of Issuance"
          isError={
            errors.passportInfo?.dateOfIssuance && isDirty ? true : false
          }
          errorMsg={errors.passportInfo?.dateOfIssuance?.message}
          {...register("passportInfo.dateOfIssuance")}
        />

        <FormInput
          label="Passport Expiration Date"
          type="text"
          placeholder="Type Your Passport Expiration Date"
          isSuccess={
            !errors.passportInfo?.expirationDate && isDirty ? true : false
          }
          successMsg="Valid Passport Expiration Date"
          isError={
            errors.passportInfo?.expirationDate && isDirty ? true : false
          }
          errorMsg={errors.passportInfo?.expirationDate?.message}
          {...register("passportInfo.expirationDate")}
        />

        <button
          type="submit"
          className="text-3xl bg-gray-300 p-2 rounded-md max-w-[10rem]"
        >
          Submit
        </button>
      </form>
    </>
  );
}
