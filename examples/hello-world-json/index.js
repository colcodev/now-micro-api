const server = require("http").Server;
const { nowMicroApi } = require("../../index");
const nomaConfig = require("./noma.config");

const noma = nowMicroApi(nomaConfig);

const handler = noma(async (req, res) => {
  console.log("QUERY", req.url, req.query);
  res.end("OK");
});

// Test server
const PORT = 8080;
server(handler).listen(PORT, () => {
  console.log(`noma example running on PORT ${PORT}`);
});
