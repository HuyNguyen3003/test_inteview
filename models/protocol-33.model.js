const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-33s";
const COLLECTION_NAME = "protocol-33s";

var protocol33Schema = new mongoose.Schema(
  {
    gameID: {
      type: Number,
    },
    groupID: {
      type: Number,
    },
    dtNowBet: {
      type: Map,
      of: new mongoose.Schema({
        playerCount: Number,
        value: Number,
      }),
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol33Schema);
