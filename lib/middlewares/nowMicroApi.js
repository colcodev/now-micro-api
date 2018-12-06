const cors = require("./cors");
const compose = require("../helpers/compose");
const queryParser = require("../helpers/queryParser");

const defaultOptions = {
  queryParser: true,
  cors: {
    enabled: true
  }
};

const nowMicroApi = (options = defaultOptions) => handler => (
  req,
  res,
  ...restArgs
) => {
  console.log("OPTIONS", options);

  let responseHandler = handler;

  if (options.cors.enabled) {
    responseHandler = compose(
      cors(),
      responseHandler
    );
  }

  if (options.queryParser) {
    req.query = queryParser(req);
  }

  return responseHandler(req, res, ...restArgs);
};

module.exports = nowMicroApi;
