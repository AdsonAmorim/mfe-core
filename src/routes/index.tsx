import dynamic from "next/dynamic";

const Checkout = dynamic<any>((): any => import("checkout/pages/checkout"));
const Home = dynamic<any>((): any => import("main/pages/home"));

const routeTypes = ["/home", "/checkout"] as const;
export type IRoute = (typeof routeTypes)[number];

export const routes = {
  "/checkout": {
    page: <Checkout number="4444 4444 4444" />,
  },
  "/home": {
    page: <Home />,
  },
};
