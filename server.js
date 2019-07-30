const express = require("express");
const next = require("next");
const helmet = require("helmet");
const logger = require("./logger");

const PORT = 3000;

const app = next({
  dev: process.env.NODE_ENV !== "production"
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(helmet());

  server.get("*", handle);

  server.listen(PORT, err => {
    if (err) throw err;
    logger.info(`> Ready on http://localhost:${PORT}`);
  });
});
