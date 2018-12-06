const corsLib = require("./cors");

const defaultOptions = {
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

  if (options.cors.enabled) {
    const cors = corsLib(options.cors.options);
    return cors(handler(req, res, ...restArgs));
  }

  return handler(req, res, ...restArgs);
};

module.exports = nowMicroApi;
