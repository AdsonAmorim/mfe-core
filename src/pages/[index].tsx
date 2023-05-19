import React from "react";
import { NextRouter, useRouter } from "next/router";
import { routes, IRoute } from "@/routes";

export default function HandlePage() {
  const router = useRouter();

  return routes[router.asPath as IRoute]?.page || <>Hello</>;
}
