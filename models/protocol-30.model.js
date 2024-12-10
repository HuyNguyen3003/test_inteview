const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-30s";
const COLLECTION_NAME = "protocol-30s";

var protocol30Schema = new mongoose.Schema(
  {
    memberID: {
      type: Number,
    },
    currencyCode: {
      type: String,
    },
    currencyName: {
      type: String,
    },
    currencyRate: {
      type: Number,
    },
    balance: {
      type: Number,
    },
    lockChips: {
      type: Number,
    },
    chips: {
      type: Number,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol30Schema);
