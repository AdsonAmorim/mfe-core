export const getDomainOnServerSide = ({ req, res, query }: any) => {
  const {
    headers: { domain, host },
  } = req;

  const domainLocation = !!req
    ? !domain
      ? host
      : domain
    : window?.location?.host;

  return domainLocation;
};
