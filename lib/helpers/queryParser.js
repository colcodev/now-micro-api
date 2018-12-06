const qs = require("qs");
const url = require("url");

const queryParser = req =>
  qs.parse(url.parse(req.url).search, { ignoreQueryPrefix: true });

module.exports = queryParser;
