const path = require("path");

module.exports = {
  //...

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      style: path.resolve(__dirname, "src", "style"),
      app: path.resolve(__dirname, "app/"),
      common: path.resolve(__dirname, "app/common/"),
      pages: path.resolve(__dirname, "app/pages/"),
    },
  },
};
