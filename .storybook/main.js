const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.js", "../src/**/*.stories.tsx"],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.modules.push(path.resolve(__dirname, "../src"));

    // Return the altered config
    return config;
  },
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
};
