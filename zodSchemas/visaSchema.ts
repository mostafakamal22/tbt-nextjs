import { z } from "zod";

export const employmentStatus = [
  "employed",
  "unemployed",
  "student",
  "retired",
] as const;

export const VisaSchema = z.object({
  passportInfo: z
    .object({
      passportNumber: z
        .string()
        .trim()
        .nonempty({ message: "Required" })
        .regex(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/, {
          message: "Not a valid passport number",
        }),
      dateOfIssuance: z.preprocess((arg) => {
        if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
      }, z.date()),
      expirationDate: z.preprocess((arg) => {
        if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
      }, z.date()),
    })
    .refine(
      (data) => {
        const { dateOfIssuance, expirationDate } = data;

        if (dateOfIssuance && expirationDate) {
          // Convert dates to UTC to avoid issues with time zones
          const dateOfIssuanceUTC = Date.UTC(
            dateOfIssuance.getFullYear(),
            dateOfIssuance.getMonth(),
            dateOfIssuance.getDate()
          );
          const expirationUTC = Date.UTC(
            expirationDate.getFullYear(),
            expirationDate.getMonth(),
            expirationDate.getDate()
          );

          return expirationUTC > dateOfIssuanceUTC;
        }
        return true;
      },
      {
        message: "Expiration date must be after date of Issuance",
      }
    ),
  travelDates: z
    .object({
      departure: z.preprocess((arg) => {
        if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
      }, z.date().min(new Date(), { message: "Departure date must be in the future" })),
      return: z.preprocess((arg) => {
        if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
      }, z.date()),
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
      .nonempty({ message: "Required" })
      .max(100, { message: "Airline name must be less than 100 characters" }),
    flightNumber: z
      .string()
      .trim()
      .nonempty({ message: "Required" })
      .max(10, { message: "Flight number must be less than 10 characters" }),
  }),
  personalInfo: z.object({
    fullName: z
      .string()
      .trim()
      .min(10, { message: "Username must be 10 or more characters long" })
      .max(100, { message: "Full name must be less than 100 characters" }),
    dateOfBirth: z.preprocess((arg) => {
      if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
    }, z.date().max(new Date(), { message: "Date of birth must be in the past" })),
  }),
  employmentInfo: z.object({
    employmentStatus: z.enum(employmentStatus),
    income: z.preprocess((arg) => {
      if (typeof arg == "string" || arg instanceof Number) return Number(arg);
    }, z.number().min(1, { message: "Income must be a positive number" })),
  }),
  purposeOfVisit: z
    .string()
    .trim()
    .nonempty({ message: "Required" })
    .max(100, { message: "Purpose of visit must be less than 100 characters" }),
});

export type VisaSchemaType = z.infer<typeof VisaSchema>;
