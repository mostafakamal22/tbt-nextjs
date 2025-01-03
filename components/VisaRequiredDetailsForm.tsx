import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisaSchema, employmentStatus } from "@/zodSchemas/visaSchema";
import type { VisaSchemaType } from "@/zodSchemas/visaSchema";
import FormInput from "./FormInput";
import useVisaDetails from "@/hooks/useVisaDetails";
import useModal from "@/hooks/useModal";
import SuccessMSG from "./SuccessMsg";
import ClientDataPrivacy from "./ClientDataPrivacy";

export default function VisaRequiredDetailsForm() {
  const { openModal, setChildren, setIsFromModal } = useModal();

  const {
    setPassportInfo,
    setTravelDates,
    setFlightDetails,
    setPersonalInfo,
    setEmploymentInfo,
    setPurposeOfVisit,
  } = useVisaDetails();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading, dirtyFields },
  } = useForm<VisaSchemaType>({
    resolver: zodResolver(VisaSchema),
    defaultValues: {
      passportInfo: {
        passportNumber: "Passport ID",
      },
      employmentInfo: {
        employmentStatus: "employed",
      },
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<VisaSchemaType> = (data) => {
    const result = VisaSchema.safeParse(data);

    if (result.success) {
      setPassportInfo(data.passportInfo);
      setTravelDates(data.travelDates);
      setFlightDetails(data.flightDetails);
      setPersonalInfo(data.personalInfo);
      setEmploymentInfo(data.employmentInfo);
      setPurposeOfVisit(data.purposeOfVisit);

      setIsFromModal(false);

      const successMsg = (
        <SuccessMSG
          title="Visa Details Saved"
          desc="Your visa details have been saved successfully. You can now proceed to book your visa."
        />
      );
      setChildren(successMsg);

      openModal();
    } else {
      console.log(result.error.issues);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-3xl gap-2 mx-auto text-gray-600 text-left py-2"
    >
      <h2 className="mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Visa Request
        </span>{" "}
        Needed Details:-
      </h2>

      <ClientDataPrivacy />

      <h5 className="text-xl font-bold mb-2 p-2 bg-emerald-100 rounded shadow">
        **Passport information
      </h5>

      <FormInput
        label="Passport Number"
        type="text"
        placeholder="Type Your Passport Number"
        isSuccess={Boolean(
          !errors.passportInfo?.passportNumber &&
            dirtyFields.passportInfo?.passportNumber
        )}
        successMsg="Valid Passport Number"
        isError={Boolean(errors.passportInfo?.passportNumber)}
        errorMsg={errors.passportInfo?.passportNumber?.message}
        {...register("passportInfo.passportNumber")}
      />

      <FormInput
        label="Passport Date Of Issuance"
        type="date"
        isSuccess={Boolean(
          !errors.passportInfo?.dateOfIssuance &&
            !errors.passportInfo?.message &&
            dirtyFields.passportInfo?.dateOfIssuance
        )}
        successMsg="Valid Passport Date Of Issuance"
        isError={Boolean(
          errors.passportInfo?.dateOfIssuance || errors.passportInfo?.message
        )}
        errorMsg={
          errors.passportInfo?.dateOfIssuance?.message ||
          errors.passportInfo?.message
        }
        {...register("passportInfo.dateOfIssuance")}
      />

      <FormInput
        label="Passport Expiration Date"
        type="date"
        isSuccess={Boolean(
          !errors.passportInfo?.expirationDate &&
            !errors.passportInfo?.message &&
            dirtyFields.passportInfo?.expirationDate
        )}
        successMsg="Valid Passport Expiration Date"
        isError={Boolean(
          errors.passportInfo?.expirationDate || errors.passportInfo?.message
        )}
        errorMsg={
          errors.passportInfo?.expirationDate?.message ||
          errors.passportInfo?.message
        }
        {...register("passportInfo.expirationDate")}
      />

      <h5 className="text-xl font-bold mb-2 p-2 bg-emerald-100 rounded shadow">
        **Travel Dates
      </h5>
      <FormInput
        label="Date Of Departure"
        type="date"
        isSuccess={Boolean(
          !errors.travelDates?.departure &&
            !errors.travelDates?.message &&
            dirtyFields.travelDates?.departure
        )}
        successMsg="Valid Date Of Departure"
        isError={Boolean(
          errors.travelDates?.departure || errors.travelDates?.message
        )}
        errorMsg={
          errors.travelDates?.departure?.message || errors.travelDates?.message
        }
        {...register("travelDates.departure")}
      />

      <FormInput
        label="Date Of Return"
        type="date"
        isSuccess={Boolean(
          !errors.travelDates?.return &&
            !errors.travelDates?.message &&
            dirtyFields.travelDates?.return
        )}
        successMsg="Valid Date Of Return"
        isError={Boolean(
          errors.travelDates?.return || errors.travelDates?.message
        )}
        errorMsg={
          errors.travelDates?.return?.message || errors.travelDates?.message
        }
        {...register("travelDates.return")}
      />

      <h5 className="text-xl font-bold mb-2 p-2 bg-emerald-100 rounded shadow">
        **Flight Details
      </h5>
      <FormInput
        label="Airline"
        type="string"
        placeholder="Type Airline Name"
        isSuccess={Boolean(
          !errors.flightDetails?.airline && dirtyFields.flightDetails?.airline
        )}
        successMsg=""
        isError={Boolean(errors.flightDetails?.airline)}
        errorMsg={errors.flightDetails?.airline?.message}
        {...register("flightDetails.airline")}
      />

      <FormInput
        label="Flight Number"
        type="string"
        placeholder="Type Flight Number"
        isSuccess={Boolean(
          !errors.flightDetails?.flightNumber &&
            dirtyFields.flightDetails?.flightNumber
        )}
        successMsg=""
        isError={Boolean(errors.flightDetails?.flightNumber)}
        errorMsg={errors.flightDetails?.flightNumber?.message}
        {...register("flightDetails.flightNumber")}
      />

      <h5 className="text-xl font-bold mb-2 p-2 bg-emerald-100 rounded shadow">
        **Personal Details
      </h5>
      <FormInput
        label="Full Name (As Written on Passport)"
        type="string"
        placeholder="Type your full name"
        isSuccess={Boolean(
          !errors.personalInfo?.fullName && dirtyFields.personalInfo?.fullName
        )}
        successMsg=""
        isError={Boolean(errors.personalInfo?.fullName)}
        errorMsg={errors.personalInfo?.fullName?.message}
        {...register("personalInfo.fullName")}
      />

      <FormInput
        label="Date Of Birth"
        type="date"
        isSuccess={Boolean(
          !errors.personalInfo?.dateOfBirth &&
            dirtyFields.personalInfo?.dateOfBirth
        )}
        successMsg="Valid Date Of Birth"
        isError={Boolean(errors.personalInfo?.dateOfBirth)}
        errorMsg={errors.personalInfo?.dateOfBirth?.message}
        {...register("personalInfo.dateOfBirth")}
      />

      <h5 className="text-xl font-bold mb-2 p-2 bg-emerald-100 rounded shadow">
        **Employment Details
      </h5>
      <ul className="items-center w-full text-sm font-medium text-gray-900 text-center rounded-lg sm:flex">
        {employmentStatus.map((status) => (
          <li
            key={status}
            className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r"
          >
            <FormInput
              label={status}
              type="radio"
              value={status}
              {...register("employmentInfo.employmentStatus")}
              labelClassNames="capitalize"
              inputClassNames="accent-emerald-600"
            />
          </li>
        ))}
      </ul>

      <FormInput
        label="Income"
        type="number"
        placeholder="Type you income"
        isSuccess={Boolean(
          !errors.employmentInfo?.income && dirtyFields.employmentInfo?.income
        )}
        successMsg=""
        isError={Boolean(errors.employmentInfo?.income)}
        errorMsg={errors.employmentInfo?.income?.message}
        {...register("employmentInfo.income")}
      />

      <h5 className="text-xl font-bold mb-2 p-2 bg-emerald-100 rounded shadow">
        **Purpose Of Visit
      </h5>
      <FormInput
        label="Purpose Of Visit"
        type="textarea"
        placeholder="Type purpose of visit"
        isSuccess={Boolean(
          !errors.purposeOfVisit?.message && dirtyFields.purposeOfVisit
        )}
        successMsg=""
        isError={Boolean(errors.purposeOfVisit?.message)}
        errorMsg={errors.purposeOfVisit?.message}
        {...register("purposeOfVisit")}
      />

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none   disabled:cursor-not-allowed"
        disabled={isSubmitting || isLoading}
      >
        Save and Continue
      </button>
    </form>
  );
}
