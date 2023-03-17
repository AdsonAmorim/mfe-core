import React from "react";
import { useRouter } from "next/router";
import { routes } from "@/routes";

export default function HandlePage() {
  const { asPath } = useRouter();

  return routes[asPath]?.page || <>Hello</>;
}
