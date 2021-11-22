const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const path = require("path");

module.exports = {
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
  // webpack: (config, { isServer }) => {
  //   // Analyze dublicate dependencies
  //   config.plugins.push(new DuplicatePackageCheckerPlugin());

  //   config.resolve.alias["strip-ansi"] = path.resolve(
  //     __dirname,
  //     "node_modules",
  //     "strip-ansi"
  //   );

  //   return config;
  // },
};
