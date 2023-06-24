import Stripe from "stripe";

export const findAndFormatPrice = (
  priceID: string,
  prices: Stripe.Price[]
): string | null => {
  const foundPrice = prices.find((price) => price.id === priceID);

  if (foundPrice && foundPrice.unit_amount)
    return `${
      foundPrice.unit_amount / 100
    } ${foundPrice.currency.toUpperCase()}`;

  return null;
};
