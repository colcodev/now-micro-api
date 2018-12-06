const defaultOptions = {};

const nowMicroApi = (options = defaultOptions) => handler => (
  req,
  res,
  ...restArgs
) => {
  console.log("OPTIONS", options);
  handler(req, res, ...restArgs);
};

module.exports = nowMicroApi;
