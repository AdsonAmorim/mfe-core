import "@/styles/globals.css";
import { getDomainOnServerSide } from "@/utils/getDomain";
import { IRoute } from "@/routes";

import type { AppInitialProps, AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = async ({ Component, ctx }: any) => {
  const { asPath: pathname, req, res, query } = ctx;

  const domain = getDomainOnServerSide({ ...ctx });

  // Por algum motivo dá problema em produção
  if (pathname === "/") {
    return res?.writeHead(301, { Location: "/home" })?.end();
  }

  return {
    pageProps: { domain, pathname },
  };
};
