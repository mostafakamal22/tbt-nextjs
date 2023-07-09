import { TicketSchemaType } from "@/zodSchemas/ticketSchema";
import { create } from "zustand";

interface TicketDetails extends TicketSchemaType {
  setDepartureCity: (d: TicketSchemaType["departureCity"]) => void;
  setArrivalCity: (d: TicketSchemaType["arrivalCity"]) => void;
  setTravelDates: (d: TicketSchemaType["travelDates"]) => void;
  setPassenger: (d: TicketSchemaType["passenger"]) => void;
}

const useTicketDetails = create<TicketDetails>((set) => ({
  departureCity: "",
  arrivalCity: "",
  setDepartureCity: (d) => set({ departureCity: d }),
  setArrivalCity: (d) => set({ arrivalCity: d }),
  travelDates: {
    departure: new Date(),
    return: new Date(),
  },
  setTravelDates: (d) => set({ travelDates: d }),
  passenger: {
    fullName: "",
    passportNumber: "",
  },
  setPassenger: (d) => set({ passenger: d }),
}));

export default useTicketDetails;
