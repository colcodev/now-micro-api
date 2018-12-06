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

  const { cors } = options;

  if (cors.enabled) {
    return corsLib(handler(req, res, ...restArgs));
  }

  return handler(req, res, ...restArgs);
};

module.exports = nowMicroApi;
