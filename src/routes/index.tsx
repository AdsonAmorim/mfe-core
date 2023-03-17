import dynamic from "next/dynamic";

const Checkout = dynamic<any>(() => import("checkout/pages/checkout"));

export const routes = {
  "/checkout": {
    page: <Checkout number="4444" />,
  },
};
