const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-70s";
const COLLECTION_NAME = "protocol-70s";

var protocol70Schema = new mongoose.Schema(
  {
    bulletinArr: [
      {
        id: {
          type: Number,
        },
        language: {
          type: String,
        },
        dateTime: {
          type: String,
        },
        contents: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol70Schema);
