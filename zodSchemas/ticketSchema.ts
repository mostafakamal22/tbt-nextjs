import { z } from "zod";

export const TicketSchema = z.object({
  departureCity: z
    .string()
    .trim()
    .min(3, { message: "Departure city must be at least 3 characters long" })
    .max(100, { message: "Departure city must be less than 100 characters" }),
  arrivalCity: z
    .string()
    .trim()
    .min(3, { message: "Arrival city must be at least 3 characters long" })
    .max(100, { message: "Arrival city must be less than 100 characters" }),
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
  passenger: z.object({
    fullName: z
      .string()
      .trim()
      .min(10, { message: "Full name must be 10 or more characters long" })
      .max(100, { message: "Full name must be less than 100 characters" }),
    passportNumber: z
      .string()
      .trim()
      .nonempty({ message: "Required" })
      .regex(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/, {
        message: "Not a valid passport number",
      }),
  }),
});

export type TicketSchemaType = z.infer<typeof TicketSchema>;
