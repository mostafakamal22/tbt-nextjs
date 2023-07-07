import { VisaSchemaType } from "@/zodSchemas/visaSchema";
import { create } from "zustand";

interface VisaDetails extends VisaSchemaType {
  setPassportInfo: (d: VisaSchemaType["passportInfo"]) => void;
  setTravelDates: (d: VisaSchemaType["travelDates"]) => void;
  setFlightDetails: (d: VisaSchemaType["flightDetails"]) => void;
  setPersonalInfo: (d: VisaSchemaType["personalInfo"]) => void;
  setEmploymentInfo: (d: VisaSchemaType["employmentInfo"]) => void;
  setPurposeOfVisit: (d: VisaSchemaType["purposeOfVisit"]) => void;
}

const useVisaDetails = create<VisaDetails>((set) => ({
  passportInfo: {
    passportNumber: "",
    dateOfIssuance: new Date(),
    expirationDate: new Date(),
  },
  setPassportInfo: (d) => set({ passportInfo: d }),
  travelDates: {
    departure: new Date(),
    return: new Date(),
  },
  setTravelDates: (d) => set({ travelDates: d }),
  flightDetails: {
    airline: "",
    flightNumber: "",
  },
  setFlightDetails: (d) => set({ flightDetails: d }),
  personalInfo: { fullName: "", dateOfBirth: new Date() },
  setPersonalInfo: (d) => set({ personalInfo: d }),
  employmentInfo: { employmentStatus: "employed", income: 1 },
  setEmploymentInfo: (d) => set({ employmentInfo: d }),
  purposeOfVisit: "",
  setPurposeOfVisit: (d) => set({ purposeOfVisit: d }),
}));

export default useVisaDetails;
