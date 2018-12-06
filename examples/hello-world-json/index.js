const { nowMicroApi } = require("now-micro-api");

const noma = nowMicroApi({
  cors: {
    enabled: false
  }
});

const handler = async (req, res) => {
  console.log("QUERY", req.query);
  res.end("OK");
};

module.exports = noma(handler);
