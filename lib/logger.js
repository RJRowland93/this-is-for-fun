const winston = require("winston");
const fs = require("fs");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
});

if (process.env.NODE_ENV === "production") {
  logger.add(
    new winston.transports.File({ filename: "_logs/error.log", level: "error" })
  );
}
if (process.env.NODE_ENV === "development") {
  logger.add(
    new winston.transports.Console({ format: winston.format.simple() })
  );
} else if (process.env.NODE_ENV === "testing") {
  logger.add(
    new winston.transports.Stream({ stream: fs.createWriteStream("/dev/null") })
  );
}

module.exports = logger;
