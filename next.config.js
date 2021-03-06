const path = require("path");

module.exports = {
  distDir: "dist",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    domains: ["sionaugb.sirv.com"]
  },
};
