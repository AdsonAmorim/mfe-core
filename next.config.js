/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true, layers: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: "core",
        remotes: {
          shared: `shared@${
            process.env.MODULE_SHARED_ENTRYPOINT_URL
          }/_next/static/${isServer ? "ssr" : "chunks"}/sharedEntry.js`,
          checkout: `checkout@${
            process.env.MODULE_CHECKOUT_ENTRYPOINT_URL
          }/_next/static/${isServer ? "ssr" : "chunks"}/checkoutEntry.js`,
        },
        filename: "static/chunks/coreEntry.js",
        runtime: false,
      })
    );
    return config;
  },
};

module.exports = nextConfig;
