const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-24s";
const COLLECTION_NAME = "protocol-24s";

var protocol24Schema = new mongoose.Schema(
  {
    gameID: {
      type: Number,
    },
    groupID: {
      type: Number,
    },
    cardArea: {
      type: Number,
    },
    cardID: {
      type: Number,
    },
    inputType: {
      type: Number,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol24Schema);
