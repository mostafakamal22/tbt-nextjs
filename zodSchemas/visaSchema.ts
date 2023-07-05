import { z } from "zod";

export const VisaSchema = z.object({
  passportNumber: z
    .string()
    .trim()
    .regex(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/, {
      message: "Not a valid passport number",
    }),
  travelDates: z
    .object({
      departure: z
        .date()
        .min(new Date(), { message: "Departure date must be in the future" }),
      return: z.date(),
    })
    .refine(
      (data) => {
        const { departure, return: returnDate } = data;
        if (departure && returnDate) {
          // Convert dates to UTC to avoid issues with time zones
          const departureUTC = Date.UTC(
            departure.getFullYear(),
            departure.getMonth(),
            departure.getDate()
          );
          const returnUTC = Date.UTC(
            returnDate.getFullYear(),
            returnDate.getMonth(),
            returnDate.getDate()
          );

          return returnUTC > departureUTC;
        }
        return true;
      },
      {
        message: "Return date must be after departure date",
      }
    ),
  flightDetails: z.object({
    airline: z
      .string()
      .trim()
      .max(100, { message: "Airline name must be less than 100 characters" }),
    flightNumber: z
      .string()
      .trim()
      .max(10, { message: "Flight number must be less than 10 characters" }),
  }),
  personalInfo: z.object({
    fullName: z
      .string()
      .trim()
      .min(10, { message: "Username must be 10 or more characters long" })
      .max(100, { message: "Full name must be less than 100 characters" }),
    dateOfBirth: z
      .date()
      .max(new Date(), { message: "Date of birth must be in the past" }),
  }),
  employmentInfo: z.object({
    employmentStatus: z.enum(["employed", "unemployed", "student", "retired"]),
    income: z.number().min(0, { message: "Income must be a positive number" }),
  }),
  purposeOfVisit: z
    .string()
    .trim()
    .max(100, { message: "Purpose of visit must be less than 100 characters" }),
});

export type VisaSchemaType = z.infer<typeof VisaSchema>;
