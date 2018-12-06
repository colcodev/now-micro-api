const cors = require("./cors");
const compose = require("../helpers/compose");
const queryParser = require("../helpers/queryParser");

const defaultOptions = {
  queryParser: true,
  cors: {
    enabled: true
  }
};

const nowMicroApi = (options = {}) => handler => (req, res, ...restArgs) => {
  const opts = {
    ...defaultOptions,
    ...options
  };

  console.log("OPTIONS", opts);

  let responseHandler = handler;

  if (opts.cors.enabled) {
    responseHandler = compose(
      cors(),
      responseHandler
    );
  }

  if (opts.queryParser) {
    req.query = queryParser(req);
  }

  return responseHandler(req, res, ...restArgs);
};

module.exports = nowMicroApi;
