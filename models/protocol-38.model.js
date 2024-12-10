const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-38s";
const COLLECTION_NAME = "protocol-38s";

var protocol38Schema = new mongoose.Schema(
  {
    gameID: {
      type: Number,
    },
    groupID: {
      type: Number,
    },
    groupType: {
      type: Number,
    },
    gameNo: {
      type: Number,
    },
    gameNoRound: {
      type: Number,
    },
    betTimeCount: {
      type: Number,
    },
    betTimeContent: {
      type: Object, // Assuming this is an object, adjust if needed
    },
    timeMillisecond: {
      type: Number,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol38Schema);
