import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisaSchema, employmentStatus } from "@/zodSchemas/visaSchema";
import type { VisaSchemaType } from "@/zodSchemas/visaSchema";
import FormInput from "./FormInput";
import useVisaDetails from "@/hooks/useVisaDetails";
import useModal from "@/hooks/useModal";
import SuccessMSG from "./SuccessMsg";

export default function VisaRequiredDetailsFrom() {
  const { openModal, setChildren } = useModal();

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
    console.log(data);
    const result = VisaSchema.safeParse(data);
    console.log(result.success);

    if (result.success) {
      setPassportInfo(data.passportInfo);
      setTravelDates(data.travelDates);
      setFlightDetails(data.flightDetails);
      setPersonalInfo(data.personalInfo);
      setEmploymentInfo(data.employmentInfo);
      setPurposeOfVisit(data.purposeOfVisit);

      const successMsg = (
        <SuccessMSG
          title="Details Saved Successfully!"
          desc="Now you can Book a Visa."
        />
      );
      setChildren(successMsg);

      openModal();
    } else {
      console.log(result.error.issues);
    }
  };

  return (
    <>
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
        <p className="text-sm bg-yellow-50 text-yellow-900 p-2 rounded shadow">
          Your data will be automatically erased upon refreshing your browser or
          after the payment process is complete, so you can trust that your
          privacy is protected.
        </p>

        <h5 className="text-xl font-bold mb-2 p-2 bg-emerald-100 rounded shadow">
          **Passport information
        </h5>

        <FormInput
          label="Passport Number"
          type="text"
          placeholder="Type Your Passport Number"
          isSuccess={
            !errors.passportInfo?.passportNumber &&
            dirtyFields.passportInfo?.passportNumber
              ? true
              : false
          }
          successMsg="Valid Passport Number"
          isError={errors.passportInfo?.passportNumber ? true : false}
          errorMsg={errors.passportInfo?.passportNumber?.message}
          {...register("passportInfo.passportNumber")}
        />

        <FormInput
          label="Passport Date Of Issuance"
          type="date"
          isSuccess={
            !errors.passportInfo?.dateOfIssuance &&
            !errors.passportInfo?.message &&
            dirtyFields.passportInfo?.dateOfIssuance
              ? true
              : false
          }
          successMsg="Valid Passport Date Of Issuance"
          isError={
            errors.passportInfo?.dateOfIssuance || errors.passportInfo?.message
              ? true
              : false
          }
          errorMsg={
            errors.passportInfo?.dateOfIssuance?.message ||
            errors.passportInfo?.message
          }
          {...register("passportInfo.dateOfIssuance")}
        />

        <FormInput
          label="Passport Expiration Date"
          type="date"
          isSuccess={
            !errors.passportInfo?.expirationDate &&
            !errors.passportInfo?.message &&
            dirtyFields.passportInfo?.expirationDate
              ? true
              : false
          }
          successMsg="Valid Passport Expiration Date"
          isError={
            errors.passportInfo?.expirationDate || errors.passportInfo?.message
              ? true
              : false
          }
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
          isSuccess={
            !errors.travelDates?.departure &&
            !errors.travelDates?.message &&
            dirtyFields.travelDates?.departure
              ? true
              : false
          }
          successMsg="Valid Date Of Departure"
          isError={
            errors.travelDates?.departure || errors.travelDates?.message
              ? true
              : false
          }
          errorMsg={
            errors.travelDates?.departure?.message ||
            errors.travelDates?.message
          }
          {...register("travelDates.departure")}
        />

        <FormInput
          label="Date Of Return"
          type="date"
          isSuccess={
            !errors.travelDates?.return &&
            !errors.travelDates?.message &&
            dirtyFields.travelDates?.return
              ? true
              : false
          }
          successMsg="Valid Date Of Return"
          isError={
            errors.travelDates?.return || errors.travelDates?.message
              ? true
              : false
          }
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
          isSuccess={
            !errors.flightDetails?.airline && dirtyFields.flightDetails?.airline
              ? true
              : false
          }
          successMsg=""
          isError={errors.flightDetails?.airline ? true : false}
          errorMsg={errors.flightDetails?.airline?.message}
          {...register("flightDetails.airline")}
        />

        <FormInput
          label="Flight Number"
          type="string"
          placeholder="Type Flight Number"
          isSuccess={
            !errors.flightDetails?.flightNumber &&
            dirtyFields.flightDetails?.flightNumber
              ? true
              : false
          }
          successMsg=""
          isError={errors.flightDetails?.flightNumber ? true : false}
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
          isSuccess={
            !errors.personalInfo?.fullName && dirtyFields.personalInfo?.fullName
              ? true
              : false
          }
          successMsg=""
          isError={errors.personalInfo?.fullName ? true : false}
          errorMsg={errors.personalInfo?.fullName?.message}
          {...register("personalInfo.fullName")}
        />

        <FormInput
          label="Date Of Birth"
          type="date"
          isSuccess={
            !errors.personalInfo?.dateOfBirth &&
            dirtyFields.personalInfo?.dateOfBirth
              ? true
              : false
          }
          successMsg="Valid Date Of Birth"
          isError={errors.personalInfo?.dateOfBirth ? true : false}
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
                label={status.toUpperCase()}
                type="radio"
                value={status}
                {...register("employmentInfo.employmentStatus")}
              />
            </li>
          ))}
        </ul>

        <FormInput
          label="Income"
          type="number"
          placeholder="Type you income"
          isSuccess={
            !errors.employmentInfo?.income && dirtyFields.employmentInfo?.income
              ? true
              : false
          }
          successMsg=""
          isError={errors.employmentInfo?.income ? true : false}
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
          isSuccess={
            !errors.purposeOfVisit?.message && dirtyFields.purposeOfVisit
              ? true
              : false
          }
          successMsg=""
          isError={errors.purposeOfVisit?.message ? true : false}
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
    </>
  );
}
