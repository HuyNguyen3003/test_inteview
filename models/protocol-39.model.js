const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-39s";
const COLLECTION_NAME = "protocol-39s";

var protocol39Schema = new mongoose.Schema(
  {
    memberID: {
      type: Number,
    },
    status: {
      type: Number,
    },
    statusContent: {
      type: mongoose.Schema.Types.Mixed, // Allows for any type, including null
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol39Schema);
