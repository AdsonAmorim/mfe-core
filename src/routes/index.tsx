import dynamic from "next/dynamic";

const Checkout = dynamic<any>(() => import("checkout/pages/checkout"));
const Home = dynamic<any>(() => import("main/pages/home"));

const routeTypes = ["/checkout", "/home"] as const;
export type IRoute = (typeof routeTypes)[number];

export const routes = {
  "/checkout": {
    page: <Checkout number="4444 4444 4444" />,
  },
  "/home": {
    page: <Home />,
  },
};
