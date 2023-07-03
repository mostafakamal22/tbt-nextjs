import Stripe from "stripe";

// To buy a visa online, the specific information required can vary depending on the country you are visiting
// and
// your nationality. However, some common information needed for visa applications include:

// 1. Passport information: Your passport number, date of issuance, and expiration date.
// 2. Travel itinerary: Your travel dates, flight details, and itinerary.
// 3. Personal information: Your full name, date of birth, and contact information.
// 4. Employment and income information: Your current employment status and income, if required.
// 5. Purpose of visit: The reason for your visit to the country, such as tourism, business, or study.

export const visaCustomStripFields: Stripe.Checkout.SessionCreateParams.CustomField[] =
  [
    {
      type: "text",
      key: "customerAddInfo",

      label: {
        type: "custom",
        custom:
          "passport number, date of issuance, expiration date, travel dates, flight details, itinerary, full name, date of birth, current employment status, income and Purpose of visit",
      },
    },
    // {
    //   type: "text",
    //   key: "dateOfBirth",
    //   label: {
    //     type: "custom",
    //     custom: "Date of birth",
    //   },
    // },
    // {
    //   type: "numeric",
    //   key: "passportNumber",
    //   label: {
    //     type: "custom",
    //     custom: "Passport number",
    //   },
    // },
    // {
    //   type: "text",
    //   key: "date of issuance",
    //   label: {
    //     type: "custom",
    //     custom: "Date of issuance",
    //   },
    // },
    // {
    //   type: "text",
    //   key: "expiration date",
    //   label: {
    //     type: "custom",
    //     custom: "Expiration date",
    //   },
    // },
  ];
