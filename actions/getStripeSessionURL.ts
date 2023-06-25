type Service = {
  price: string;
  quantity: number;
};

export async function getStripeSessionURL(
  services: Service[]
): Promise<string> {
  const res = await fetch("/api/services", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      services,
    }),
  });

  if (!res?.ok) {
    console.log(res.body);
    throw new Error("res");
  }

  return res.url;
}
