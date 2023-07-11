import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TicketSchema } from "@/zodSchemas/ticketSchema";
import type { TicketSchemaType } from "@/zodSchemas/ticketSchema";
import FormInput from "./FormInput";
import useTicketDetails from "@/hooks/useTicketDetails";
import useModal from "@/hooks/useModal";
import SuccessMSG from "./SuccessMsg";

export default function TicketRequiredDetailsForm() {
  const { openModal, setChildren } = useModal();

  const { setArrivalCity, setDepartureCity, setTravelDates, setPassenger } =
    useTicketDetails();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading, dirtyFields },
  } = useForm<TicketSchemaType>({
    resolver: zodResolver(TicketSchema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<TicketSchemaType> = (data) => {
    const result = TicketSchema.safeParse(data);

    if (result.success) {
      setArrivalCity(data.arrivalCity);
      setDepartureCity(data.departureCity);
      setTravelDates(data.travelDates);
      setPassenger(data.passenger);

      const successMsg = (
        <SuccessMSG
          title="Ticket Details Saved"
          desc="Your ticket details have been saved successfully. You can now proceed to book your ticket."
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
          Ticket Request
        </span>{" "}
        Needed Details:-
      </h2>
      <p className="text-sm bg-yellow-50 text-yellow-900 p-2 rounded shadow">
        Your data will be automatically erased upon refreshing your browser or
        after the payment process is complete, so you can trust that your
        privacy is protected.
      </p>

      <h5 className="text-xl font-bold mb-2 p-2 bg-emerald-100 rounded shadow">
        **Passenger Details
      </h5>
      <FormInput
        label="Full Name (As Written on Passport)"
        type="string"
        placeholder="Type your full name"
        isSuccess={Boolean(
          !errors.passenger?.fullName && dirtyFields.passenger?.fullName
        )}
        successMsg=""
        isError={Boolean(errors.passenger?.fullName)}
        errorMsg={errors.passenger?.fullName?.message}
        {...register("passenger.fullName")}
      />

      <FormInput
        label="Passport Number"
        type="string"
        placeholder="Type your Passport Number"
        isSuccess={Boolean(
          !errors.passenger?.passportNumber &&
            dirtyFields.passenger?.passportNumber
        )}
        successMsg="Valid Passpport Number"
        isError={Boolean(errors.passenger?.passportNumber)}
        errorMsg={errors.passenger?.passportNumber?.message}
        {...register("passenger.passportNumber")}
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
        **Departure and arrival cities
      </h5>
      <FormInput
        label="Departure City"
        type="string"
        placeholder="Type Departure City"
        isSuccess={Boolean(!errors.departureCity && dirtyFields.departureCity)}
        successMsg="Valid Departure City"
        isError={Boolean(errors.departureCity)}
        errorMsg={errors.departureCity?.message}
        {...register("departureCity")}
      />

      <FormInput
        label="Arrival City"
        type="string"
        placeholder="Type Arrival City"
        isSuccess={Boolean(!errors.arrivalCity && dirtyFields.arrivalCity)}
        successMsg="Valid Arrival City"
        isError={Boolean(errors.arrivalCity)}
        errorMsg={errors.arrivalCity?.message}
        {...register("arrivalCity")}
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
