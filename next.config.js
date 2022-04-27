const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    domains: ["sionaugb.sirv.com"]
  }
};
