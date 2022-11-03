const mongoose = require("mongoose");
const getLogger = require("../logger");

const logger = getLogger("db");
const { MONGO_URI } = process.env;
const connectionString = MONGO_URI || "mongodb://localhost:27017/restaurant";
mongoose
  .connect(connectionString)
  .then(() => {
    logger.log("Connected to MongoDB");
  })
  .catch((error) => logger.error(error.message));

module.exports = mongoose;
