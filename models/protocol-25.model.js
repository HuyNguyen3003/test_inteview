const mongoose = require("mongoose");
const DOCUMENT_NAME = "protocol-25s";
const COLLECTION_NAME = "protocol-25s";

var protocol25Schema = new mongoose.Schema(
  {
    gameID: {
      type: Number,
    },
    groupID: {
      type: Number,
    },
    result: {
      type: Number,
    },
    playerScore: {
      type: Number,
    },
    bankerScore: {
      type: Number,
    },
    dtCard: {
      type: Map,
      of: Number,
    },
    winBetAreaArr: {
      type: [Number],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = mongoose.model(DOCUMENT_NAME, protocol25Schema);
