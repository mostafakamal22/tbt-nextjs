export type Service = {
  price: string;
  quantity: number;
  metaData: { [k: string]: string };
  type: "ticket" | "visa" | string;
};

export const postData = async ({
  url,
  data,
}: {
  url: string;
  data?: Service;
}) => {
  console.log("posting,", url, data);

  const res: Response = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log("Error in postData", { url, data, res });
    console.log(await res.text());
    throw Error(res.statusText);
  }

  return res.json();
};
