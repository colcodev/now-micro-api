const nowMicroApi = (options = {}) => handler => (req, res, ...restArgs) => {
  return handler(req, res, ...restArgs);
};

module.exports = nowMicroApi;
