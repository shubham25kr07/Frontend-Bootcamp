import { rest } from "msw";
export const handlers = [
  rest.post("/customer/add", (req, res, ctx) => {
    const customerDetails =
      JSON.parse(localStorage.getItem("CustomersList")) || [];
    const newData = req.json();
    const data = [...customerDetails, newData];
    localStorage.setItem("CustomersList", JSON.stringify(data));
    return res(ctx.status(200));
  }),
];
